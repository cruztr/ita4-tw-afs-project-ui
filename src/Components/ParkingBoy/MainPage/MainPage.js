import React from "react";
import OrderContainer from "../../../State/ParkingBoy/MainPage/Order/Container.js";

class MainPage extends React.Component{
    render(){
        return(
            <div className="parkingboy-main-page">
                <OrderContainer />
            </div>
        );
    }
}

export default MainPage;