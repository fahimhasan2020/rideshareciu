import React, { Component } from 'react'
import {Text, StyleSheet, ScrollView,View,Image,TouchableOpacity,Modal,Linking,Alert,ToastAndroid,Dimensions} from 'react-native'
import {  Card, CardItem, Body } from 'native-base';
import StarRating from 'react-native-star-rating';
import { YellowBox } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Geocoder from 'react-native-geocoding';
import MapView,{Polyline,Marker,AnimatedRegion,ProviderPropType} from 'react-native-maps';
import Pusher from 'pusher-js/react-native';
import {InputButtonRed} from "../../../components/ui/Inputs";

console.disableYellowBox = true;


class RiderMap extends Component {
  constructor(props) {
        super(props);
        this.state={
            start:'',
            end:'',
            rent:'',
            errorMessage:'',
            lat:22.3617013,
            lon:91.8361786,
            locai:'',
            activeIndex:0,
            mode:'driving',
            coords:[],
            mapRef:null,
            carLat:0,
            carLon:0,
            coordinate: new AnimatedRegion({
              latitude: 22.3484696,
              longitude: 91.8223154,
              latitudeDelta:0.09,
              longitudeDelta:0.035
            }),
        };
 }




 componentDidMount = async()=>{
   if(this.props.requestType === 'ride'){
     let host = this.props.host;
     fetch(host+'rider/find/ride',{
       method:'POST',
       headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
      body: JSON.stringify({
        id:this.props.rideId  
      })
     }).then((response)=>response.json()).
     then((responseJson)=>{
       this.setState({start:responseJson.starting_cordinate,end:responseJson.ending_cordinate});
      let url = `https://maps.googleapis.com/maps/api/directions/json?origin=${responseJson.ending_cordinate}&destination=${responseJson.starting_cordinate}&key=AIzaSyAwyZimvA9z_SzFmL55fpJSoeYrloU6RF4&mode=${this.state.mode}`;
      fetch(url)
      .then(responsei => responsei.json())
      .then(responseJsoni => {
          if (responseJsoni.routes.length) {
              this.setState({
                  coords: this.decode(responseJsoni.routes[0].overview_polyline.points)
              });
          }
      }).then(()=>{
          this.mapRef.fitToCoordinates(
              this.state.coords,
              false, // not animated
            );
      }).catch(e => {console.warn(e)});
     })
   }
    if (Platform.OS === 'android' && !Constants.isDevice) {
        this.setState({
            errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
        });
    } else {
        this._getLocationAsync();
    }
}

_getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
        this.setState({
            errorMessage: 'Permission to access location was denied',
        });
    }

    let location = await Location.getCurrentPositionAsync({});
    Geocoder.init("AIzaSyAwyZimvA9z_SzFmL55fpJSoeYrloU6RF4");
    Geocoder.from(location.coords.latitude,location.coords.longitude)
        .then(json => {
            var addressComponent = json.results[0].formatted_address;
            this.setState({locai:addressComponent});
            this.setState({lat:location.coords.latitude});
            this.setState({lon:location.coords.longitude})
        })
        .catch(error => console.warn(error));
    
};

// setToLoveLane = () =>{
//   const duration = 500;
//   const { coordinate } = this.state;
//   let lovelane = {
//     latitude:22.3421117,
//     longitude:91.8267376,
//     latitudeDelta:0.09,
//     longitudeDelta:0.035
//   }
//   coordinate.timing(
//       lovelane).start();
// }

completeRide = () => {
  let host = this.props.host;
  if(this.props.requestType === 'ride'){
    fetch(host+'rider/complete/ride',{
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
       id:this.props.rideId   
    })
    }).then(()=>{
      this.props.navigation.navigate('Home');
    })
  }
  
}

cancelRide = () => {
  let host = this.props.host;
  if(this.props.requestType === 'ride'){
    fetch(host+'rider/cancel/ride',{
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
       id:this.props.rideId   
    })
    }).then(()=>{
      this.props.navigation.navigate('Home');
    })
  }
  
}



onRegionChange =async() =>{
  this._getLocationAsync();
  let host = this.props.host;
  const value = await AsyncStorage.getItem('email')
  if(this.props.requestType === 'ride'){
    return  fetch(host+'rider/location/update',{
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          id:this.props.rideId,
          latitude:this.state.lat,
          longitude:this.state.lon   
      })
  })
  }
  
}

decode =(t,e) =>{for(var n,o,u=0,l=0,r=0,d= [],h=0,i=0,a=null,c=Math.pow(10,e||5);u<t.length;){a=null,h=0,i=0;do a=t.charCodeAt(u++)-63,i|=(31&a)<<h,h+=5;while(a>=32);n=1&i?~(i>>1):i>>1,h=i=0;do a=t.charCodeAt(u++)-63,i|=(31&a)<<h,h+=5;while(a>=32);o=1&i?~(i>>1):i>>1,l+=n,r+=o,d.push([l/c,r/c])}return d=d.map(function(t){return{latitude:t[0],longitude:t[1]}})}

 render(){
     return(<View>
       <View style={{position:'absolute',top:50,left:50,zIndex:10,backgroundColor:'#ffffff',shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 9,
},
shadowOpacity: 0.50,
shadowRadius: 12.35,

elevation: 19,padding:15,width:250,borderRadius:15}}>
        <Text>
         From:    {this.state.start}
        </Text>
       </View>
       <View style={{position:'absolute',top:150,padding:20,width:250,borderRadius:15,left:50,zIndex:10,backgroundColor:'#ffffff',shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 9,
},
shadowOpacity: 0.50,
shadowRadius: 12.35,
elevation: 19,}}>
         <Text>To:    {this.state.end}</Text>
       </View>

         <MapView 
         ref={(ref) => { this.mapRef = ref }}
         onRegionChangeComplete={()=>{this.onRegionChange()}}
         showsUserLocation={true}
         customMapStyle={[
                {
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#f5f5f5"
                    }
                  ]
                },
                {
                  "elementType": "labels.icon",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#616161"
                    }
                  ]
                },
                {
                  "elementType": "labels.text.stroke",
                  "stylers": [
                    {
                      "color": "#f5f5f5"
                    }
                  ]
                },
                {
                  "featureType": "administrative",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "administrative.land_parcel",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#bdbdbd"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#eeeeee"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#757575"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#e5e5e5"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#9e9e9e"
                    }
                  ]
                },
                {
                  "featureType": "road",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#ffffff"
                    }
                  ]
                },
                {
                  "featureType": "road",
                  "elementType": "labels.icon",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "road.arterial",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#757575"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#dadada"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#616161"
                    }
                  ]
                },
                {
                  "featureType": "road.local",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#9e9e9e"
                    }
                  ]
                },
                {
                  "featureType": "transit",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "transit.line",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#e5e5e5"
                    }
                  ]
                },
                {
                  "featureType": "transit.station",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#eeeeee"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#c9c9c9"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#9e9e9e"
                    }
                  ]
                }
              ]}   
            style={{height:Dimensions.get('window').height,width:Dimensions.get('window').width}}>
              <Polyline
		coordinates={this.state.coords}
		strokeColor="green"
		strokeWidth={6}
	/>


          {/* <Marker.Animated
            ref={marker => {
              this.marker = marker;
            }}
            coordinate={this.state.coordinate}
          /> */}
            </MapView>
            <TouchableOpacity
            onPress={()=>{
              Alert.alert(
                "Ride Completed",
                "Receive payment?",
                [
                  {
                    text: "No",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "Yes", onPress: () => {
                    this.completeRide();
                  } }
                ],
                { cancelable: false }
              );
            }}
            style={{position:'absolute',bottom:100,left:80,zIndex:10}}>
            <LinearGradient
        colors={['#1aff00', '#21bd0f','#196310']}
        style={{width:200,borderRadius:15,padding: 10,borderRadius: 15, paddingLeft:20,paddingRight:20,shadowColor: "#000",shadowOffset: {width: 0,height:3,},shadowOpacity: 0.27,shadowRadius: 4.65,elevation: 6,alignItems:'center'}}>
    <Text style={{backgroundColor: 'transparent',fontSize: 13,color: '#fff',alignSelf:'center'}}>Completed</Text></LinearGradient>
              </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{
              Alert.alert(
                "Ride Cancellation",
                "Do you want to cancel the ride?",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => {
                   this.cancelRide();
                    } }
                ],
                { cancelable: false }
              );
            }}
            style={{position:'absolute',bottom:50,left:80,zIndex:10}}>
            <LinearGradient
        colors={['#fc2c03', '#d6300f','#912e1a']}
        style={{width:200,borderRadius:15,padding: 10,borderRadius: 15, paddingLeft:20,paddingRight:20,shadowColor: "#000",shadowOffset: {width: 0,height:3,},shadowOpacity: 0.27,shadowRadius: 4.65,elevation: 6,alignItems:'center'}}>
    <Text style={{backgroundColor: 'transparent',fontSize: 13,color: '#fff',alignSelf:'center'}}>Cancel</Text></LinearGradient>
              </TouchableOpacity>
     </View>)
 }
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#eee'
    },
    options:{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        height:100,
        width:'47%',
        backgroundColor:'#fff',
        margin:5,
        padding:5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardSection:{
        width:'100%',
        flex: 1, flexDirection: 'row',justifyContent:'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
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
        elevation: 15
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize:20,
        color:'#000063'
    },
});

const mapStateToProps = state => {
    return {
        host: state.auth.host,
        first_name: state.auth.first_name,
        last_name: state.auth.last_name,
        nid: state.auth.nid,
        dob: state.auth.dob,
        rider:state.auth.rider,
        requestType:state.auth.requestType,
        rideId:state.auth.rideId
    }
};
const mapDispatchToProps = dispatch => {
    return{
        //
    };

};
export default connect(mapStateToProps, mapDispatchToProps)(RiderMap);