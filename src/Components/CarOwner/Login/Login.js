import React from "react";
import {Button, Card, Input} from "antd";
import 'antd/dist/antd.css';
import './Login.css';
import sparkImage from './Images/route.png';
import { Redirect, Link } from 'react-router-dom'

class LoginUser extends React.Component{
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

    setUser = () => {
        this.props.login(this.state);
    }

    goLogin = () => {
        if(this.props.user.parkingBoy.id){
            return <Redirect to='/mainpageCarOwner' />
        }
    }
    render(){
        return(
            <div className="Login-Whole">
                {this.goLogin()}
                <Card  className="Login">
                    <Card className= "Login-Logo" bordered={false}
                          cover={<img alt="Spark" src={sparkImage} />}>
                    </Card>
                    <div className="Login-Input">
                        <Input placeholder="Username" value={this.state.username} name="username"
                               onChange={this.handleChange}/>
                        <Input placeholder="Password" type="password" value={this.state.password} name="password"
                               onChange={this.handleChange}/>
                        <p className="Sign-Up">Don't have an account? <Link to="/signUp">Sign Up</Link></p>
                        <Button className="Login-Button" onClick = {this.setUser}>Login</Button>
                    </div>
                </Card>
            </div>
        );
    }
}

export default LoginUser;