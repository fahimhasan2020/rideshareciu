import React, { Component,useRef } from 'react'
import { View, Text,StyleSheet,Dimensions,TouchableOpacity,Modal,TouchableHighlight,FlatList,ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { Constants } from 'expo';
import { FontAwesome } from '@expo/vector-icons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {  Card, CardItem, Body,Fab,Button } from 'native-base';
import MapView from 'react-native-maps';
import AsyncStorage from '@react-native-community/async-storage';
export class Pole extends Component {
  state={
    bottomSheet:false,
    email:'',
    locations:[]
  }
  onStartSet(location){
      this.props.changeStartLocation(location)
  }
  onEndSet(location){
      this.props.changeEndLocation(location)
  }

  componentDidMount = async() =>{
    const value = await AsyncStorage.getItem('email')
    if(value !== null) {
      this.setState({email:value});
      fetch(this.props.host+'user/get/saved/locations',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email:this.state.email,
        })
    }).then((response) => response.json())
    .then((responseJson) => {
        if (responseJson.hasOwnProperty('errors')){
           
        }else{
          this.setState({locations:responseJson});
          console.log(responseJson);
        }
    })
    .catch((error) => {
        console.log(error);
    })}
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
        console.log(data, details);
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
        console.log(data, details);
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
    /><Text style={{alignSelf:'center',color:'#adadad'}}>OR</Text>
    <TouchableOpacity
    onPress={()=>{this.setState({bottomSheet:true})}}
    style={{justifyContent:'center',alignItems:'center',marginBottom:10,color:'#adadad'}}>
    <Text style={{color:'#adadad'}}>Choose from saved locations</Text>
    </TouchableOpacity> 
    <Modal
                                animationType="slide"
                                transparent={true}
                                visible={this.state.bottomSheet}
                            >
                              <View style={{ height: 300,justifyContent: "center",
      alignItems: "center",
      marginTop: 122, width:300,backgroundColor:'white',marginLeft:30 }}>
                                <ScrollView>
                                <View onStartShouldSetResponder={() => true}>
                                  <FlatList
            data={this.state.locations}
            keyExtractor={item => new Date()+Math.random()}
            renderItem={({ item }) => <View style={{marginTop:10,backgroundColor:'gray',padding:10,width:250}}><TouchableOpacity
            onPress={()=>{ this.onEndSet(item.formatted_address);this.setState({bottomSheet:false});}}
            style={styles.oppo}>
              <FontAwesome name="map-marker" style={{color:'red'}} size={20} />
              <Text>{item.formatted_address}</Text>
            
        </TouchableOpacity></View>}
          />
                
                                </View>
                                
                                </ScrollView>
                                <TouchableHighlight
                                            style={{position:'absolute',top:10,right:10}}
                                            onPress={() => {
                                                this.setState({bottomSheet:false})
                                            }}
                                        >
                                            <FontAwesome name={'times'}  />
                                        </TouchableHighlight>
                                </View>
                               
                            </Modal>
    <TouchableOpacity
    onPress={()=>{this.props.navigation.navigate('Searching')}}
    style={{padding:10,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'white'}}>Find rider</Text>
    </TouchableOpacity>
    </View>
    <View style={{width:300,padding:10,margin:15,position:'absolute',top:450,left:10,backgroundColor:'#fff',zIndex:10,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,}}>
        <Text style={{color:'#adadad'}}
        >No nearer pole found</Text>
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
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
},
modalView: {
  margin: 20,
  backgroundColor: "white",
  borderRadius: 20,
  padding: 35,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 15,
  height:300
},
flatList:{
flex:1,
height:100,
alignItems:'flex-start',
justifyContent:'flex-start',
width:"100%",
borderBottomWidth:1,
borderBottomColor:'#eee',
padding:15,
paddingLeft:35,
flexDirection:'row'
},
oppo:{
flex:1,
flexDirection:'row',
marginTop:10
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
      host: state.auth.host
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Pole)