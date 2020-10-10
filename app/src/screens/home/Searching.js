import React, { Component } from 'react'
import { View, Text,StyleSheet,Image,ScrollView,ToastAndroid} from 'react-native'
import { connect } from 'react-redux'
import {  Card, CardItem, Body,Fab,Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Inputs,InputButtonBlue} from "../../components/ui/Inputs"
import AsyncStorage from '@react-native-community/async-storage';

export class Searching extends Component {
    state={
        distance:0,
        startLat:0,
        endLat:0,
        startLng:0,
        endLng:0,
        cost:0,
        discount:false,
        coupon:'',
        gotDiscound:0,
        email:'',
        startRide:false,
    }


    getCoordinateStart = async(pl) => {
       await fetch('https://maps.googleapis.com/maps/api/geocode/json?place_id='+pl+'&key=AIzaSyAwyZimvA9z_SzFmL55fpJSoeYrloU6RF4',{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((response) => response.json())
        .then((responseJson)=>{
            this.setState({startLat:responseJson.results[0].geometry.location.lat,startLng:responseJson.results[0].geometry.location.lng});
        })
    }


    getCoordinateEnd = async(pl) => {
       await fetch('https://maps.googleapis.com/maps/api/geocode/json?place_id='+pl+'&key=AIzaSyAwyZimvA9z_SzFmL55fpJSoeYrloU6RF4',{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((response) => response.json())
        .then((responseJson)=>{
            this.setState({endLat:responseJson.results[0].geometry.location.lat,endLng:responseJson.results[0].geometry.location.lng});
        })
    }


    getDistance = async() =>{
    // prepare final API call
    let ApiURL = "https://maps.googleapis.com/maps/api/distancematrix/json?";
    let params = `origins=${this.props.startPoint}&destinations=${this.props.endPoint}&key=AIzaSyAwyZimvA9z_SzFmL55fpJSoeYrloU6RF4`;  
    let finalApiURL = `${ApiURL}${encodeURI(params)}`;
    try {
            let response =  await fetch(finalApiURL);
            let responseJson = await response.json();
            console.log("response:\n");
            console.log(responseJson);
            let rents = 0;
            this.setState({distance:responseJson.rows[0].elements[0].distance.value/1000,})
            let hr = (new Date()).getHours();
            let bs;
            if(hr > 22 && hr < 24){
                bs = 2;
            } else if(hr > 13 && hr < 15){
                bs = 2;
            }else{
                bs = 1;
            }
            if(this.props.requestType=== 'ride'){
                if(this.props.vehicleType === 'bike'){
                    rents = Math.ceil(responseJson.rows[0].elements[0].distance.value*10*bs/1000);
                    if(rents<10){
                         this.setState({cost:10})
                    }else{
                        this.setState({cost:rents})
                    }
                         
                }else if(this.props.vehicleType === 'car'){
                    rents = Math.ceil(responseJson.rows[0].elements[0].distance.value*20*bs/1000);
                    if(rents<15){
                         this.setState({cost:15})
                    }else{
                        this.setState({cost:rents})
                    }
                }else if(this.props.vehicleType === 'micro mini'){
                    rents = Math.ceil(responseJson.rows[0].elements[0].distance.value*16*bs/1000);
                    if(rents<15){
                        this.setState({cost:10})
                   }else{
                       this.setState({cost:rents})
                   }
                }else if(this.props.vehicleType === 'micro big'){
                    rents = Math.ceil(responseJson.rows[0].elements[0].distance.value*16*bs/1000);
                    if(rents<15){
                        this.setState({cost:10})
                   }else{
                       this.setState({cost:rents})
                   }
                }
            }else if(this.props.requestType === 'pole'){
                if(this.props.vehicleType === 'car'){
                    rents = Math.ceil(responseJson.rows[0].elements[0].distance.value*18*bs/1000);
                    if(rents<15){
                         this.setState({cost:15})
                    }else{
                        this.setState({cost:rents})
                    }
                }else if(this.props.vehicleType === 'micro mini'){
                    rents = Math.ceil(responseJson.rows[0].elements[0].distance.value*13*bs/1000);
                    if(rents<15){
                        this.setState({cost:10})
                   }else{
                       this.setState({cost:rents})
                   }
                }else if(this.props.vehicleType === 'micro big'){
                    rents = Math.ceil(responseJson.rows[0].elements[0].distance.value*13*bs/1000);
                    if(rents<15){
                        this.setState({cost:10})
                   }else{
                       this.setState({cost:rents})
                   }
                }   
            }                
        } catch(error) {
            console.error(error);
        } 
    }

    componentDidMount = async() =>{
        this.getDistance();
    }

    checkDiscount =async()=>{
        this.setState({discount:true});
        if(this.state.coupon === ''){
            this.setState({discount:false});
            ToastAndroid.show("Add coupon code first", ToastAndroid.SHORT);
        }else{
            if(this.state.gotDiscound !==0){
                this.setState({discount:false});
                return ToastAndroid.show("You cannot use multiple coupon code", ToastAndroid.SHORT);
            }
            const value = await AsyncStorage.getItem('email');
            if(value !== null) {
                this.setState({discount:false});
                this.setState({email:value})
                const host = this.props.host;
                if(this.state.coupon === 'bijoy71'){
                    let discount = this.state.cost*20/100;
                    let val = this.state.cost - discount;
                    console.log(this.state.cost);
                    this.setState({gotDiscound:discount,cost:val});
                    return ToastAndroid.show("Got 20% discount", ToastAndroid.SHORT);
                }else{
                    return  fetch(host+'user/check/coupon',{
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email:value,
                        code:this.state.coupon,
                        amount:this.state.cost
                    })
                }).then((response) => response.json())
                .then((responseJson)=>{
                    this.setState({discount:false});
                   console.log(responseJson);
                   if (responseJson.hasOwnProperty('error')){
                    ToastAndroid.show(responseJson.error.toString(), ToastAndroid.SHORT);
                   }else{
                    ToastAndroid.show("Hurrah ! you have got discount", ToastAndroid.SHORT);
                    this.setState({cost:responseJson.amount,gotDiscound:responseJson.discounted});
                   }
                })
                }
                
            } 
        }
    }

    confirmRide = async() =>{
        let host = this.props.host;
        this.setState({startRide:true});
        const value = await AsyncStorage.getItem('email');
            if(value !== null) {
                return fetch(host+'user/post/ride',{
                    method: 'POST',
                    headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
                    body:JSON.stringify({
                        email:value,
                        rent:this.state.cost,
                        starting_cordinate:this.props.startPoint,
                        ending_cordinate:this.props.endPoint,
                        type:this.props.requestType
                    })
                }).then((response)=> {response.json()})
                .then((responseJson)=>{
                    this.setState({startRide:false});
                    this.props.navigation.navigate('FindPanel');
                });
            }

        
    }


    render() {
        return (
            <ScrollView style={styles.container}>
                <Card>
                    <CardItem>
                        <Body style={{alignItems:'center'}}>
                        <Text style={{color:'#88248f',fontSize:25,alignSelf:'center',marginBottom:20}}>
                               RIDE DETAILS
                            </Text>
                            
                            <Text style={{color:'#88248f',alignSelf:'center',fontSize:19,}}>
                                Start Location
                            </Text>
                            <Text style={{color:'#adadad',alignSelf:'center',fontSize:14,marginBottom:20}}>
                            {this.props.startPoint}
                            </Text>
                            <Text style={{color:'#88248f',alignSelf:'center',fontSize:19,}}>
                                End Location
                            </Text>
                            <Text style={{color:'#adadad',alignSelf:'center',fontSize:14,marginBottom:20}}>
                            {this.props.endPoint}
                            </Text>
                            
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem style={{backgroundColor:'#211294',paddingTop:20}}>
                        <Body>
                            <View style={{flexDirection:'row',marginBottom:15}}>
                            <Icon  name={'dollar'} size={20} color="#cf3897"/>
                                <Text style={{color:'#b9b9b9',marginLeft:65}}>
                                {this.state.cost} Taka
                            </Text>
                            </View>
                            <View style={{flexDirection:'row',marginBottom:15}}>
                            <Icon  name={'map-marker'} size={20} color="#185e18"/>
                                <Text style={{color:'#b9b9b9',marginLeft:68}}>
                                {this.state.distance} Kilometer
                            </Text>
                            </View>
                            <View style={{flexDirection:'row',marginBottom:15}}>
                            <Icon  name={'cab'} size={17} color="orange"/>
                                <Text style={{color:'#b9b9b9',marginLeft:60,textTransform:'uppercase'}}>
                                {this.props.vehicleType}
                            </Text>
                            </View>
                            <Text style={{color:'#b9b9b9'}}>
                                Discount:      {this.state.gotDiscound} Taka
                            </Text>
                            </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body style={{alignItems:'center'}}>
                            <View>
                            <Inputs ph={'Enter coupon code'} val={this.state.coupon} onChangeTexts={(value)=>{this.setState({coupon:value})}} />
                            <InputButtonBlue value={'GET DISCOUNT'} loading={this.state.discount} onPress={()=>{this.checkDiscount()}} />
                            </View>
                            </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body style={{alignItems:'center'}}>
                            <View>
                            <InputButtonBlue value={'CONFIRM'} loading={this.state.startRide} onPress={()=>{this.confirmRide()}} />
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
    }
})

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

export default connect(mapStateToProps, mapDispatchToProps)(Searching)
