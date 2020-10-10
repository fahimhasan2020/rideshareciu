import React, { Component } from 'react'
import {Text, StyleSheet, ScrollView,View,Image,TouchableOpacity,Modal,Linking,ToastAndroid,FlatList} from 'react-native'
import {  Card, CardItem, Body } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Geocoder from 'react-native-geocoding';
import MapView from 'react-native-maps';
import { Marker,AnimatedRegion } from 'react-native-maps';
import Pusher from 'pusher-js/react-native';
import {InputButtonRed} from "../../../components/ui/Inputs";

console.disableYellowBox = true;


class RiderHome extends Component {
    constructor(props) {
        super(props);
        this.state={
        StarRating:2,
        errorMessage: '',
        locai:'',
        lat:22.3617013,
        lon:91.8361786,
        activeIndex:0,
        modalVisible:false,
        start:'',
        end:'',
        cost:'',
        name:'',
        phone:'',
        email:'',
        ride:0,
        nid:'',
        dp:'',
        type:'',
        rides:[],
        poles:[],
        coordinate: new AnimatedRegion({
            latitude: 22.3617013,
            longitude: 91.8361786,
          }),
    };

    this.pusher = new Pusher('0d8c1e92affbbd814235', {
        cluster: 'ap1'
      });
    this.channel = this.pusher.subscribe('rider.calling');
    this.channel.bind('rider.calling', data => {
        let host = this.props.host;
        fetch(host+'rider/find/user',{
            method: 'POST',
                    headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
                    body:JSON.stringify({
                        id:data.user,
                    })
                }).then((response)=>response.json()).then((responseJson)=>{
                    let name = responseJson.first_name+" "+responseJson.last_name;
                    this.setState({start:data.start,end:data.end,cost:data.rent,name:name,email:responseJson.email,phone:responseJson.phone_number,nid:responseJson.nid,dp:responseJson.profile_picture,ride:data.ride,type:data.type})
                }).then(()=>{
                    this.setState({modalVisible:true});
                })
        
      });
}



acceptRequest = async() =>{
        this.setState({modalVisible:false});
        this.props.changeType(this.state.type);
        this.props.changeRideId(this.state.ride);
        let host = this.props.host;
        // prepare final API call
        let ApiURL = "https://maps.googleapis.com/maps/api/distancematrix/json?";
        let params = `origins=${this.state.locai}&destinations=${this.state.start}&key=AIzaSyAwyZimvA9z_SzFmL55fpJSoeYrloU6RF4`;  
        let finalApiURL = `${ApiURL}${encodeURI(params)}`;
        try {
            let response =  await fetch(finalApiURL);
            let responseJson = await response.json();
            let time = responseJson.rows[0].elements[0].duration.text;
            const value = await AsyncStorage.getItem('email')
            fetch(host+'user/rider/accepted/check',{
                method:'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email:value,
                    ride:this.state.ride,
                    type:this.state.type,
                    duration:time   
                })
            }).then((response)=>response.json()).then((responseJson)=>{
                if (responseJson.hasOwnProperty('errorV')){
                    ToastAndroid.show("Already accepted by another rider", ToastAndroid.SHORT);
                }else{
                    this.props.navigation.navigate('RiderMap');
                }
            });         
        } catch(error) {
            console.error(error);
        } 
        
    }


    componentDidMount=async()=> {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            this._getLocationAsync();
        }


        let host = this.props.host;
        const value = await AsyncStorage.getItem('email');
        fetch(host+'rider/all/ride',{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email:value,
            })
        }).then((response)=>response.json()).then((responseJson)=>{
            this.setState({rides:responseJson})
        })

        fetch(host+'rider/all/pole',{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email:value,
            })
        }).then((response)=>response.json()).then((responseJson)=>{
            this.setState({poles:responseJson})
        })

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
    onRegionChange =async() =>{
       //
}

    render() {
        let local = "....";
        let lati = 22.3617013;
        let long = 91.8361786;
        if(this.state.locai !== ''){
            local = this.state.locai;
        }
        if(this.state.lat !== 0){
            lati = this.state.lat;
            long = this.state.lon;
        }
        return (
            <ScrollView style={styles.container}>
                <Card>
                    <CardItem>
                        <Body>
                            <Text style={{color:'#838383'}}>
                                {local}
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body>
                        <MapView 
                        region={{
                            latitude:this.state.lat,
                            longitude:this.state.lon,
                            latitudeDelta:0.09,
                            longitudeDelta:0.035
                        }}
                        minZoomLevel={15}
                        onRegionChangeComplete={()=>{this.onRegionChange()}}
                        showsUserLocation={true}

                style={{width:'100%',height:400}}>
                    <Marker
    coordinate={{ "latitude": this.state.lat,   
    "longitude": this.state.lon }}
    title={"Current location"}>
        <View style={{padding: 2}}>
        <Image
        style={{width:50,height:50}}
        source={require('../../../../assets/img/biker.png')}
      />
 </View>

    </Marker>
                </MapView>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body>
                            <Text style={{color:'#838383',fontSize:20,alignSelf:'center'}}>
                                History:
                            </Text>
                            
                            <FlatList
        data={this.state.rides}
        renderItem={({item})=><View style={{padding:10,height:100,margin:10,width:300,borderWidth: 4,borderColor:'red'}}>
            <View style={{marginBottom:30}}>
            <Text style={{fontSize:20,color:'green'}}>Time:{item.created_at}</Text>
                <Text style={{fontSize:20,color:'green'}}>Gained:{item.rent}</Text>
            </View>
        </View>}
        keyExtractor={item => new Date()+Math.random()}
      />
       <FlatList
        data={this.state.poles}
        renderItem={({item})=><View style={{padding:10,height:100,margin:10,width:300,borderWidth: 4,borderColor:'red'}}>
            <View style={{marginBottom:30}}>
            <Text style={{fontSize:20,color:'green'}}>Time:{item.created_at}</Text>
                <Text style={{fontSize:20,color:'green'}}>Gained:{item.rent}</Text>
            </View>
        </View>}
        keyExtractor={item => new Date()+Math.random()}
      />
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body>
                            <Text style={{color:'#838383',fontSize:18,alignSelf:'center'}}>
                                OFFERS
                            </Text>
                            <Image source={require('../../../../assets/img/offerforrider.png')} style={{height:280,width:320,marginTop:20}} />
                        </Body>
                    </CardItem>
                </Card>
                <Modal
                                animationType="slide"
                                transparent={true}
                                visible={this.state.modalVisible}
                            >
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                    <Text style={{fontSize:16,color:'#adadad',marginBottom:30}}>New ride request</Text>
                                        <View style={{flexDirection:'row',marginBottom:30}}>
                                            {this.state.dp === ''? <Image source={require('../../../../assets/img/user.png')} style={{height:50,width:50,borderRadius:50/2,marginRight:50}} /> : <Image source={{uri:this.props.host+'images/'+this.state.dp}} style={{height:50,width:50,borderRadius:50/2,marginRight:50}} />}
                                          
                                         <View>
                                         <Text style={{fontSize:15,color:'pink',width:150}}>{this.state.email}</Text>
                                          <Text style={{fontSize:10,color:'indigo'}}>{this.state.name}</Text>
                                          <Text style={{fontSize:10,color:'orange'}}>NID: {this.state.nid}</Text>
                                          <Text style={{fontSize:16,color:'#ad7424'}}>Rent: {this.state.cost} Taka</Text>
                                         </View>                                     
                                        </View>
                                        <View style={{flexDirection:'row',alignItems:'flex-start',borderTopWidth:1,borderTopColor:'gray',width:200}}>
                                          <Text style={{marginRight:140,fontSize:20,color:'gray'}}>Call</Text>
                                          <View><Icon name={'phone'} size={30} style={{color:'green'}} 
                                          onPress={()=>{Linking.openURL(`tel:${this.state.phone}`)}}
                                          /></View>
                                        </View>
                                        <View>
                                             <Text style={{fontSize:16,color:'blue',marginBottom:20}}>FROM: {this.state.start}.</Text>
                                             <Text style={{fontSize:16,color:'green',marginBottom:20}}>To: {this.state.end}.</Text>
                                        </View>
                                       
                                        <View style={{flexDirection:'row'}}>
                                        <TouchableOpacity style={{marginRight:20}}  onPress={() => {
                                               this.acceptRequest()
                                            }} >
                                        <LinearGradient
        colors={['#67c20c', '#50851b','#396909']}
        style={{width:100,borderRadius:15,padding: 10,borderRadius: 15, paddingLeft:20,paddingRight:20,shadowColor: "#000",shadowOffset: {width: 0,height:3,},shadowOpacity: 0.27,shadowRadius: 4.65,elevation: 6,alignItems:'center'}}>
    <Text style={{backgroundColor: 'transparent',fontSize: 13,color: '#fff',alignSelf:'center'}}>Accept</Text></LinearGradient>
                                        </TouchableOpacity> 
                                        <TouchableOpacity  onPress={() => {
                                                this.setState({modalVisible:false})
                                            }} >
                                        <LinearGradient
        colors={['#096ce6', '#1357ab','#174680']}
        style={{width:100,borderRadius:15,padding: 10,borderRadius: 15, paddingLeft:20,paddingRight:20,shadowColor: "#000",shadowOffset: {width: 0,height:3,},shadowOpacity: 0.27,shadowRadius: 4.65,elevation: 6,alignItems:'center'}}>
    <Text style={{backgroundColor: 'transparent',fontSize: 13,color: '#fff',alignSelf:'center'}}>Reject</Text></LinearGradient>
                                        </TouchableOpacity> 
                                        </View>
                                              
                                    </View>
                                </View>
                            </Modal>
            </ScrollView>

        )
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
        rider:state.auth.rider
    }
};
const mapDispatchToProps = dispatch => {
    return{
        changeType:(value)=>{dispatch({type:'CHANGE_Type',point:value})},
        changeRideId:(value)=>{dispatch({type:'CHANGE_RIDEID',point:value})}
    };

};
export default connect(mapStateToProps, mapDispatchToProps)(RiderHome)