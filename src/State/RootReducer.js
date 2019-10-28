import { combineReducers } from 'redux';
import orderReducer from "./ParkingBoy/MainPage/Order/Reducer.js";
import reservationReducer from "./ParkingBoy/MainPage/Reservations/Reducer.js";
import signUpReducer from "./CarOwner/Signup/Reducer.js";
import accountsReducer from "./Accounts/Login/Reducer.js";

export default combineReducers({
    orderReducer,
    reservationReducer,
    signUpReducer,
    accountsReducer
});