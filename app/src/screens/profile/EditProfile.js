import React, { Component } from 'react'
import { View,StyleSheet,ScrollView,Image,ToastAndroid,Modal,TouchableHighlight,TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';
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
        phone:'',
        image: null,
        dpLoading:false,
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
        if(this.props.rider === true){
            return  fetch(host+'rider/save/info',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email:this.state.email,
                    firstName:this.state.first_name,
                    lastName:this.state.last_name,
                    dob:this.state.chosenDate,
                    phone:this.state.phone
                })
            }).then((response) => response.json())
            .then((responseJson)=>{
              const {params} = this.props.navigation.state;
                const {goBack} = this.props.navigation;
                params.callHome();
                goBack();
            })
        }else{
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
                    dob:this.state.chosenDate,
                    phone:this.state.phone
                })
            }).then((response) => response.json())
            .then((responseJson)=>{
                console.log(responseJson);
              const {params} = this.props.navigation.state;
                const {goBack} = this.props.navigation;
                params.callHome();
                goBack();
            })
        }
        
      }

    saveDp = () => {
        if(this.state.image === null){
           return alert("No image picked");
        }
        this.setState({dpLoading:true})
        const host = this.props.host;
        if(this.props.rider === true){
            return  fetch(host+'rider/update/dp',{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept":"application/json"
                },
                body: JSON.stringify({
                    email:this.state.email,
                    image:"data:image/jpeg;base64,"+this.state.image.base64})
            }).then((response) => response.json())
            .then((responseJson)=>{
                this.setState({dpLoading:false});
                const {params} = this.props.navigation.state;
                const {goBack} = this.props.navigation;
                params.callHome();
                goBack();
            })
        }else{
            return  fetch(host+'user/update/dp',{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept":"application/json"
                },
                body: JSON.stringify({
                    email:this.state.email,
                    image:"data:image/jpeg;base64,"+this.state.image.base64})
            }).then((response) => response.json())
            .then((responseJson)=>{
                this.setState({dpLoading:false})
                const {params} = this.props.navigation.state;
                const {goBack} = this.props.navigation;
                params.callHome();
                goBack();
            })
        }
    }
    

    componentDidMount=async()=>{
        const value = await AsyncStorage.getItem('email')
    if(value !== null) {
      this.setState({email:value})
      const host = this.props.host;
      if(this.props.rider === true){
        return  fetch(host+'rider/get/info',{
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
            this.setState({first_name:responseJson.first_name,last_name:responseJson.last_name,nid:responseJson.nid,chosenDate:responseJson.date_of_birth,
            phone:responseJson.phone_number
            })
        })

      }else{
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
            this.setState({first_name:responseJson.first_name,last_name:responseJson.last_name,nid:responseJson.nid,chosenDate:responseJson.date_of_birth,phone:responseJson.phone_number})
        })
      }
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
            base64: true,
            aspect: [4, 4],
            quality: 1,
          });
          if (!result.cancelled) {
            this.setState({ image: result });
          }
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
            base64: true,
            aspect: [4, 4],
            quality: 1,
          });
          if (!result.cancelled) {
            this.setState({ image: result });
          }
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
                            <Text style={{fontSize:20,alignSelf:'center',color:'orange'}}>Basic Info</Text>
                            <Text>First name</Text>
                            <Inputs val={this.state.first_name} pl={'First Name'} onChangeTexts={(val)=>{this.setState({first_name:val})}} />
                            <Text>Last name</Text>
                            <Inputs val={this.state.last_name} pl={'Last Name'}
                            onChangeTexts={(val)=>{this.setState({last_name:val})}} />
                            <Text>Phone number</Text>
                            <Inputs val={this.state.phone} pl={'Phone number'}
                            onChangeTexts={(val)=>{this.setState({phone:val})}} />
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
             <InputButtonBlue onPress={()=>{this.saveBasicInfo()}}  value={'Update profile'} />
                        </Body>
                    </CardItem>
                </Card>
                
                <Card>
                    <CardItem>
                        <Body style={{alignItems:'center'}}>
                        <Text style={{fontSize:20,alignSelf:'center',color:'#1e5208',marginBottom:20}}>Update Profile Picture</Text>

                        <TouchableOpacity
                        onPress={()=>{this.setState({modalVisible:true})}}
                        style={{height:200,width:'90%',alignSelf:'center',alignItems:'center',justifyContent:'center',backgroundColor:'#eee',borderWidth:2,
                        borderStyle: 'dashed',
                        borderColor:'#adadad'
                        ,borderRadius:1,marginBottom:20}}
                        >
                             <Icon  name={'camera'} size={40} color="#adadad"/>
                        <Text style={{fontSize:20,color:'#adadad'}}>SELECT PHOTO</Text>
                        </TouchableOpacity>

                        <Modal
                                animationType="slide"
                                transparent={true}
                                visible={this.state.modalVisible}
                            >
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                   <TouchableOpacity onPress={()=>{this._pickImageFromCamera()}} style={{marginRight:50}}>
                                       <Image source={require('../../../assets/img/camera.png')} style={{height:70,width:70}} />
                                       <Text>CAMERA</Text>
                                   </TouchableOpacity>
                                   <TouchableOpacity onPress={()=>{this._pickImageFromDrive()}}>
                                       <Image source={require('../../../assets/img/picture.png')} style={{height:70,width:70}} />
                                       <Text>GALLERY</Text>
                                   </TouchableOpacity>
                                        <TouchableHighlight
                                            style={{position:'absolute',top:10,right:10}}
                                            onPress={() => {
                                                this.setState({modalVisible:false})
                                            }}
                                        >
                                            <FontAwesome name={'times'} size={20}  />
                                        </TouchableHighlight>
                                    </View>
                                </View>
                            </Modal>


                        {this.state.image && <Image source={{ uri: this.state.image.uri }} style={{ width: 250, height: 200,marginLeft:10 }} />}
                        <InputButtonRed loading={this.state.dpLoading}  value={'Save image'} icon={'cloud-upload'} onPress={()=>{this.saveDp()}}  />
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
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        flexDirection:'row',
        padding: 75,
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
        rider:state.auth.rider
    }
};

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)