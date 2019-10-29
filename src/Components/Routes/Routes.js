import React from "react";
import {Route,BrowserRouter} from "react-router-dom";
import AccountsContainer from "../../State/Accounts/Login/Container"
import SignUpCarOwnerContainer from "../../State/CarOwner/Signup/Container"
import MainPage from "../ParkingBoy/MainPage/MainPage";
import MainPageCarOwner from "../CarOwner/MainPage/MainPage"
import ReservationContainer from "../../State/ParkingBoy/MainPage/Reservations/Container.js";
import ViewOrder from "../../State/ParkingBoy/MainPage/ViewOrder/Container";


export default function Routes() {
    return (
        <BrowserRouter>
        <div>
            {/*<Route exact path="/" component={ViewOrder} />*/}
            <Route exact path="/" component={AccountsContainer} />
            <Route exact path="/signUp" component={SignUpCarOwnerContainer} />
            <Route exact path="/mainpage" component={MainPage} />
            <Route exact path="/mainpageCarOwner" component={MainPageCarOwner} />
            <Route exact path="/reservations" component={ReservationContainer} />
            </div>
        </BrowserRouter>
    );
  }