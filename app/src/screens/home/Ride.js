import React, { Component } from 'react'
import { View, Text,StyleSheet,Dimensions,TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Constants } from 'expo';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {  Card, CardItem, Body,Fab,Button } from 'native-base';
import MapView from 'react-native-maps';
export class Ride extends Component {
    state={

    }
    onStartSet(location){
        this.props.changeStartLocation(location)
    }
    onEndSet(location){
        this.props.changeEndLocation(location)
    }
    render() {
        return (
<View>

    <View style={{width:300,padding:10,margin:15,position:'absolute',top:150,left:10,backgroundColor:'#fff',zIndex:10,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,}}>
        <Text>Find location</Text>
        <GooglePlacesAutocomplete
      onPress={(data, details = null) => {
        this.onStartSet(data.description);
      }}
      query={{
        key: 'AIzaSyAwyZimvA9z_SzFmL55fpJSoeYrloU6RF4',
        language: 'en',
        location: '22.3258742,91.6797787',                                        radius: '30000', 
        components: 'country:bd',
        strictbounds: true,
      }}

    placeholder='Enter Start Location'
    minLength={2}
    autoFocus={true}
    returnKeyType={'default'}
    styles={{
    textInputContainer: {
      backgroundColor: 'blue',
      borderTopWidth: 0,
      borderBottomWidth: 1,
    },
    textInput: {
      marginLeft: 0,
      marginRight: 0,
      height: 38,
      color: '#5d5d5d',
      fontSize: 16,
    },
    predefinedPlacesDescription: {
      color: '#1faadb',
    },
  }}
    />
    <GooglePlacesAutocomplete
      onPress={(data, details = null) => {
        this.onEndSet(data.description);
      }}
      query={{
        key: 'AIzaSyAwyZimvA9z_SzFmL55fpJSoeYrloU6RF4',
        language: 'en',
        location: '22.3258742,91.6797787',                                        radius: '30000', 
        components: 'country:bd',
        strictbounds: true,
      }}

    placeholder='Enter End Location'
    minLength={2}
    autoFocus={true}
    returnKeyType={'default'}
    styles={{
    textInputContainer: {
      backgroundColor: 'blue',
      borderTopWidth: 0,
      borderBottomWidth: 1,
    },
    textInput: {
      marginLeft: 0,
      marginRight: 0,
      height: 38,
      color: '#5d5d5d',
      fontSize: 16,
    },
    predefinedPlacesDescription: {
      color: '#1faadb',
    },
  }}
    />
    <TouchableOpacity
    onPress={()=>{this.props.navigation.navigate('Searching')}}
    style={{padding:10,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'white'}}>Find rider</Text>
    </TouchableOpacity>
    </View>
    <MapView 
                mapType="mutedStandard"
                minZoomLevel={19}
                showsUserLocation={true}
                style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height}} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#eee'
    }
})



const mapDispatchToProps = dispatch => {
    return{
        changeStartLocation : (value) => {dispatch({type:'CHANGE_START_LAT',point: value})},
        changeEndLocation : (value) => {dispatch({type:'CHANGE_END_LAT',point: value})},
    };

};
const mapStateToProps = state => {
    return {
       //
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Ride)