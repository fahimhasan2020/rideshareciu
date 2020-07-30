import React, { Component } from 'react'
import { View, Text,StyleSheet,Image} from 'react-native'
import { connect } from 'react-redux'
import {  Card, CardItem, Body,Fab,Button } from 'native-base';

export class Searching extends Component {
    state={

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
                                Will coast: {Math.ceil(Math.random() * (70 - 55) + 55)}
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
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Searching)