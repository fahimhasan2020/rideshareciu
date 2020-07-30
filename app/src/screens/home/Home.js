import React, { Component } from 'react'
import {Text, StyleSheet, ScrollView,View,TouchableOpacity,Image,Modal,TouchableHighlight,Alert,ToastAndroid} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import {  Card, CardItem, Body,Fab,Button } from 'native-base';
import {Divider, Input} from "react-native-elements";
import { connect } from 'react-redux'
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Geocoder from 'react-native-geocoding';

class Home extends Component {
    state = {
        errorMessage: '',
        locai:'',
        activeIndex:0,
        active:false,
        modalVisible:false,
        invitationCode:'',
    };
    componentDidMount() {

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
                this.setState({locai:addressComponent})
            })
            .catch(error => console.warn(error));
    };
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
                <View style={styles.cardSection}>
                    <TouchableOpacity style={styles.options}
                    onPress={()=>{this.props.navigation.navigate('Ride')}}
                    >
                        <Image source={require('../../../assets/img/biker.png')} style={{height:50,width:50}} />
                        <Text style={{color:'#b9b9b9',marginTop:5}}>SINGLE RIDE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>{this.props.navigation.navigate('Pole')}}
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
                                        <View style={{backgroundColor:'#eee',margin:5,padding:10,width:'100%',height:150,alignItems:'center',justifyContent:'center'}}>
                                            <Text style={{color:'#560027'}}>Sorry! no deals available ..</Text>
                                        </View>

                                        <TouchableHighlight
                                            style={{position:'absolute',top:10,right:10}}
                                            onPress={() => {
                                                this.setState({modalVisible:false})
                                            }}
                                        >
                                            <FontAwesome name={'times'}  />
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
                            <Text style={{color:'#880e4f'}}>
                                INVITE FRIENDS AND GET COUPONS
                            </Text>
                            <View style={{flexDirection:'row',width:'100%'}}>

                                <Input
                                    containerStyle={{width:200}}
                                    value={this.state.invitationCode}
                                    inputContainerStyle={styles.input}
                                    onChangeText={(value)=>this.setState({invitationCode:value})}
                                    placeholder={'Enter invitation code'}
                                />
                                <TouchableOpacity onPress={()=>{
                                    if (this.state.invitationCode===''){
                                        ToastAndroid.show("Empty invitations", ToastAndroid.SHORT);
                                    }else{
                                        ToastAndroid.show("Error invitation code", ToastAndroid.SHORT);
                                    }
                                }} style={{padding:10,color:'#eee',margin:3,backgroundColor:'#bc477b'}}>
                                    <FontAwesome color="white" size={25} name={'send'}  />
                                </TouchableOpacity>
                            </View>
                            <View style={{marginTop:30}}>
                                <Text style={{fontSize:20,color:'#880e4f'}}>Your invitation code is:</Text>
                                <Text style={{fontSize:30,fontWeight:'bold',color:'#6746c3'}}>{Math.floor(Math.random() * (99999 - 55669) + 55669)}</Text>
                            </View>
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
const mapStateToProps = (state) => ({

});
const mapDispatchToProps = {

};
export default connect(mapStateToProps, mapDispatchToProps)(Home)