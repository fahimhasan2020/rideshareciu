import {combineReducers} from "redux";
import auth from './reducers/auth'

let reducer;
export default reducer = combineReducers({
    auth:auth
})