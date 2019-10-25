import React, { Component } from "react";
import MainPage from "../ParkingBoy/MainPage/MainPage";
import Container from "../../State/ParkingBoy/Container.js"

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            success : false,
            toBeRendered : <Container goLogin={this.checkIfLoggedIn} />
        }
    }
    checkIfLoggedIn = () =>{
            this.setState({
                success : true
            })
    }
    render(){
        return(
            <div className="Main">
                {this.state.success ? <MainPage /> : <Container status={this.state.success} />}
            </div>
        );
    }
}

export default Main;