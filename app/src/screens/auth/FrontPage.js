import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Text, StyleSheet, View,TouchableOpacity,ToastAndroid,Image } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import {Inputs, Passwords, InputButtonBlue, InputButtonRed} from "../../components/ui/Inputs";
class Login extends Component {
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
    render() {
        const onPress = () => {console.log('pressed')};
        return (
            <View style={styles.container}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../../../assets/icon.png')}
                />

                <Text style={{fontSize:20,color:'#000063',marginBottom:40}}>RIDE SHARE</Text>
                <InputButtonBlue icon={'user-circle'} onPress={()=>{this.props.navigation.navigate('Login')}} value={'USER PANEL'}/>
                <InputButtonRed icon={'cab'} onPress={()=>{this.props.navigation.navigate('RiderLogin')}} value={'RIDER PANEL'}/>
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
export default connect(mapStateToProps,mapDispatchToProps)(Login);
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },
    tinyLogo: {
        width: 150,
        height: 150,
    },
    property:{
        color:'blue'
    },
})
