import React, { Component } from 'react'
import { View,StyleSheet,ScrollView,Image,ToastAndroid,Modal,TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import {  Card, CardItem, Body,DatePicker,Fab,Button,CheckBox,ListItem,Text } from 'native-base';
import {Inputs,Passwords,InputButtonBlue,InputButtonRed} from "../../components/ui/Inputs";
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';


export class Profile extends Component {
    state={
        email:null,
        name:null,
        first_name:null,
        last_name:null,
        dob:null,
        nid:null,
        image: null,
        modalVisible:false,
        chosenDate: new Date(),
        options : {
            title: 'Select Avatar',
            customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
          }
    }


    setDate = (newDate) => {
        this.setState({ chosenDate: newDate });
      }

    saveBasicInfo = () => {
        const host = this.props.host;
        console.log("pressed");
        return  fetch(host+'user/save/info',{
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              email:this.state.email,
              firstName:this.state.first_name,
              lastName:this.state.last_name,
              dob:this.state.chosenDate
          })
      }).then((response) => response.json())
      .then((responseJson)=>{
          console.log(responseJson);
        ToastAndroid.show("Info added", ToastAndroid.SHORT);
      })
      }

    saveDp = () => {
        const host = this.props.host;
        alert("Uploaded");
        
    }

    componentDidMount=async()=>{
        const value = await AsyncStorage.getItem('email')
    if(value !== null) {
      this.setState({email:value})
      const host = this.props.host;
      return  fetch(host+'user/get/info',{
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
        this.setState({first_name:responseJson.first_name,last_name:responseJson.last_name,nid:responseJson.nid,chosenDate:responseJson.date_of_birth})
    })
    }
    this.getPermissionAsync();
    }
    
      getPermissionAsync = async () => {
        if (Constants.platform.ios) {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      };

      _pickImageFromCamera = async () => {
        try {
            this.setState({modalVisible:false})
            let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
          if (!result.cancelled) {
            this.setState({ image: result.uri });
          }
    
          console.log(result);
        } catch (E) {
          console.log(E);
        }
      };

      _pickImageFromDrive = async () => {
        try {
          this.setState({modalVisible:false})
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
          if (!result.cancelled) {
            this.setState({ image: result.uri });
          }
    
          console.log(result);
        } catch (E) {
          console.log(E);
        }
      };

    render() {
        return (
            <ScrollView style={styles.container}>
                <Card>
                    <CardItem>
                        <Body>
                            <Text style={{color:'#838383'}}>
                                PROFILE
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body>
                            <Text>First name</Text>
                            <Inputs val={this.state.first_name} pl={'First Name'} onChangeTexts={(val)=>{this.setState({first_name:val})}} />
                            <Text>Last name</Text>
                            <Inputs val={this.state.last_name} pl={'Last Name'}
                            onChangeTexts={(val)=>{this.setState({last_name:val})}} />
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body>
                        <Text>Date of Birth</Text>
                            <DatePicker
            defaultDate={new Date(2020, 1, 9)}
            minimumDate={new Date(1950, 1, 1)}
            maximumDate={new Date(2020, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Press here to select date"
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            disabled={false}
            />
                        </Body>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem>
                        <Body>
                            <InputButtonBlue onPress={()=>{this.saveBasicInfo()}}  value={'Update profile'} />
                        </Body>
                    </CardItem>
                </Card>
                {/* <Card>
                    <CardItem>
                        <Body>
                        <InputButtonBlue onPress={()=>{this.setState({modalVisible:true})}}   value={'Upload image'} icon={'camera'} />

                        <Modal
                                animationType="slide"
                                transparent={true}
                                visible={this.state.modalVisible}
                            >
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                    <InputButtonBlue onPress={()=>{this._pickImageFromCamera()}}   value={'Capture photo'} icon={'camera'} />
                                    <InputButtonBlue onPress={()=>{this._pickImageFromDrive()}}   value={'Upload from device'} icon={'file-o'} />
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


                        {this.state.image && <Image source={{ uri: this.state.image }} style={{ width: 200, height: 200 }} />}
                        <InputButtonRed   value={'Save image'} icon={'cloud-upload'} onPress={()=>{this.saveDp()}}  />
                        </Body>
                    </CardItem>
                </Card> */}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#eee'
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
})

const mapStateToProps = state => {
    return {
        host: state.auth.host,
        first_name: state.auth.first_name,
        last_name: state.auth.last_name,
        nid: state.auth.nid,
        dob: state.auth.dob,
    }
};

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)