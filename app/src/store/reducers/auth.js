import AsyncStorage from '@react-native-community/async-storage';

const data = {
    'host':'http://192.168.0.107:8000/',
    'firstName':'',
    'lastName':'',
    'rider':false,
    'accessToken':'',
    'loggedIn':false,
    'startPoint':'',
    'endPoint':'',
    'startPointLat':'',
    'startPointLng':'',
    'endPointLat':'',
    'endPointLng':'',
    'distance':0,
    'vehicleType':'',
    'startPlaceId':'',
    'endPlaceId':''
};

const reducer = (state = data, action) => {
    switch (action.type) {
        case 'LOGOUT':
            AsyncStorage.setItem('loggedIn', 'false')
            return {
                ...state,
                loggedIn: action.logged,
                rider:action.logged
            };
        case 'RIDERLOGOUT':
            AsyncStorage.setItem('loggedIn', 'false')
            return {
                ...state,
                loggedIn: action.logged
            };
        case 'LOGIN':
            return {
                ...state,
                loggedIn: action.logged
            };
        case 'RIDERLOGIN':
            return {
                ...state,
                loggedIn: action.logged,
                rider:action.logged
            };
        case 'SETSTATE':
            return {
                ...state,
                loggedIn: action.stata
            };
        case 'CHANGE_TOKEN':
            return {
                ...state,
                accessToken: action.token
            };
        case 'CHANGE_START_LAT':
            return {
                ...state,
                startPoint: action.point.description,
                startPlaceId:action.point.place_id
            };
        case 'CHANGE_END_LAT':
            return {
                ...state,
                endPoint: action.point.description,
                endPlaceId:action.point.place_id
            };
        case 'CHANGE_CAR':
            return {
                ...state,
                vehicleType: action.point
            };
        default:
            return state;
    }
};


export default reducer;