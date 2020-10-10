import React, { Component } from 'react'
import { View, Text,StyleSheet,Image,ScrollView,ToastAndroid,Modal,Dimensions,TouchableHighlight,TouchableOpacity,Linking,Alert} from 'react-native'
import StarRating from 'react-native-star-rating';
import { connect } from 'react-redux'
import {  Card, CardItem, Body,Fab,Button } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Inputs,InputButtonBlue} from "../../components/ui/Inputs"
import AsyncStorage from '@react-native-community/async-storage';
import MapView, { Polyline,Marker } from 'react-native-maps';
import Constants from 'expo-constants';
import Geocoder from 'react-native-geocoding';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Pusher from 'pusher-js/react-native';

export class FindPanel extends Component {
  constructor(props) {
        super(props);
        this.state={
        userId:0,
        errorMessage: '',
        locai:'',
        phone:'',
        lat:22.3617013,
        lon:91.8361786,
        activeIndex:0,
        mode:'driving',
        coords:[],
        mapRef:null,
        modalVisible:false,
        email:'',
        nid:'',
        first_name:'',
        last_name:'',
        distance:'',
        dp:'',
        completed:false
    };
    this.pusher = new Pusher('0d8c1e92affbbd814235', {
      cluster: 'ap1'
    });
  this.channel = this.pusher.subscribe('rider.accept.user');
  this.channel.bind('rider.accept.user', data => {
      let host = this.props.host;
      if(parseInt(data.user) === this.state.userId){
        fetch(host+'user/view/rider',{
          method:'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id:data.rider,
        })
        }).then((response)=>response.json()).then((responseJson)=>{
          this.setState({email:responseJson.email,first_name:responseJson.first_name,last_name:responseJson.last_name,distance:data.time,nid:responseJson.nid,modalVisible:true,phone:responseJson.phone_number,dp:responseJson.profile_picture});
        });
      }      
    });
  this.channels = this.pusher.subscribe('rider.call.complete');
  this.channels.bind('rider.call.complete', data => {
      let host = this.props.host;
      if(parseInt(data.user) === this.state.userId){
        Alert.alert(
          "Ride completed",
          "Pay no",
          [
            { text: "OK", onPress: () => {
             this.props.navigation.navigate('Home');
              } }
          ],
          { cancelable: false }
        );
      }      
    });
  this.channelsi = this.pusher.subscribe('rider.call.cancelled');
  this.channelsi.bind('rider.call.cancelled', data => {
    if(parseInt(data.user) === this.state.userId){
      Alert.alert(
        "Ride cancelled",
        "Ride cancelled by user",
        [
          { text: "OK", onPress: () => {
           this.props.navigation.navigate('Home');
            } }
        ],
        { cancelable: false }
      );
    }      
    });
  }


  componentDidMount =async()=>{
    const value = await AsyncStorage.getItem('email');
    let url = `https://maps.googleapis.com/maps/api/directions/json?origin=${this.props.startPoint}&destination=${this.props.endPoint}&key=AIzaSyAwyZimvA9z_SzFmL55fpJSoeYrloU6RF4&mode=${this.state.mode}`;
    fetch(url)
    .then(response => response.json())
    .then(responseJson => {
        if (responseJson.routes.length) {
            this.setState({
                coords: this.decode(responseJson.routes[0].overview_polyline.points) // definition below
            });
        }
    }).then(()=>{
        this.mapRef.fitToCoordinates(
            this.state.coords,
            false, // not animated
          );
    }).catch(e => {console.warn(e)});
    if (Platform.OS === 'android' && !Constants.isDevice) {
        this.setState({
            errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
        });
    } else {
        this._getLocationAsync();
    }

    let host = this.props.host;
    fetch(host+'user/get/info',{
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email:value   
    })
    }).then((resp)=>resp.json()).then((respi)=>{
      this.setState({userId:respi.id})
    })
    }

  onRegionChange =async() =>{
        this._getLocationAsync();
        let host = this.props.host;
        const value = await AsyncStorage.getItem('email')
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


    decode =(t,e) =>{for(var n,o,u=0,l=0,r=0,d= [],h=0,i=0,a=null,c=Math.pow(10,e||5);u<t.length;){a=null,h=0,i=0;do a=t.charCodeAt(u++)-63,i|=(31&a)<<h,h+=5;while(a>=32);n=1&i?~(i>>1):i>>1,h=i=0;do a=t.charCodeAt(u++)-63,i|=(31&a)<<h,h+=5;while(a>=32);o=1&i?~(i>>1):i>>1,l+=n,r+=o,d.push([l/c,r/c])}return d=d.map(function(t){return{latitude:t[0],longitude:t[1]}})}

    render(){
        return(<View>            
            <MapView
            ref={(ref) => { this.mapRef = ref }}
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
            style={{height:Dimensions.get('window').height,width:Dimensions.get('window').width}}
            >
	<Polyline
		coordinates={this.state.coords}
		strokeColor="blue"
		strokeWidth={6}
	/>
     <Marker
    coordinate={{ "latitude": this.state.lat,   
    "longitude": this.state.lon }}
    title={"Current location"} /> 
          
</MapView>
<Modal
                                animationType="slide"
                                transparent={true}
                                visible={this.state.modalVisible}
                            >
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                    <Text style={{fontSize:16,color:'#adadad',marginBottom:30}}>Your request has been received</Text>
                                        <View style={{flexDirection:'row',marginBottom:30}}>
                                          <Image source={require('../../../assets/img/user.png')} style={{height:50,width:50,borderRadius:50/2,marginRight:50}} />
                                         <View>
                                         <Text style={{fontSize:15,color:'pink',width:100}}>{this.state.email}</Text>
                                          <Text style={{fontSize:10,color:'indigo'}}>{this.state.first_name} {this.state.last_name}</Text>
                                          <Text style={{fontSize:10,color:'orange'}}>NID: {this.state.nid}</Text>
                                          <StarRating
        disabled={true}
        maxStars={5}
        rating={2.5}
        fullStarColor={'#D4AF37'}
        starSize={20}
      />
                                         </View>
                                     
                                        </View>
                                        <View style={{flexDirection:'row',alignItems:'flex-start',borderTopWidth:1,borderTopColor:'gray',width:200}}>
                                          <Text style={{marginRight:140,fontSize:20,color:'gray'}}>Call</Text>
                                          <View><Icon name={'phone'} size={30} style={{color:'green'}} 
                                          onPress={()=>{Linking.openURL(`tel:${this.state.phone}`)}}
                                          /></View>
                                        </View>
                                        <Text style={{fontSize:16,color:'#adadad',marginBottom:20}}>Rider is {this.state.distance} away.</Text>
                                        <TouchableOpacity  onPress={() => {
                                                this.setState({modalVisible:false})
                                            }} >
                                        <LinearGradient
        colors={['#67c20c', '#50851b','#396909']}
        style={{width:200,borderRadius:15,padding: 10,borderRadius: 15, paddingLeft:20,paddingRight:20,shadowColor: "#000",shadowOffset: {width: 0,height:3,},shadowOpacity: 0.27,shadowRadius: 4.65,elevation: 6,alignItems:'center'}}>
    <Text style={{backgroundColor: 'transparent',fontSize: 13,color: '#fff',alignSelf:'center'}}>Follow</Text></LinearGradient>
                                        </TouchableOpacity>       
                                    </View>
                                </View>
                            </Modal>
        </View>)
    }
}



const styles = StyleSheet.create({
    container:{flex:1,alignItems:'center',justifyContent:'center'},
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

const mapStateToProps = (state) => ({
    startPoint: state.auth.startPoint,
    endPoint: state.auth.endPoint,
    startPlaceId:state.auth.startPlaceId,
    endPlaceId:state.auth.endPlaceId,
    vehicleType:state.auth.vehicleType,
    requestType:state.auth.requestType,
    host:state.auth.host

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(FindPanel)