import {
    combineReducers
} from "redux";
import productReducer from './productReducer.js'
import userReducer from './userReducer.js'

export default combineReducers({
    productReducer,
    userReducer
})