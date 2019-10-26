import React from "react";
import OrderContainer from "../../../State/ParkingBoy/MainPage/Order/Container.js";
import ReservationContainer from "../../../State/ParkingBoy/MainPage/Reservations/Container.js";

class MainPage extends React.Component{
    render(){
        return(
            <div className="parkingboy-main-page">
                <OrderContainer />
                <ReservationContainer />
            </div>

        );
    }
}

export default MainPage;