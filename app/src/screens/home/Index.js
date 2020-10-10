import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,ImageBackground,Image } from 'react-native';
import { Container, Header, Content, Badge,Body,H1,CheckBox} from 'native-base';
import {createDrawerNavigator} from "react-navigation-drawer";
import { connect } from 'react-redux'
import store from "../../store/store";
import {Divider,Avatar} from "react-native-elements";
import AddLocation from "./AddLocation"
import Icon from 'react-native-vector-icons/FontAwesome'
import { flipY,fromRight } from 'react-navigation-transitions';
import {createStackNavigator} from 'react-navigation-stack'
import Loading from "../loading/Loading";
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Forgot from "../auth/Forgot";
import Home from "./Home";
import Ride from "./Ride";
import Pole from "./Pole";
import Contents from "./Contents";
import RiderLogin from "../rider/auth/RiderLogin";
import RiderRegister from "../rider/auth/RiderRegister";
import RiderForgot from "../rider/auth/RiderForgot";
import FrontPage from "../auth/FrontPage";
import RiderHome from "../rider/home/RiderHome";
import Searching from "./Searching"
import RiderContents from "../rider/home/RiderContents";
import Profile from "../profile/Profile"
import Info from "../profile/Info"
import EditProfile from "../profile/EditProfile"
import Settings from "../profile/Settings"
import Faq from "../profile/Faq"
import FindPanel from "./FindPanel"
import { FontAwesome } from '@expo/vector-icons';
import RiderMap from "../rider/home/RiderMap"
class Index extends Component {

    componentDidMount(){
        console.disableYellowBox = true;
    }

    render() {
        if (this.props.loggedIn === false){
            return <NonLoggedIn />
        }else {
            if (this.props.rider === false){
                return <LoggedIn />
            }else{
                return <RiderLoggedIn />
            }

        }
    }
}
/*Non authenticated routes*/
const mainStack = createStackNavigator({
    Loader:{screen:Loading},
    MainPage:{screen:FrontPage},
    Login:{screen:Login},
    Register:{screen:Register},
    Forgot:{screen:Forgot},
    RiderLogin:{screen:RiderLogin},
    RiderRegister:{screen:RiderRegister},
    RiderForgot:{screen:RiderForgot},
},{
    headerMode:'none',
    initialRouteName:'Loader',
    transitionConfig: () => fromRight(500),
});
const NonLoggedIn = createAppContainer(mainStack);

/*Authenticated routes*/
const SwitchTwoNavigation = createSwitchNavigator({
    Home:{screen: Home},
    Contents:{screen:Contents},
});
const StackTwo = createStackNavigator({
    Home:{screen: SwitchTwoNavigation,navigationOptions:({navigation})=>({
            tintColor:'#eeeeee',
            activeTintColor:'#ffffff',
            headerStyle:{
                backgroundColor:'#000063',
                height: 40,
                paddingBottom:25,
            },
            headerTitle:'RIDE SHARE',
            headerTitleStyle:{
                color:'#ccc',
                fontSize:20,
                fontWeight:'bold'
            },
            headerLeft: (
                <TouchableOpacity
                    onPress={()=>{navigation.openDrawer()}}>
                    <Icon name="navicon" style={{color:'#eeeaee',margin:10,marginLeft:20}} size={25} />
                </TouchableOpacity>

            ),
            headerRight: (
                <TouchableOpacity
                    onPress={()=>{navigation.navigate('Contents')}}>
                    <Icon name="bell-o" style={{color:'#eeeaee',margin:10,marginRight:20}} size={25} />
                </TouchableOpacity>
            ),
        })
    },
    Ride:{screen: Ride,navigationOptions:({navigation})=>({
        tintColor:'#eeeeee',
        activeTintColor:'#ffffff',
        headerStyle:{
            backgroundColor:'#000063',
            height: 40,
            paddingBottom:25,
        },
        headerLeft: <TouchableOpacity onPress={() => navigation.goBack()}><FontAwesome name={'arrow-left'} size={20} style={{color:'white',marginLeft:20}} /></TouchableOpacity>,
        headerTitle:'Ride',
        headerTitleStyle:{
            color:'#ccc',
            fontSize:20,
            fontWeight:'bold'
        }
    })},
    EditProfile:{screen: EditProfile,navigationOptions:({navigation})=>({
        tintColor:'#eeeeee',
        activeTintColor:'#ffffff',
        headerStyle:{
            backgroundColor:'#000063',
            height: 40,
            paddingBottom:25,
        },
        headerLeft: <TouchableOpacity onPress={() => navigation.goBack()}><FontAwesome name={'arrow-left'} size={20} style={{color:'white',marginLeft:20}} /></TouchableOpacity>,
        headerTitle:'EditProfile',
        headerTitleStyle:{
            color:'#ccc',
            fontSize:20,
            fontWeight:'bold'
        }
    })},
    Pole:{screen: Pole,navigationOptions:({navigation})=>({
        tintColor:'#eeeeee',
        activeTintColor:'#ffffff',
        headerStyle:{
            backgroundColor:'#000063',
            height: 40,
            paddingBottom:25,
        },
        headerLeft: <TouchableOpacity onPress={() => navigation.goBack()}><FontAwesome name={'arrow-left'} size={20} style={{color:'white',marginLeft:20}} /></TouchableOpacity>,
        headerTitle:'Pole',
        headerTitleStyle:{
            color:'#ccc',
            fontSize:20,
            fontWeight:'bold'
        }
    })},
    Searching:{screen: Searching,navigationOptions:({navigation})=>({
        tintColor:'#eeeeee',
        activeTintColor:'#ffffff',
        headerLeft: <TouchableOpacity onPress={() => navigation.goBack()}><FontAwesome name={'arrow-left'} size={20} style={{color:'white',marginLeft:20}} /></TouchableOpacity>,
        headerStyle:{
            backgroundColor:'#000063',
            height: 40,
            paddingBottom:25,
        },
        headerTitle:'Confirm Ride',
        headerTitleStyle:{
            color:'#ccc',
            fontSize:20,
            fontWeight:'bold'
        }
    })},
    FindPanel:{screen: FindPanel,navigationOptions:({navigation})=>({
        tintColor:'#eeeeee',
        header:null,
        activeTintColor:'#ffffff',
        headerLeft: <TouchableOpacity onPress={() => navigation.goBack()}><FontAwesome name={'arrow-left'} size={20} style={{color:'white',marginLeft:20}} /></TouchableOpacity>,
        headerStyle:{
            backgroundColor:'#000063',
            height: 40,
            paddingBottom:25,
        },
        headerTitle:'Confirm Ride',
        headerTitleStyle:{
            color:'#ccc',
            fontSize:20,
            fontWeight:'bold'
        }
    })},
    Profile:{screen:Profile,navigationOptions:({navigation})=>({
        tintColor:'#eeeeee',
        activeTintColor:'#ffffff',
        headerLeft: <TouchableOpacity onPress={() => navigation.goBack()}><FontAwesome name={'arrow-left'} size={20} style={{color:'white',marginLeft:20}} /></TouchableOpacity>,
        headerStyle:{
            backgroundColor:'#000063',
            height: 40,
            paddingBottom:25,
        },
        headerTitle:'Profile',
        headerTitleStyle:{
            color:'#ccc',
            fontSize:20,
            fontWeight:'bold'
        }
    })},
    Info:{screen:Info,navigationOptions:({navigation})=>({
        tintColor:'#eeeeee',
        activeTintColor:'#ffffff',
        headerStyle:{
            backgroundColor:'#000063',
            height: 40,
            paddingBottom:25,
        },
        headerLeft: <TouchableOpacity onPress={() => navigation.goBack()}><FontAwesome name={'arrow-left'} size={20} style={{color:'white',marginLeft:20}} /></TouchableOpacity>,
        headerTitle:'Info',
        headerTitleStyle:{
            color:'#ccc',
            fontSize:20,
            fontWeight:'bold'
        }
    })},
    Settings:{screen:Settings,navigationOptions:({navigation})=>({
        tintColor:'#eeeeee',
        activeTintColor:'#ffffff',
        headerStyle:{
            backgroundColor:'#000063',
            height: 40,
            paddingBottom:25,
        },
        headerLeft: <TouchableOpacity onPress={() => navigation.goBack()}><FontAwesome name={'arrow-left'} size={20} style={{color:'white',marginLeft:20}} /></TouchableOpacity>,
        headerTitle:'Settings',
        headerTitleStyle:{
            color:'#ccc',
            fontSize:20,
            fontWeight:'bold'
        }
    })},
    Faq:{screen:Faq,navigationOptions:({navigation})=>({
        tintColor:'#eeeeee',
        activeTintColor:'#ffffff',
        headerStyle:{
            backgroundColor:'#000063',
            height: 40,
            paddingBottom:25,
        },
        headerLeft: <TouchableOpacity onPress={() => navigation.goBack()}><FontAwesome name={'arrow-left'} size={20} style={{color:'white',marginLeft:20}} /></TouchableOpacity>,
        headerTitle:'FAQ',
        headerTitleStyle:{
            color:'#ccc',
            fontSize:20,
            fontWeight:'bold'
        }
    })},
    AddLocation:{screen:AddLocation,navigationOptions:({navigation})=>({
        tintColor:'#eeeeee',
        activeTintColor:'#ffffff',
        headerStyle:{
            backgroundColor:'#000063',
            height: 40,
            paddingBottom:25,
        },
        headerLeft: <TouchableOpacity onPress={() => navigation.goBack()}><FontAwesome name={'arrow-left'} size={20} style={{color:'white',marginLeft:20}} /></TouchableOpacity>,
        headerTitle:'Add New Location',
        headerTitleStyle:{
            color:'#ccc',
            fontSize:20,
            fontWeight:'bold'
        }
    })},
},{
    initialRouteName:'Home',
    transitionConfig: () => fromRight(500),
    defaultNavigationOptions:{
        headerTintColor: '#066089',
        tintColor:'#adadad',
    },
    headerTitleStyle:{
        color:'#adadad'
    }
});
const CustomDrawerDesign = (props)=>(
    <Container>
        <Header style={styles.header}>
           <Image
               style={styles.tinyLogo}
               source={require('../../../assets/icon.png')}
           />
        </Header>
        <View>
        <TouchableOpacity
                onPress={()=>props.navigation.navigate('Home')}
                style={styles.drawerButtons}>
                <View style={{width:'auto',height:40,paddingLeft:25}}>
                    <Text style={{color:'#606060'}}>
                       Home
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>props.navigation.navigate('Profile')}
                style={styles.drawerButtons}>
                <View style={{width:'auto',height:40,paddingLeft:25}}>
                    <Text style={{color:'#606060'}}>
                        Profile
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>props.navigation.navigate('Settings')}
                style={styles.drawerButtons}>
                <View style={{width:'auto',height:40,paddingLeft:25}}>
                    <Text style={{color:'#606060'}}>
                        Settings
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>props.navigation.navigate('Info')}
                style={styles.drawerButtons}>
                <View style={{width:'auto',height:40,paddingLeft:25}}>
                    <Text style={{color:'#606060'}}>
                        Info
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>{store.dispatch({type:'LOGOUT',logged:false})}}
                style={styles.drawerButtons}>
                <View style={{width:'auto',height:40,paddingLeft:25}}>
                    <Text style={{color:'#606060'}}>
                        Logout
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    </Container>
);
const DrawerNavigation = createDrawerNavigator({
        Home:{screen:StackTwo},
    },{
        contentComponent:CustomDrawerDesign,
        drawerOpenRoute:'DrawerOpen',
        drawerCloseRoute:'DrawerClose',
    }
);
const LoggedIn = createAppContainer(DrawerNavigation);
/*Authenticated routes*/

/*Rider*/
const RiderSwitchTwoNavigation = createSwitchNavigator({
    Home:{screen: RiderHome},
    Contents:{screen:RiderContents},
});
const RiderStackTwo = createStackNavigator({
    Home:{screen: RiderSwitchTwoNavigation,navigationOptions:({navigation})=>({
            tintColor:'#eeeeee',
            activeTintColor:'#ffffff',
            headerStyle:{
                backgroundColor:'#000063',
                height: 40,
                paddingBottom:25,
            },
            headerTitle:'RIDER PANEL',
            headerTitleStyle:{
                color:'#ccc',
                fontSize:20,
                fontWeight:'bold'
            },
            headerLeft: (
                <TouchableOpacity
                    onPress={()=>{navigation.openDrawer()}}>
                    <Icon name="navicon" style={{color:'#eeeaee',margin:10,marginLeft:20}} size={25} />
                </TouchableOpacity>

            ),
        })
    },
    RiderMap:{screen:RiderMap,navigationOptions:({navigation})=>({
        header:null,
        tintColor:'#eeeeee',
        activeTintColor:'#ffffff',
        headerTitle:'Map',
    })},
    Profile:{screen:Profile,navigationOptions:({navigation})=>({
        tintColor:'#eeeeee',
        activeTintColor:'#ffffff',
        headerStyle:{
            backgroundColor:'#000063',
            height: 40,
            paddingBottom:25,
        },
        headerLeft: <TouchableOpacity onPress={() => navigation.goBack()}><FontAwesome name={'arrow-left'} size={20} style={{color:'white',marginLeft:20}} /></TouchableOpacity>,
        headerTitle:'Profile',
        headerTitleStyle:{
            color:'#ccc',
            fontSize:20,
            fontWeight:'bold'
        }
    })},
    EditProfile:{screen: EditProfile,navigationOptions:({navigation})=>({
        tintColor:'#eeeeee',
        activeTintColor:'#ffffff',
        headerStyle:{
            backgroundColor:'#000063',
            height: 40,
            paddingBottom:25,
        },
        headerLeft: <TouchableOpacity onPress={() => navigation.goBack()}><FontAwesome name={'arrow-left'} size={20} style={{color:'white',marginLeft:20}} /></TouchableOpacity>,
        headerTitle:'EditProfile',
        headerTitleStyle:{
            color:'#ccc',
            fontSize:20,
            fontWeight:'bold'
        }
    })},
    Info:{screen:Info,navigationOptions:({navigation})=>({
        tintColor:'#eeeeee',
        activeTintColor:'#ffffff',
        headerStyle:{
            backgroundColor:'#000063',
            height: 40,
            paddingBottom:25,
        },
        headerLeft: <TouchableOpacity onPress={() => navigation.goBack()}><FontAwesome name={'arrow-left'} size={20} style={{color:'white',marginLeft:20}} /></TouchableOpacity>,
        headerTitle:'Info',
        headerTitleStyle:{
            color:'#ccc',
            fontSize:20,
            fontWeight:'bold'
        }
    })},
    Settings:{screen:Settings,navigationOptions:({navigation})=>({
        tintColor:'#eeeeee',
        activeTintColor:'#ffffff',
        headerStyle:{
            backgroundColor:'#000063',
            height: 40,
            paddingBottom:25,
        },
        headerLeft: <TouchableOpacity onPress={() => navigation.goBack()}><FontAwesome name={'arrow-left'} size={20} style={{color:'white',marginLeft:20}} /></TouchableOpacity>,
        headerTitle:'Settings',
        headerTitleStyle:{
            color:'#ccc',
            fontSize:20,
            fontWeight:'bold'
        }
    })},
    Faq:{screen:Faq,navigationOptions:({navigation})=>({
        tintColor:'#eeeeee',
        activeTintColor:'#ffffff',
        headerStyle:{
            backgroundColor:'#000063',
            height: 40,
            paddingBottom:25,
        },
        headerLeft: <TouchableOpacity onPress={() => navigation.goBack()}><FontAwesome name={'arrow-left'} size={20} style={{color:'white',marginLeft:20}} /></TouchableOpacity>,
        headerTitle:'FAQ',
        headerTitleStyle:{
            color:'#ccc',
            fontSize:20,
            fontWeight:'bold'
        }
    })},
},{
    transitionConfig: () => fromRight(500),
    defaultNavigationOptions:{
        headerTintColor: '#066089',
        tintColor:'#adadad',
    },
    headerTitleStyle:{
        color:'#adadad'
    }
});
const RiderCustomDrawerDesign = (props)=>(
    <Container>
        <Header style={styles.header}>
           <Image
               style={styles.tinyLogo}
               source={require('../../../assets/icon.png')}
           />
        </Header>
        <View>
        <TouchableOpacity
                onPress={()=>props.navigation.navigate('Home')}
                style={styles.drawerButtons}>
                <View style={{width:'auto',height:40,paddingLeft:25}}>
                    <Text style={{color:'#606060'}}>
                        Home
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>props.navigation.navigate('Profile')}
                style={styles.drawerButtons}>
                <View style={{width:'auto',height:40,paddingLeft:25}}>
                    <Text style={{color:'#606060'}}>
                        Profile
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>props.navigation.navigate('Settings')}
                style={styles.drawerButtons}>
                <View style={{width:'auto',height:40,paddingLeft:25}}>
                    <Text style={{color:'#606060'}}>
                        Settings
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>props.navigation.navigate('Info')}
                style={styles.drawerButtons}>
                <View style={{width:'auto',height:40,paddingLeft:25}}>
                    <Text style={{color:'#606060'}}>
                        Info
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>{store.dispatch({type:'RIDERLOGOUT',logged:false})}}
                style={styles.drawerButtons}>
                <View style={{width:'auto',height:40,paddingLeft:25}}>
                    <Text style={{color:'#606060'}}>
                        Logout
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    </Container>
);
const RiderDrawerNavigation = createDrawerNavigator({
        Home:{screen:RiderStackTwo},
    },{
        contentComponent:RiderCustomDrawerDesign,
        drawerOpenRoute:'DrawerOpen',
        drawerCloseRoute:'DrawerClose',
    }
);
const RiderLoggedIn = createAppContainer(RiderDrawerNavigation);
/*Rider*/


const mapStateToProps = (state) => ({
    loggedIn: state.auth.loggedIn,
    rider:state.auth.rider
});

const mapDispatchToProps = {
    //
};
export default connect(mapStateToProps, mapDispatchToProps)(Index)
const styles = StyleSheet.create({
    header: {
        height:150,
        width:'100%',
        marginBottom:30,
        backgroundColor:'#fff'
    },
    drawerButtons:{
        padding:5,
        flexDirection:'row',
        height: 30
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tinyLogo: {
        width: 150,
        height: 150,
    }
});