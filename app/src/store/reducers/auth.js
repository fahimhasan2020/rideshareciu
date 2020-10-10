import AsyncStorage from '@react-native-community/async-storage';

const data = {
    'host':'http://rideshare.bestreviewscorner.com/',
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
    'endPlaceId':'',
    'requestType':'',
    'rideId':0
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
            AsyncStorage.setItem('riderLoggedIn', 'false')
            return {
                ...state,
                loggedIn: action.logged,
                rider:action.logged
            };
        case 'LOGIN':
            return {
                ...state,
                loggedIn: action.logged
            };
        case 'RIDERLOGIN':
            AsyncStorage.setItem('riderLoggedIn', 'true')
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
        case 'CHANGE_Type':
            return {
                ...state,
                requestType: action.point
            };
        case 'CHANGE_RIDEID':
            return {
                ...state,
                rideId: action.point
            };
        default:
            return state;
    }
};


export default reducer;
