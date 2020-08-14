import React, { Component } from 'react'
import { View,StyleSheet,ScrollView,Image } from 'react-native'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';
import {  Card, CardItem, Body,Fab,Button,CheckBox,ListItem,Text } from 'native-base';

export class Profile extends Component {
    state={
        email:'',
        name:'',
    }

    async componentDidMount(){
        const value = await AsyncStorage.getItem('email')
    if(value !== null) {
      this.setState({email:value})
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
                                Host:{this.props.host}
                            </Text>
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
        host: state.auth.host
    }
};

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)