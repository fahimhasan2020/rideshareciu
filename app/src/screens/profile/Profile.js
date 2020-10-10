import React, { Component } from 'react'
import { View,StyleSheet,ScrollView,Image,ToastAndroid } from 'react-native'
import { connect } from 'react-redux'
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import {  Card, CardItem, Body,Fab,Button,CheckBox,ListItem,Text } from 'native-base';
import {Inputs,Passwords,InputButtonBlue,InputButtonRed} from "../../components/ui/Inputs";


export class Profile extends Component {
    state={
        email:'',
        first_name:'',
        last_name:'',
        nid:'',
        dp:'',
        chosenDate:null,
        phone:''
    }
componentDidMount =async()=>{
        const value = await AsyncStorage.getItem('email')
    if(value !== null) {
      this.setState({email:value})
      const host = this.props.host;
      if(this.props.rider === true){
        return  fetch(host+'rider/get/info',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email:value,
            })
        }).then((response) => response.json())
        .then((responseJson)=>{
            this.setState({first_name:responseJson.first_name,last_name:responseJson.last_name,nid:responseJson.nid,chosenDate:responseJson.date_of_birth.split('T')[0],
            dp:responseJson.profile_picture,
            phone:responseJson.phone_number
            })
        })

      }else{
        return  fetch(host+'user/get/info',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email:value,
            })
        }).then((response) => response.json())
        .then((responseJson)=>{
            this.setState({first_name:responseJson.first_name,last_name:responseJson.last_name,nid:responseJson.nid,chosenDate:responseJson.date_of_birth.split('T')[0],
            dp:responseJson.profile_picture,
            phone:responseJson.phone_number
        })
        })
      }
    }
    }
async backCalled (){
    ToastAndroid.show("Profile updated", ToastAndroid.SHORT);
    const value = await AsyncStorage.getItem('email')
    if(value !== null) {
      this.setState({email:value})
      const host = this.props.host;
      if(this.props.rider === true){
        return  fetch(host+'rider/get/info',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email:value,
            })
        }).then((response) => response.json())
        .then((responseJson)=>{
            console.log(responseJson);
            this.setState({first_name:responseJson.first_name,last_name:responseJson.last_name,nid:responseJson.nid,chosenDate:responseJson.date_of_birth.split('T')[0],
            dp:responseJson.profile_picture,
            phone:responseJson.phone_number
            })
        })

      }else{
        return  fetch(host+'user/get/info',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email:value,
            })
        }).then((response) => response.json())
        .then((responseJson)=>{
            this.setState({first_name:responseJson.first_name,last_name:responseJson.last_name,nid:responseJson.nid,chosenDate:responseJson.date_of_birth.split('T')[0],
            dp:responseJson.profile_picture,
            phone:responseJson.phone_number
        })
        })
      }
    }
}

    render() {
        let profile = require('../../../assets/img/user.png');
        if(this.state.dp !== ''){
            profile = {uri:this.props.host+'images/'+this.state.dp};
        }else{
            profile = require('../../../assets/img/user.png');;
        }
        return (
            <ScrollView style={styles.container}>
                <Card>
                <LinearGradient
        colors={['#fa029f','#cf3897', '#4d2d41']}
        style={{ padding: 10, alignItems: 'center',flexDirection:'row',paddingLeft:20,paddingRight:20,shadowColor: "#000",shadowOffset: {width: 0,height:3,},shadowOpacity: 0.27,shadowRadius: 4.65,elevation: 6,height:200 }}>
         <Body>
                            <Image source={profile} style={{height:150,width:150,alignSelf:'center',borderRadius: 150 / 2,
    overflow: "hidden",position:'absolute',top:15,left:'25%'}} />
                        </Body>
        </LinearGradient>
                       
                   
                </Card>
                <Card style={{marginTop:80}}>
                    <CardItem>
                        <Body>
                            <Text style={{fontSize:20,alignSelf:'center',fontFamily:'Roboto',color:'pink'}}>PROFILE INFO</Text>
                            <Text style={{color:'#838383',alignSelf:'center',fontSize:15,textTransform:'uppercase'}}>
                                {this.state.email}
                            </Text>
                            <Text style={{color:'#838383',alignSelf:'center',fontSize:12}}>
                                {this.state.first_name} {this.state.last_name} 
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body>
                            <View style={{flexDirection:'row',marginBottom:20}}>
                            <Icon  name={'address-card'} size={20} color="#cf3897"/>
                            <Text style={{color:'#838383',marginLeft:20}}>
                               {this.state.nid}
                            </Text>
                            </View>
                           
                            <View style={{flexDirection:'row',marginBottom:20}}>
                            <Icon  name={'calendar'} size={20} color="#cf3897"/>
                            <Text style={{color:'#838383',marginLeft:25}}>
                               {this.state.chosenDate}
                            </Text>
                            </View>
                            <View style={{flexDirection:'row',marginBottom:20}}>
                            <Icon  name={'phone'} size={20} color="#cf3897"/>
                            <Text style={{color:'#838383',marginLeft:28}}>
                               {this.state.phone}
                            </Text>
                            </View>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body>
                            <InputButtonBlue value={'Edit profile'} onPress={()=>{this.props.navigation.navigate("EditProfile",{callHome:this.backCalled.bind(this)})}} />
                        </Body>
                    </CardItem>
                </Card>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#eee'
    }
})

const mapStateToProps = state => {
    return {
        host: state.auth.host,
        first_name: state.auth.first_name,
        last_name: state.auth.last_name,
        nid: state.auth.nid,
        dob: state.auth.dob,
        rider:state.auth.rider
    }
};

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)