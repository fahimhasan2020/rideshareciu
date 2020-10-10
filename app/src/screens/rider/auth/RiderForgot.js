import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Text, StyleSheet, View,TouchableOpacity,ToastAndroid,Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {Inputs,Passwords,InputButtonBlue} from "../../../components/ui/Inputs";
class RiderForgot extends Component {
    state = {
        username:'',
        password:'',
        sent:false,
        otp:'',
        reset:false,
        confirmPassword:'',
        loading:false
    }

    forgotPassword = () =>{
        if(this.state.username === ''){
            return ToastAndroid.show("Enter email first", ToastAndroid.SHORT);
        }
        const host = this.props.host;
        this.setState({loading:true})
        return fetch(host+'rider/reset/password/otp',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username:this.state.username,
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.hasOwnProperty('fault')){
                    this.setState({loading:false})
                    ToastAndroid.show("Error sending otp", ToastAndroid.SHORT);
                }else if (responseJson.hasOwnProperty('success')){
                    this.setState({loading:false,sent:true});           
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    verifyOtp =() =>{
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
                if (responseJson.hasOwnProperty('fault')){
                    this.setState({loading:false})
                    ToastAndroid.show('Wrong Otp', ToastAndroid.SHORT);
                }else if(responseJson.hasOwnProperty('success')){
                    this.setState({loading:false});
                    this.setState({sent:false,reset:true});
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    resetPassword = () =>{
        const host = this.props.host;
        if(this.state.password === ''){
            return ToastAndroid.show("Enter password first", ToastAndroid.SHORT);
        }
        if(this.state.confirmPassword === ''){
            return ToastAndroid.show("Enter confirm password first", ToastAndroid.SHORT);
        }
        if(this.state.password !== this.state.confirmPassword){
            return ToastAndroid.show("Password didnt matched", ToastAndroid.SHORT);
        }
        this.setState({loading:true})
        return fetch(host+'rider/reset/password/string',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify({
                email:this.state.username,
                password:this.state.password,
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                if (responseJson.hasOwnProperty('fault')){
                    this.setState({loading:false})
                    ToastAndroid.show('Error', ToastAndroid.SHORT);
                }else if(responseJson.hasOwnProperty('success')){
                    this.setState({loading:false});
                    this.props.navigation.navigate('RiderLogin');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        const onPress = () => {console.log('pressed')};
        if(this.state.sent && !this.state.reset){
            return (
                <View style={styles.container}>
                     <TouchableOpacity
                style={{position:'absolute',top:20,left:20}} 
                onPress={()=>{this.props.navigation.navigate('RiderLogin')}}
                >
                <Icon  name={'angle-left'} size={30} color="white"/>
                </TouchableOpacity>
               <View style={{height:Dimensions.get('window').height*0.15,paddingTop:50,alignSelf:'flex-end',paddingRight:50}}>
                   
                <Animatable.Text animation="bounceIn" delay={1000} style={{fontSize:30,color:'#000063',marginBottom:40}}>ENTER OTP</Animatable.Text>
                </View>
                <Animatable.View animation="slideInUp" style={{alignItems:'center',backgroundColor:'#ffffff',width:'100%',height:Dimensions.get('window').height*0.85,paddingTop:150,borderTopLeftRadius:50,borderTopRightRadius:50}}>
                    <Inputs
                        ph={'otp'}
                        val={this.state.otp}
                        onChangeTexts={(value)=>{this.setState({otp:value})}} />
                    <InputButtonBlue loading={this.state.loading} onPress={this.verifyOtp} value={'Verify otp'}/>
                    <Text style={{color:'#ccc'}}>OR</Text>
                    <TouchableOpacity
                        onPress={()=>{
                            this.props.navigation.navigate('Login');
                        }}
                    >
                        <Text style={{color:'#000063'}}>Sign In</Text>
                    </TouchableOpacity>
                    </Animatable.View>
                </View>
            )
        }if(!this.state.sent && this.state.reset){
            return (
                <View style={styles.container}>
                      <TouchableOpacity
                style={{position:'absolute',top:20,left:20}} 
                onPress={()=>{this.props.navigation.navigate('RiderLogin')}}
                >
                <Icon  name={'angle-left'} size={30} color="white"/>
                </TouchableOpacity>
               <View style={{height:Dimensions.get('window').height*0.15,paddingTop:50,alignSelf:'flex-end',paddingRight:50}}>
                   
                <Animatable.Text animation="bounceIn" delay={1000} style={{fontSize:30,color:'#000063',marginBottom:40}}>RESET PASSWORD</Animatable.Text>
                </View>
                <Animatable.View animation="slideInUp" style={{alignItems:'center',backgroundColor:'#ffffff',width:'100%',height:Dimensions.get('window').height*0.85,paddingTop:150,borderTopLeftRadius:50,borderTopRightRadius:50}}>
                    <Passwords
                        ph={'Password'}
                        val={this.state.password}
                        onChangeTexts={(value)=>{this.setState({password:value})}} />
                    <Passwords
                        ph={'Confirm Password'}
                        val={this.state.confirmPassword}
                        onChangeTexts={(value)=>{this.setState({confirmPassword:value})}} />
                    <InputButtonBlue loading={this.state.loading} onPress={this.resetPassword} value={'Reset password'}/>
                    <Text style={{color:'#ccc'}}>OR</Text>
                    <TouchableOpacity
                        onPress={()=>{
                            this.props.navigation.navigate('Login');
                        }}
                    >
                        <Text style={{color:'#000063'}}>Verify</Text>
                    </TouchableOpacity>
    </Animatable.View>
                </View>
            )
        }else if(!this.state.sent && !this.state.reset){
            return (
                <View style={styles.container}>
                     <TouchableOpacity
                style={{position:'absolute',top:20,left:20}} 
                onPress={()=>{this.props.navigation.navigate('RiderLogin')}}
                >
                <Icon  name={'angle-left'} size={30} color="white"/>
                </TouchableOpacity>
               <View style={{height:Dimensions.get('window').height*0.15,paddingTop:50,alignSelf:'flex-end',paddingRight:50}}>
                   
                <Animatable.Text animation="bounceIn" delay={1000} style={{fontSize:30,color:'#000063',marginBottom:40}}>FORGOT PASSWORD</Animatable.Text>
                </View>
                <Animatable.View animation="slideInUp" style={{alignItems:'center',backgroundColor:'#ffffff',width:'100%',height:Dimensions.get('window').height*0.85,paddingTop:150,borderTopLeftRadius:50,borderTopRightRadius:50}}>
                    <Inputs
                        ph={'Enter email to send verification code'}
                        val={this.state.username}
                        onChangeTexts={(value)=>{this.setState({username:value})}} />
                    <InputButtonBlue loading={this.state.loading} onPress={this.forgotPassword} value={'Send verification code'}/>
                    <Text style={{color:'#ccc'}}>OR</Text>
                    <TouchableOpacity
                        onPress={()=>{
                            this.props.navigation.navigate('Login');
                        }}
                    >
                        <Text style={{color:'#000063'}}>Sign In</Text>
                    </TouchableOpacity>
    </Animatable.View>
                </View>
            )
        }
    }
}

const mapDispatchToProps = dispatch => {
    return{
       //
    };

};
const mapStateToProps = state => {
    return {
        host: state.auth.host
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(RiderForgot);

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#e6b54c',
    },
    property:{
        color:'blue'
    },
})
