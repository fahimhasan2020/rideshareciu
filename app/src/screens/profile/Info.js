import React, { Component } from 'react'
import { View, Text,StyleSheet,ScrollView } from 'react-native'
import { connect } from 'react-redux'
import {  Card, CardItem, Body,Fab,Button } from 'native-base';

export class Info extends Component {
    state={

    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Card>
                    <CardItem>
                        <Body>
                            <Text style={{color:'#838383'}}>
                                INFO
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body>
                            <Text style={{color:'#838383'}}>
                                Ride share app is a multi user ride sharing system. It contains both single ride and pole system. Most of the ride sharing system contains single rider system. But we provides pole system just like public transportations.
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body>
                            <Text style={{color:'#838383'}}>
                                BENEFITS
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body>
                            <Text style={{color:'#838383'}}>
                                The main benefits of our apps is, we provides both user and rider review system, and also in pole system our users can share the total ride costing with the other pole user memebers.
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body>
                            <Text style={{color:'#838383'}}>
                                Developer info
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body>
                            <Text style={{color:'#838383'}}>
                                This system has been made by Sarah Samira & Samreena Alam
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
})

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Info)