import React, { Component } from 'react'
import {Text,StyleSheet, Share,ScrollView,View,TouchableOpacity,Image,Modal,TouchableHighlight,FlatList,Alert,ToastAndroid} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Notifications } from 'expo';
import {  Card, CardItem, Body,Fab,Button } from 'native-base';
import {Divider, Input} from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux'
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import {Inputs,Passwords,InputButtonBlue,InputButtonRed} from "../../components/ui/Inputs";
import Geocoder from 'react-native-geocoding';

class Home extends Component {
    state = {
        errorMessage: '',
        locai:'',
        expoPushToken: '',
        notification: {},
        activeIndex:0,
        active:false,
        modalVisible:false,
        invitationCode:'',
        locations:[],
        coupons:[],
        msg:'Share your app'
    }    

    sendNotification = async () => {
        const message = {
          to: this.state.expoPushToken,
          sound: 'default',
          title: 'Original Title',
          body: 'And here is the body!',
          data: { data: 'goes here' },
        };
    
        await fetch('https://exp.host/--/api/v2/push/send', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Accept-encoding': 'gzip, deflate',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(message),
        });
      };

    componentDidMount=async()=> {
       
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
          }
      })
      .catch((error) => {
          console.log(error);
      })
      fetch(this.props.host+'user/coupon/list',{
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
          this.setState({coupons:responseJson})
        }
    })
    .catch((error) => {
        console.log(error);
    })
    
    
    }
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            this._getLocationAsync();
        }
        this._getNotificationAsync();

    }

    shareUs = async() => {

        try {
            const value = await AsyncStorage.getItem('email')
            let host = this.props.host;
            fetch(host+'user/get/info',{
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
                const result =  Share.share({
                    message:this.props.host+'app/share/'+responseJson.id
                  }); 
                  if (result.action === Share.sharedAction) {
                    if (result.activityType) {
                      // shared with activity type of result.activityType
                    } else {
                      // shared
                    }
                  } else if (result.action === Share.dismissedAction) {
                    // dismissed
                  }
            })
           
          } catch (error) {
            alert(error.message);
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
                this.setState({locai:addressComponent})
            })
            .catch(error => console.warn(error));
    };

    _getNotificationAsync = async() =>{
        let token;
        let host = this.props.host;
        if (Constants.isDevice) {
            const value = await AsyncStorage.getItem('email')
            const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
            let finalStatus = existingStatus;
            if (existingStatus !== 'granted') {
              const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
              finalStatus = status;
            }
            if (finalStatus !== 'granted') {
              alert('Failed to get push token for push notification!');
              return;
            }
            token = await Notifications.getExpoPushTokenAsync();
            fetch(host+'user/update/device/token',{
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email:value,
                    token:token
                }),
              }).then((response)=>response.json()).then((responseJson)=>{
                  console.log(responseJson);
              });
            this.setState({ expoPushToken: token });
          } else {
            alert('Must use physical device for Push Notifications');
          }
          if (Platform.OS === 'android') {
            Notifications.createChannelAndroidAsync('default', {
              name: 'default',
              sound: true,
              priority: 'max',
              vibrate: [0, 250, 250, 250],
            });
          }
    }

    getRide = () =>{
        let hr = (new Date()).getHours();
        console.log(hr);
        if(hr > 1 && hr <  6){ToastAndroid.show("No service after 12AM to 6Am", ToastAndroid.SHORT);}else{this.props.navigation.navigate('Ride')}
    }


    getPole = () => {
        let hr = (new Date()).getHours();
        if(hr >1 && hr < 6){
            ToastAndroid.show("No service after 12AM to 6Am", ToastAndroid.SHORT);
        }else{
            this.props.navigation.navigate('Pole');
        }
    }

    render() {
        let local = "....";
        if(this.state.locai !== ''){
            local = this.state.locai;
        }
        return (
            <ScrollView style={styles.container}>
                <Card>
                    <CardItem>
                        <Body>
                            <Text style={{color:'#838383'}}>
                                {local}
                            </Text>
                            <Text style={{color:'#b9b9b9'}}>
                                Set your current location.
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
            
                <Card>
                <TouchableOpacity
                    onPress={()=>{this.props.navigation.navigate("AddLocation")}}>
                    <CardItem>
                        <Body>
                            <Text style={{color:'#838383'}}>
                                Setup prefered locations
                            </Text>
                        </Body>
                     </CardItem>
                    </TouchableOpacity>
                </Card>
                <View style={styles.cardSection}>
                    <TouchableOpacity style={styles.options}
                    onPress={()=>{
                        this.getRide();
                        }
                        }
                        
                    >
                        <Image source={require('../../../assets/img/biker.png')} style={{height:50,width:50}} />
                        <Text style={{color:'#b9b9b9',marginTop:5}}>SINGLE RIDE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>{
                       this.getPole();
                    }}
                    style={styles.options}>
                        <Image source={require('../../../assets/img/taxi.png')} style={{height:50,width:50}} />
                        <Text style={{color:'#b9b9b9',marginTop:5}}>POLE</Text>
                    </TouchableOpacity>
                </View>
                <Card>
                    <CardItem>
                        <Body>
                           <Image source={require('../../../assets/img/offers.jpg')} style={{height:150,width:'100%'}} />
                            <Divider style={{ backgroundColor: 'blue' }} />
                            <TouchableOpacity
                                onPress={()=>this.setState({modalVisible:true})}
                                style={{justifyContent:'center',alignSelf:'center'}}>
                                <Text style={{fontWeight:'bold',fontSize:20,color:'#560027'}}>CHECK OUR TODAY OFFERS</Text>
                            </TouchableOpacity>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={this.state.modalVisible}
                            >
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                        <Text style={styles.modalText}>Check our daily hot deals . Ride with us to get the best travel experience.</Text>
                                        <Image source={require('../../../assets/img/promo.png')} style={{height:180,width:250}} />

                                        <TouchableHighlight
                                            style={{position:'absolute',top:10,right:10}}
                                            onPress={() => {
                                                this.setState({modalVisible:false})
                                            }}
                                        >
                                            <FontAwesome name={'times'} size={20}  />
                                        </TouchableHighlight>
                                    </View>
                                </View>
                            </Modal>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body>
                            <Text style={{color:'#880e4f',alignSelf:'center',textAlign: 'center',fontSize:20}}>
                                INVITE FRIENDS AND GET COUPONS
                            </Text>
                            <Text style={{alignSelf:'center',textAlign: 'center',fontSize:12}}>
                                Get 10% discount on ride over 3 successful invitation sending.
                            </Text>
                            <View style={{marginTop:10}}>
                            <TouchableOpacity style={{marginTop:10}} onPress={()=>{this.shareUs()}}>
    <LinearGradient
        colors={['#3273a8', '#2b5170','#314454']}
        style={{ padding: 10, alignItems: 'center', borderRadius: 15,width:300,paddingLeft:20,paddingRight:20,shadowColor: "#000",shadowOffset: {width: 0,height:3,},shadowOpacity: 0.27,shadowRadius: 4.65,elevation: 6, }}>
    <Text style={{backgroundColor: 'transparent',fontSize: 13,color: '#fff',marginLeft:10}}>SHARE APPS</Text>
    </LinearGradient>
    </TouchableOpacity>
                            </View>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body>
                            <Text style={{color:'#ab0558',alignSelf:'center',fontSize:20}}>COUPONS</Text>

                            <FlatList
        data={this.state.coupons}
        renderItem={({item})=><View style={{padding:10,height:150,margin:10,width:300,borderWidth: 4,borderColor:'red'}}>
            <View style={{marginBottom:30,flexDirection:'row',flex:2}}>
            <Icon name="pie-chart" size={60} color="#900" />
            <View style={{marginLeft:20,alignItems:'center'}}>
                <Text style={{fontSize:20,color:'green'}}>Enjoy</Text>
                {item.type === 'fixed' ? <Text style={{fontSize:25,fontWeight:'bold',color:'red'}}>{item.amount} taka discount</Text> : <Text style={{fontSize:25,fontWeight:'bold',color:'red'}}>{item.amount} % discount</Text> }
            </View>
            </View>
            <View style={{flexDirection:'row'}}> 
            <Text style={{fontSize:25,fontWeight:'bold',color:'orange'}}>CODE</Text><Text style={{fontSize:25,fontWeight:'bold',color:'#9b57cf'}}>{item.code}</Text>
        </View>
        </View>}
        keyExtractor={item => new Date()+Math.random()}
      />
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
        marginTop: 22,
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
    input:{
        height: 40,
    }
});
const mapStateToProps = state => {
    return {
      host: state.auth.host
    }
};
const mapDispatchToProps = {

};
export default connect(mapStateToProps, mapDispatchToProps)(Home)