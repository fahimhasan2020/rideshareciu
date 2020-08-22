import React, { Component } from 'react'
import {Text, StyleSheet, View, TouchableOpacity, ToastAndroid} from 'react-native'
import {Inputs,Passwords,InputButtonBlue} from "../../components/ui/Inputs";
import AsyncStorage from "@react-native-community/async-storage";
import {connect} from "react-redux";
class Register extends Component {
    state = {
        username:'',
        password:'',
        nid:'',
        device_name:'android',
        usernameError:'',
        nidError:'',
        usernameErrorHeight:0,
        nidErrorHeight:0,
        passwordErrorHeight:0,
        passwordError:'',
        confirmPassword:'',
        confirmPasswordError:'',
        confirmPasswordErrorHeight:0,
        loading:false,
    }
    onButtonPress(){
        this.setState({loading:true})
        if (this.state.username === '' || this.state.password === '' || this.state.confirmPassword === ''){
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
            if (this.state.confirmPassword === ''){
                this.setState({confirmPasswordError:'Confirm Password required'});
                this.setState({confirmPasswordErrorHeight:15})
            }else{
                this.setState({confirmPasswordError:''});
                this.setState({confirmPasswordErrorHeight:0})
            }
            this.setState({loading:false})
        }else{
            if (this.state.password.length < 8){
                this.setState({loading:false})
                this.setState({passwordErrorHeight:15})
                this.setState({passwordError:'Password field should be at least 8 character'});
            }else if(this.state.password !== this.state.confirmPassword){
                this.setState({loading:false})
                this.setState({passwordErrorHeight:15})
                this.setState({passwordError:'Password didn\'t matched'});
            } else{
                const host = this.props.host;
                return fetch(host+'user/register',{
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email:this.state.username,
                        nid:this.state.nid,
                        password:this.state.password,
                        password_confirmation:this.state.confirmPassword,
                    })
                }).then((response) => response.json())
                    .then((responseJson) => {
                        if (responseJson.hasOwnProperty('errors')){
                            this.setState({loading:false})
                            if (responseJson.errors.email.toString()=== 'validation.unique'){
                                ToastAndroid.show('Email exists', ToastAndroid.SHORT);
                            }
                        }else{
                            this.setState({loading:false});
                            this.props.navigation.navigate("Login");
                            
            }
        })

    };
}
    }

    render() {
        const onPress = () => {console.log('pressed')};
        return (
            <View style={styles.container}>
                <Text style={{fontSize:30,color:'#000063',marginBottom:40}}>Register</Text>
                <Inputs
                    ph={'Email'}
                    val={this.state.username}
                    onChangeTexts={(value)=>{this.setState({username:value})}} />
                <Text style={{color:'red',height:this.state.usernameErrorHeight}}>{this.state.usernameError}</Text>
                <Inputs
                    ph={'National Id'}
                    val={this.state.nid}
                    onChangeTexts={(value)=>{this.setState({nid:value})}} />
                <Text style={{color:'red',height:this.state.nidErrorHeight}}>{this.state.nidError}</Text>
                <Passwords
                    ph={'Password'}
                    val={this.state.password}
                    onChangeTexts={(value)=>{this.setState({password:value})}}
                />
                <Text style={{color:'red',height:this.state.passwordErrorHeight}}>{this.state.passwordError}</Text>
                <Passwords
                    ph={'Confirm Password'}
                    val={this.state.confirmPassword}
                    onChangeTexts={(value)=>{this.setState({confirmPassword:value})}}
                />
                <Text style={{color:'red',height:this.state.confirmPasswordErrorHeight}}>{this.state.confirmPasswordError}</Text>
                <InputButtonBlue loading={this.state.loading} onPress={()=>{this.onButtonPress()}} value={'Sign Up'}/>
                <Text style={{color:'#ccc'}}>OR</Text>

                <TouchableOpacity
                    onPress={()=>{
                        this.props.navigation.navigate('Login')
                    }}
                >
                    <Text style={{color:'#000063'}}>Sign In</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        changeAccessToken : (value) => {dispatch({type:'CHANGE_TOKEN',token: value})},
        changeLogged : (value) => {dispatch({type:'LOGIN',logged: value})},
    };

};
const mapStateToProps = state => {
    return {
        accessToken : state.auth.accessToken,
        host: state.auth.host
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Register);
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