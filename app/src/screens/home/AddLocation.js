import React, { Component } from 'react'
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text,StyleSheet,ScrollView,SafeAreaView,ToastAndroid } from 'react-native'
import {  Card, CardItem, Body,Fab,Button } from 'native-base';
import { connect } from 'react-redux'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {Inputs,Passwords,InputButtonBlue,InputButtonRed} from "../../components/ui/Inputs";

export class AddLocation extends Component {
    state={
        lat:0,
        lon:0,
        email:'',
        formattedAddress:'',
        name:''
    }

    setLocation = (data) =>{
        this.setState({formattedAddress:data.description});
        this.getCoordinate(data.place_id);
    }

    async componentDidMount(){
        const value = await AsyncStorage.getItem('email')
    if(value !== null) {
      this.setState({email:value})
    }
    }

    getCoordinate = (pl) => {
        fetch('https://maps.googleapis.com/maps/api/geocode/json?place_id='+pl+'&key=AIzaSyAwyZimvA9z_SzFmL55fpJSoeYrloU6RF4',{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((response) => response.json())
        .then((responseJson)=>{
            this.setState({lat:responseJson.results[0].geometry.location.lat,lon:responseJson.results[0].geometry.location.lng});
        })
    }

    saveLocation =() =>{
        if(this.state.name === "" || this.state.formattedAddress ===""){
            ToastAndroid.show("Add name or location first", ToastAndroid.SHORT);
        }else{
            this.getData();
        }
    }

    getData = async () => {
        const host = this.props.host;
        return fetch(host+'user/add/location',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name:this.state.name,
                lat:this.state.lat,
                lng:this.state.lon,
                email:this.state.email,
                formattedAddress:this.state.formattedAddress
            })
        }).then((response) => response.json())
            .then((responseJson) => {
               this.props.navigation.navigate("Home");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <Card>
                    <CardItem>
                        <Body>
                            <Text style={{color:'#b9b9b9'}}>
                               Enter location info
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body>
                        <Inputs
                        onChangeTexts={(value)=>{this.setState({name:value})}}
                        ph={'Location name'}
                        val={this.state.name}
                        />
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                    <GooglePlacesAutocomplete
                            onPress={(data, details = null) => {
                            this.setLocation(data);
                            }}
                        query={{
                            key: 'AIzaSyAwyZimvA9z_SzFmL55fpJSoeYrloU6RF4',
                            language: 'en',
                            location: '22.3258742,91.6797787',                     radius: '30000', 
                            components: 'country:bd',
                            strictbounds: true,
                        }}
                        placeholder='Find location'
                        minLength={2}
                        autoFocus={false}
                        returnKeyType={'default'}
                        styles={{
                        textInputContainer: {
                        width:250,
                        marginLeft:10
                        },
                        textInput: {
                        color: '#5d5d5d',
                        fontSize: 16,
                        },
                        predefinedPlacesDescription: {
                         color: '#1faadb',
                        },
                        }}
                        />
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body>
                        <InputButtonRed 
                        onPress={()=>{this.saveLocation()}}
                        value={'Save location'} />
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
export default connect(mapStateToProps, mapDispatchToProps)(AddLocation)