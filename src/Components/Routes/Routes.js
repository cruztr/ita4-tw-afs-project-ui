import React from "react";
import {Route,BrowserRouter} from "react-router-dom";
import LoginContainer from "../../State/ParkingBoy/Login/Container";
import MainPage from "../ParkingBoy/MainPage/MainPage";
import ReservationContainer from "../../State/ParkingBoy/MainPage/Reservations/Container.js";

export default function Routes() {
    return (
        <BrowserRouter>
        <div>
            <Route exact path="/" component={LoginContainer} />
            <Route exact path="/mainpage" component={MainPage} />
            <Route exact path="/reservations" component={ReservationContainer} />
            </div>
        </BrowserRouter>
    );
  }