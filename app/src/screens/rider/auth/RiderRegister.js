import React, { Component } from 'react'
import {Text, StyleSheet, View, TouchableOpacity, ToastAndroid,Dimensions} from 'react-native'
import {Inputs,Passwords,InputButtonBlue} from "../../../components/ui/Inputs";
import AsyncStorage from "@react-native-community/async-storage";
import {connect} from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
class RiderRegister extends Component {
    state = {
        username:'',
        password:'',
        nid:'',
        nidError:'',
        nidErrorHeight:0,
        device_name:'android',
        usernameError:'',
        usernameErrorHeight:0,
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
                return fetch(host+'rider/register',{
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
                        //console.log(responseJson);
                        if (responseJson.hasOwnProperty('errors')){
                            this.setState({loading:false})
                            if (responseJson.errors.email.toString()=== 'validation.unique'){
                                ToastAndroid.show('Email exists', ToastAndroid.SHORT);
                            }
                        }else{
                            this.setState({loading:false});
                            const host = this.props.host;
                            this.props.navigation.navigate("RiderLogin");
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        }

    }

    render() {
        const onPress = () => {console.log('pressed')};
        return (
            <View style={styles.container}>
                 <TouchableOpacity
                style={{position:'absolute',top:20,left:20}} 
                onPress={()=>{this.props.navigation.navigate('RiderLogin')}}
                >
                <Icon  name={'angle-left'} size={30} color="white"/>
                </TouchableOpacity>
               <View style={{height:Dimensions.get('window').height*0.15,paddingTop:50,alignSelf:'flex-end',paddingRight:50}}>
                   
                <Animatable.Text animation="bounceIn" delay={1000} style={{fontSize:30,color:'#000063',marginBottom:40}}>RIDER REGISTER</Animatable.Text>
                </View>
                <Animatable.View animation="slideInUp" style={{alignItems:'center',backgroundColor:'#ffffff',width:'100%',height:Dimensions.get('window').height*0.85,paddingTop:150,borderTopLeftRadius:50,borderTopRightRadius:50}}>
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
                        this.props.navigation.navigate('RiderLogin')
                    }}
                >
                    <Text style={{color:'#0969aa'}}>Sign In</Text>
                </TouchableOpacity>
                </Animatable.View>
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
export default connect(mapStateToProps,mapDispatchToProps)(RiderRegister);
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