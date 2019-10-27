import React from "react";
import {Route,BrowserRouter} from "react-router-dom";
import LoginParkingBoyContainer from "../../State/ParkingBoy/Login/Container";
import LoginCarOwnerContainer from "../../State/CarOwner/Login/Container";
import SignUpCarOwnerContainer from "../../State/CarOwner/Signup/Container"
import MainPage from "../ParkingBoy/MainPage/MainPage";

export default function Routes() {
    return (
        <BrowserRouter>
        <div>
            <Route exact path="/" component={LoginCarOwnerContainer} />
            <Route exact path="/parkingBoy" component={LoginParkingBoyContainer} />
            <Route exact path="/signUp" component={SignUpCarOwnerContainer} />
            <Route exact path="/mainpage" component={MainPage} />
            </div>
        </BrowserRouter>
    );
  }