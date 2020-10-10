import React, { Component } from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Input,Button} from 'react-native-elements';

/*Basic Input*/
export const Inputs =  ({val,onChangeTexts,ph})=>{
        return (
            <TextInput
                style={styles.inputDefault}
                value={val}
                onChangeText={onChangeTexts}
                placeholder={ph}
            />
        )
}
export const Passwords =  ({val,onChangeTexts,ph})=>{
    return (
        <TextInput
            style={styles.inputDefault}
            value={val}
            onChangeText={onChangeTexts}
            placeholder={ph}
            secureTextEntry={true}
        />
    )
}
/*Basic Input*/

/*Labeled Input*/
export const InputsWithIcon = ({val,onChangeTexts,ph}) => {
    return (
        <Input
            value={val}
            label={ph}
            inputContainerStyle={styles.input}
            onChangeText={onChangeTexts}
            placeholder={ph}
        />
    );
}
export const InputWithPassword = () =>{
    return (
        <Input
            value={val}
            label={ph}
            inputContainerStyle={styles.input}
            onChangeText={onChangeTexts}
            placeholder={ph}
            secureTextEntry={true}
        />
    );
}
/*Labeled Input*/


/*Solid buttons*/
export const InputButtonRed =  ({onPress,value,icon='floppy-o',loading=false})=>{
    return (
        <Button
            loading={loading}
            icon={
                <Icon
                    name={icon}
                    size={15}
                    color="white"
                />
            }
            buttonStyle={styles.buttonRed}
            type="solid"
            onPress={onPress}
            titleStyle={{color:'white',marginLeft:10}}
            title={value}
        />


    )
}
export const InputButtonGreen =  ({onPress,value,icon='floppy-o'},loading=false)=>{
    return (
        <Button
            loading={loading}
            icon={
                <Icon
                    name={icon}
                    size={15}
                    color="white"
                />
            }
            buttonStyle={styles.buttonGreen}
            type="solid"
            onPress={onPress}
            titleStyle={{color:'white',marginLeft:10}}
            title={value}
        />


    )
}
export const InputButtonBlue =  ({onPress,value,icon='floppy-o',loading=false})=>{
    return (
        <Button
            loading={loading}
            icon={
                <Icon
                    name={icon}
                    size={15}
                    color="white"
                />
            }
            buttonStyle={styles.buttonBlue}
            type="solid"
            onPress={onPress}
            titleStyle={{color:'white',marginLeft:10}}
            title={value}
        />


    )
}
export const InputButtonYellow =  ({onPress,value,icon='floppy-o',loading=false})=>{
    return (
        <Button
            loading={loading}
            icon={
                <Icon
                    name={icon}
                    size={15}
                    color="white"
                />
            }
            buttonStyle={styles.buttonYellow}
            type="solid"
            onPress={onPress}
            titleStyle={{color:'white',marginLeft:10}}
            title={value}
        />


    )
}
/*Solid buttons*/

/*Outline buttons*/
export const InputButtonRedOutline =  ({onPress,value,icon='floppy-o',loading=false})=>{
    return (
        <Button
            loading={loading}
            icon={
                <Icon
                    name={icon}
                    size={15}
                    color="#ff534a"
                />
            }
            buttonStyle={styles.buttonRedOutLine}
            type="outline"
            onPress={onPress}
            titleStyle={{color:'#ff534a',marginLeft:10}}
            title={value}
        />


    )
}
export const InputButtonGreenOutline =  ({onPress,value,icon='floppy-o',loading=false})=>{
    return (
        <Button
            loading={loading}
            icon={
                <Icon
                    name={icon}
                    size={15}
                    color="#16b306"
                />
            }
            buttonStyle={styles.buttonGreenOutLine}
            type="outline"
            onPress={onPress}
            titleStyle={{color:'#16b306',marginLeft:10}}
            title={value}
        />


    )
}
export const InputButtonBlueOutline =  ({onPress,value,icon='floppy-o',loading=false})=>{
    return (
        <Button
            loading={loading}
            icon={
                <Icon
                    name={icon}
                    size={15}
                    color="#066089"
                />
            }
            buttonStyle={styles.buttonBlueOutLine}
            type="outline"
            onPress={onPress}
            titleStyle={{color:'#066089',marginLeft:10}}
            title={value}
        />


    )
}
export const InputButtonYellowOutline =  ({onPress,value,icon='floppy-o',loading=false})=>{
    return (
        <Button
            loading={loading}
            icon={
                <Icon
                    name={icon}
                    size={15}
                    color="#d06513"
                />
            }
            buttonStyle={styles.buttonYellowOutLine}
            type="outline"
            onPress={onPress}
            titleStyle={{color:'#d06513',marginLeft:10}}
            title={value}
        />


    )
}
/*Outline buttons*/

const styles = StyleSheet.create({
    input:{
        height: 40,
        width:250,
    },
    inputDefault:{
        height: 40,
        width:250,
        borderColor: '#a1a1a1',
        borderWidth: 1,
        borderRadius:30,
        margin:10,
        padding:8
    },
    buttonRed:{
        alignItems: "center",
        width:250,
        backgroundColor: "#560027",
        padding: 8,
        margin: 10,
        borderRadius: 30
    },
    buttonGreen:{
        alignItems: "center",
        width:250,
        backgroundColor: "#16b306",
        padding: 8,
        margin: 10,
        borderRadius: 30
    },
    buttonBlue:{
        alignItems: "center",
        width:250,
        backgroundColor: "#000063",
        padding: 8,
        margin: 10,
        borderRadius: 30
    },
    buttonYellow:{
        alignItems: "center",
        width:250,
        backgroundColor: "#d06513",
        padding: 10,
        margin: 10,
        borderRadius: 10
    },
    buttonRedOutLine:{
        alignItems: "center",
        width:250,
        padding: 10,
        margin: 10,
        borderRadius: 10,
        borderColor: '#ff534a',
    },
    
    buttonGreenOutLine:{
        alignItems: "center",
        width:250,
        padding: 10,
        margin: 10,
        borderColor:'#16b306',
        borderRadius: 10
    },
    buttonBlueOutLine:{
        alignItems: "center",
        width:250,
        padding: 10,
        margin: 10,
        borderColor:'#000063',
        borderRadius: 10
    },
    buttonYellowOutLine:{
        alignItems: "center",
        width:250,
        padding: 10,
        margin: 10,
        borderColor:'#d06513',
        borderRadius: 10
    }
})
