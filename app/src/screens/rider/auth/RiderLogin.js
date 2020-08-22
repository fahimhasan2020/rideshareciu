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
        otp:'',
        otpError:'',
        otpErrorHeight:0,
        usernameErrorHeight:0,
        passwordErrorHeight:0,
        passwordError:'',
        loading:false,
        sent:false
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
                console.log(host);
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
                            console.log(responseJson);
                            this.setState({loading:false});
                            AsyncStorage.multiSet([['token', responseJson.token],['email', responseJson.user.email],['loggedIn','true']]).then(() => {
                                this.props.changeAccessToken(responseJson.access_token);
                                this.setState({sent:true})
                             });
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        }
    };
    verifyOtp(){
        const host = this.props.host;
        this.setState({loading:true})
        return fetch(host+'rider/verify/otp',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email:this.state.username,
                otp:this.state.otp
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                if (responseJson.hasOwnProperty('fault')){
                    this.setState({loading:false})
                    ToastAndroid.show('Wrong Otp', ToastAndroid.SHORT);
                }else if(responseJson.hasOwnProperty('success')){
                    this.setState({loading:false});
                    this.props.changeLogged(true);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        if(this.state.sent){
            const onPress = () => {console.log('pressed')};
        return (
            <View style={styles.container}>
                <Text style={{fontSize:30,color:'#000063',marginBottom:40}}>ENTER OTP</Text>
                <Inputs
                    ph={'OTP'}
                    val={this.state.otp}
                    onChangeTexts={(value)=>{this.setState({otp:value})}} />
                <Text style={{color:'red',height:this.state.otpErrorHeight}}>{this.state.otpError}</Text>
                <InputButtonBlue loading={this.state.loading} onPress={()=>{this.verifyOtp()}} value={'Verify'}/>
            </View>
        )
        }else{
            const onPress = () => {console.log('pressed')};
        return (
            <View style={styles.container}>
                <Text style={{fontSize:30,color:'#000063',marginBottom:40}}>Rider LOGIN</Text>
                <Inputs
                    ph={'Email'}
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
                            <Text style={{color:'#000063'}}>Forget password?</Text>
                        </TouchableOpacity>
                    </View>

                <InputButtonBlue loading={this.state.loading} onPress={()=>{this.onButtonPress()}} value={'Sign In'}/>
                <Text style={{color:'#ccc'}}>OR</Text>

                <TouchableOpacity
                    onPress={()=>{
                        this.props.navigation.navigate('RiderRegister');
                    }}
                >
                    <Text style={{color:'#000063'}}>Sign Up</Text>
                </TouchableOpacity>

            </View>
        )
        }
        
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
export default connect(mapStateToProps,mapDispatchToProps)(RiderLogin);
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },
    property:{
        color:'#000063'
    },
})
