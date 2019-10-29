import { combineReducers } from 'redux';
import orderReducer from "./ParkingBoy/MainPage/Order/Reducer.js";
import reservationReducer from "./ParkingBoy/MainPage/Reservations/Reducer.js";
import signUpReducer from "./CarOwner/Signup/Reducer.js";
import accountsReducer from "./Accounts/Login/Reducer.js";
import parkingLotReducer from "./ParkingBoy/MainPage/ParkingLot/Reducer.js";
import orderCloseReducer from "./ParkingBoy/MainPage/CloseOrder/Reducer.js";
<<<<<<< Updated upstream
=======
import viewOrderReducer from "./ParkingBoy/MainPage/ViewOrder/Reducer.js";
import userReservationReducer from "./CarOwner/MainPage/Reservation/Reducer.js"
>>>>>>> Stashed changes

export default combineReducers({
    orderReducer,
    orderCloseReducer,
    viewOrderReducer,
    reservationReducer,
    signUpReducer,
    accountsReducer,
    parkingLotReducer
});