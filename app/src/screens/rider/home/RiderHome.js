import React, { Component } from 'react'
import {Text, StyleSheet, ScrollView} from 'react-native'
import {  Card, CardItem, Body } from 'native-base';
import { connect } from 'react-redux'
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Geocoder from 'react-native-geocoding';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import {InputButtonRed} from "../../../components/ui/Inputs";

class RiderHome extends Component {
    state = {
        errorMessage: '',
        locai:'',
        lat:0,
        lon:0,
        activeIndex:0,
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
                this.setState({locai:addressComponent});
                this.setState({lat:location.coords.latitude});
                this.setState({lon:location.coords.longitude})
            })
            .catch(error => console.warn(error));
    };
    render() {
        let local = "....";
        let lati = 0;
        let long = 0;
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
                        initialRegion={{
                            latitude:lati,
                            longitude:long,
                            latitudeDelta:lati,
                            longitudeDelta:long
                        }}
        
                        region={{
                            latitude:lati,
                            longitude:long,
                            latitudeDelta:lati,
                            longitudeDelta:long
                        }}
                mapType="mutedStandard"
                minZoomLevel={3}
                showsUserLocation={true}
                style={{width:'100%',height:400}} />
            
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body>
                            <Text style={{color:'#838383'}}>
                                History:
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body>
                            <Text style={{color:'#838383'}}>
                                Offers:
                            </Text>
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
});
const mapStateToProps = (state) => ({

});
const mapDispatchToProps = {

};
export default connect(mapStateToProps, mapDispatchToProps)(RiderHome)