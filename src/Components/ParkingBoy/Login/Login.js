import React from "react";
import ParkingBoyResource from "../../../Api/ParkingBoyResource.js";
import MainPage from "../MainPage/MainPage.js";
import { Redirect, useHistory  } from 'react-router-dom'

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }
    handleChange = (event) => {
        const thisState = this.state;
        this.setState({
            ...thisState,
            [event.target.name]: event.target.value
        });
    }
    login = () => {
        this.props.login(this.state);
        if(this.props.user.parkingBoy.id){
             this.props.status = true;
        }
    }
    render(){
        return(
            <div className = "login">
                <h1>Login</h1>
                <span>Username</span><input type="text" value={this.state.username} name="username" onChange={this.handleChange}></input>
                <br></br>
                <span>Password</span><input type="password" value={this.state.password} name="password" onChange={this.handleChange}></input>
                <br></br>
                <button onClick = {this.login}>Login</button>
            </div>
        );
    }
}

export default Login;