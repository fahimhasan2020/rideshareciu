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
    'endPointLng':''
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
                startPoint: action.point,
            };
        case 'CHANGE_END_LAT':
            return {
                ...state,
                endPoint: action.point,
            };
        default:
            return state;
    }
};
export default reducer;