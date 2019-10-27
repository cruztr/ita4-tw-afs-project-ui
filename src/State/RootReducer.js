import { combineReducers } from 'redux';
import loginReducer from "./ParkingBoy/Login/Reducer.js";
import orderReducer from "./ParkingBoy/MainPage/Order/Reducer.js";

export default combineReducers({
    loginReducer,
    orderReducer
});