import React from "react";
import {Route,BrowserRouter} from "react-router-dom";
import Container from "../../State/ParkingBoy/Login/Container";
import MainPage from "../ParkingBoy/MainPage/MainPage";

export default function Routes() {
    return (
        <BrowserRouter>
        <div>
            <Route exact path="/" component={Container} />
            <Route exact path="/mainpage" component={MainPage} />
            </div>
        </BrowserRouter>
    );
  }