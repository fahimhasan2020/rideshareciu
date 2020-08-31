import React, { Component } from 'react'
import { View,StyleSheet,ScrollView,Image } from 'react-native'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';
import {  Card, CardItem, Body,Fab,Button,CheckBox,ListItem,Text } from 'native-base';
import {Inputs,Passwords,InputButtonBlue,InputButtonRed} from "../../components/ui/Inputs";


export class Profile extends Component {
    state={
        email:'',
        first_name:'',
        last_name:'',
        nid:'',
        chosenDate:null
    }
componentDidMount =async()=>{
        const value = await AsyncStorage.getItem('email')
    if(value !== null) {
      this.setState({email:value})
      const host = this.props.host;
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
        this.setState({first_name:responseJson.first_name,last_name:responseJson.last_name,nid:responseJson.nid,chosenDate:responseJson.date_of_birth})
    })
    }
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Card>
                    <CardItem>
                        <Body>
                            <Text style={{color:'#838383'}}>
                                PROFILE
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body>
                            <Image source={require('../../../assets/img/user.png')} style={{height:150,width:150,alignSelf:'center'}} />
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body>
                            <Text style={{color:'#838383'}}>
                                Email:{this.state.email}
                            </Text>
                            <Text style={{color:'#838383'}}>
                                First Name:{this.state.first_name}
                            </Text>
                            <Text style={{color:'#838383'}}>
                                Last Name:{this.state.last_name}
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body>
                            <Text style={{color:'#838383'}}>
                                NID:{this.state.nid}
                            </Text>
                            <Text style={{color:'#838383'}}>
                                Date of birth:{this.state.chosenDate}
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body>
                            <InputButtonBlue value={'Edit profile'} onPress={()=>{this.props.navigation.navigate("EditProfile")}} />
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
    }
};

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)