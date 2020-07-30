import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity } from 'react-native'
import {Inputs,Passwords,InputButtonBlue} from "../../../components/ui/Inputs";
export default class RiderForgot extends Component {
    state = {
        username:'',
        password:''
    }
    render() {
        const onPress = () => {console.log('pressed')};
        return (
            <View style={styles.container}>
                <Text style={{fontSize:30,color:'#259cb1',marginBottom:40}}>Forgot Password</Text>
                <Inputs
                    ph={'Enter email to send verification code'}
                    val={this.state.username}
                    onChangeTexts={(value)=>{this.setState({username:value})}} />
                <InputButtonBlue onPress={onPress} value={'Send verification code'}/>
                <Text style={{color:'#ccc'}}>OR</Text>
                <TouchableOpacity
                    onPress={()=>{
                        this.props.navigation.navigate('Login');
                    }}
                >
                    <Text style={{color:'#0969aa'}}>Sign In</Text>
                </TouchableOpacity>

            </View>
        )
    }
}
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
