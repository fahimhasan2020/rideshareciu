import React, { Component } from 'react'
import { View, Text,StyleSheet,Image} from 'react-native'
import { connect } from 'react-redux'
import {  Card, CardItem, Body,Fab,Button } from 'native-base';

export class Searching extends Component {
    state={
        distance:0,
        startLat:0,
        endLat:0,
        startLng:0,
        endLng:0,
        cost:0
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
    // get duration/distance from base to each target
    try {
            let response =  await fetch(finalApiURL);
            let responseJson = await response.json();
            console.log("response:\n");
            console.log(responseJson);
            this.setState({distance:responseJson.rows[0].elements[0].distance.value/1000,cost:Math.ceil(responseJson.rows[0].elements[0].distance.value*10/1000)})
        } catch(error) {
            console.error(error);
        } 
    }

    componentDidMount = async() =>{
        this.getCoordinateStart(this.props.startPlaceId);
        this.getCoordinateEnd(this.props.endPlaceId);
        this.getDistance(this.state.startLat,this.state.startLng,this.state.endLat,this.state.endLng);
    }


    render() {
        return (
            <View style={styles.container}>
                <Card>
                    <CardItem>
                        <Body>
                            <Text style={{color:'#b9b9b9'}}>
                                Searching for rider .....
                            </Text>
                            <Text style={{color:'#b9b9b9'}}>
                                From: {this.props.startPoint}
                            </Text>
                            <Text style={{color:'#b9b9b9'}}>
                                To:{this.props.endPoint}
                            </Text>
                            <Text style={{color:'#b9b9b9'}}>
                                Will cost: {this.state.cost} Taka
                            </Text>
                            <Text style={{color:'#b9b9b9'}}>
                                Will cost: {this.state.distance} KM
                            </Text>
                            <Text style={{color:'#b9b9b9'}}>
                                Vehicle: {this.props.vehicleType}
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body>
                        <Image source={require('../../../assets/img/taxi.png')} style={{height:300,width:'100%'}} />
                        </Body>
                    </CardItem>
                </Card>
                
            </View>
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
    vehicleType:state.auth.vehicleType})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Searching)
