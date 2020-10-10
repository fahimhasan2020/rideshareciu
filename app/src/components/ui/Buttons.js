import React, { Component } from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'expo-linear-gradient';
import {Input,Button} from 'react-native-elements';


/*Solid buttons*/
export const InputButtonRed =  ({onPress,value,icon='floppy-o',loading=false})=>{
    return (
        <TouchableOpacity
        onPress={onPress}>
   <LinearGradient
    colors={['#800039', '#560027']}
    style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>
    <Text
        style={{
        backgroundColor: 'transparent',
        fontSize: 15,
        color: '#fff',
        }}>
    {value}
    </Text>
    </LinearGradient>
    </TouchableOpacity>
       
    )
}

export const InputButtonGreen =  ({onPress,value,icon='floppy-o'},loading=false)=>{
    return (
        <TouchableOpacity
        onPress={onPress}>
   <LinearGradient
    colors={['#19c606', '#16b306']}
    style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>
    <Text
        style={{
        backgroundColor: 'transparent',
        fontSize: 15,
        color: '#fff',
        }}>
    {value}
    </Text>
    </LinearGradient>
    </TouchableOpacity>


    )
}
export const InputButtonBlue =  ({onPress,value,icon='floppy-o',loading=false})=>{
    return (
        <TouchableOpacity
        onPress={onPress}>
   <LinearGradient
    colors={['#000080', '000063']}
    style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>
    <Text
        style={{
        backgroundColor: 'transparent',
        fontSize: 15,
        color: '#fff',
        }}>
    {value}
    </Text>
    </LinearGradient>
    </TouchableOpacity>
    )
}
export const InputButtonYellow =  ({onPress,value,icon='floppy-o',loading=false})=>{
    return (
        <TouchableOpacity
        onPress={onPress}>
   <LinearGradient
    colors={['#e97116', '#d06513']}
    style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>
    <Text
        style={{
        backgroundColor: 'transparent',
        fontSize: 15,
        color: '#fff',
        }}>
    {value}
    </Text>
    </LinearGradient>
    </TouchableOpacity>
    )
}
/*Solid buttons*/


const styles = StyleSheet.create({
    buttonRed:{
        alignItems: "center",
        width:250,
        padding: 10,
        margin: 10,
        borderRadius: 10
    },
})
