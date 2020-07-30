import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Text, StyleSheet, View,TouchableOpacity,ToastAndroid } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import {Inputs,Passwords,InputButtonBlue} from "../../../components/ui/Inputs";
class RiderLogin extends Component {
    state = {
        username:'',
        password:'',
        device_name:'android',
        usernameError:'',
        usernameErrorHeight:0,
        passwordErrorHeight:0,
        passwordError:'',
        loading:false,
    }
    onButtonPress(){
        this.setState({loading:true})
        if (this.state.username === '' || this.state.password === ''){
            if (this.state.username === ''){
                this.setState({usernameError:'Email/Phone required'});
                this.setState({usernameErrorHeight:15})
            }else{
                this.setState({usernameError:''});
                this.setState({usernameErrorHeight:0})
            }
            if (this.state.password === ''){
                this.setState({passwordError:'Password required'});
                this.setState({passwordErrorHeight:15})
            }else{
                this.setState({passwordError:''});
                this.setState({passwordErrorHeight:0})
            }
            this.setState({loading:false})
        }else{
            if (this.state.password.length < 8){
                this.setState({loading:false})
                this.setState({passwordErrorHeight:15})
                this.setState({passwordError:'Password field should be at least 8 character'});
            }else{
                const host = this.props.host;
                return fetch(host+'rider/login',{
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username:this.state.username,
                        password:this.state.password,
                        device_name:this.state.device_name
                    })
                }).then((response) => response.json())
                    .then((responseJson) => {
                        if (responseJson.hasOwnProperty('errors')){
                            this.setState({loading:false})
                            ToastAndroid.show(responseJson.errors.email.toString(), ToastAndroid.SHORT);
                        }else{
                            this.setState({loading:false});
                            AsyncStorage.multiSet([['token', responseJson.token],['email', responseJson.user.email],['loggedIn','true']]).then(() => {
                                this.props.changeLogged(true);
                                this.props.changeAccessToken(responseJson.access_token);
                             });
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        }

    };
    render() {
        const onPress = () => {console.log('pressed')};
        return (
            <View style={styles.container}>
                <Text style={{fontSize:30,color:'#259cb1',marginBottom:40}}>Rider LOGIN</Text>
                <Inputs
                    ph={'Username'}
                    val={this.state.username}
                    onChangeTexts={(value)=>{this.setState({username:value})}} />
                <Text style={{color:'red',height:this.state.usernameErrorHeight}}>{this.state.usernameError}</Text>
                    <Passwords
                        ph={'Password'}
                        val={this.state.password}
                        onChangeTexts={(value)=>{this.setState({password:value})}}
                    />
                <Text style={{color:'red',height:this.state.passwordErrorHeight}}>{this.state.passwordError}</Text>
                    <View style={{alignItems:'flex-end',height:30}}>
                        <TouchableOpacity
                            style={{position:'absolute',left:10}}
                            onPress={()=>{
                                this.props.navigation.navigate('RiderForgot')
                            }}>
                            <Text style={{color:'#0969aa'}}>Forget password?</Text>
                        </TouchableOpacity>
                    </View>

                <InputButtonBlue loading={this.state.loading} onPress={()=>{this.onButtonPress()}} value={'Sign In'}/>
                <Text style={{color:'#ccc'}}>OR</Text>

                <TouchableOpacity
                    onPress={()=>{
                        this.props.navigation.navigate('RiderRegister');
                    }}
                >
                    <Text style={{color:'#0969aa'}}>Sign Up</Text>
                </TouchableOpacity>

            </View>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return{
        changeAccessToken : (value) => {dispatch({type:'CHANGE_TOKEN',token: value})},
        changeLogged : (value) => {dispatch({type:'RIDERLOGIN',logged: value})},
    };

};
const mapStateToProps = state => {
    return {
        accessToken : state.auth.accessToken,
        host: state.auth.host
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(RiderLogin);
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },
    property:{
        color:'blue'
    },
})
