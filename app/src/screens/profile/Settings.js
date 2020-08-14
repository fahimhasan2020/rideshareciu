import React, { Component } from 'react'
import { View,StyleSheet,ScrollView } from 'react-native'
import { connect } from 'react-redux'
import {  Card, CardItem, Body,Fab,Button,CheckBox,ListItem,Text } from 'native-base';

export class Settings extends Component {
    state={
        location:true,
        notification:false,
        cookies:false,
        info:false

    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Card>
                <ListItem>
            <Body>
              <Text>BASIC SETTINGS</Text>
            </Body>
          </ListItem>
                <ListItem>
            <CheckBox
            onPress={() => this.setState({
                location: !this.state.location
              })}
            checked={this.state.location} />
            <Body>
              <Text>LOCATION</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox 
            onPress={() => this.setState({
                notification: !this.state.notification
              })}
            checked={this.state.notification} />
            <Body>
              <Text>NOTIFICATION</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox 
            onPress={() => this.setState({
                cookies: !this.state.cookies
              })}
            checked={this.state.cookies} />
            <Body>
              <Text>COOKIES</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox 
            onPress={() => this.setState({
                info: !this.state.info
              })}
            checked={this.state.info} />
            <Body>
              <Text>Show info to others</Text>
            </Body>
          </ListItem>
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

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)