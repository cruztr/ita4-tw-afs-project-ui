import React from "react";
import {Route,BrowserRouter} from "react-router-dom";
import LoginContainer from "../../State/ParkingBoy/Login/Container";
import MainPage from "../ParkingBoy/MainPage/MainPage";

export default function Routes() {
    return (
        <BrowserRouter>
        <div>
            <Route exact path="/" component={LoginContainer} />
            <Route exact path="/mainpage" component={MainPage} />
            </div>
        </BrowserRouter>
    );
  }