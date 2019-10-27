import React from "react";
import 'antd/dist/antd.css';
import './Signup.css';
import { Redirect, Link } from 'react-router-dom'
import {Button, Card, Input} from "antd";
import sparkImage from "../Signup/Images/route.png";

class LoginUser extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    goLogin = () => {
        if(this.props.user.parkingBoy.id){
            return <Redirect to='/mainpage' />
        }
    }
    render(){
        return(
            <div className="SignUp-Whole">
                <div className="SignUp-Container">
                    <div className="SignUp-Container-Input">
                        <Card className= "Spark-Logo" bordered={false}
                              cover={<img alt="Spark" src={sparkImage} />}>
                        </Card>
                        <div>
                            <Input className="Text-Input" placeholder="First Name" value={this.state.username} name="username"
                                   onChange={this.handleChange}/>
                            <Input className="Text-Input" placeholder="Last Name" value={this.state.username} name="username"
                                   onChange={this.handleChange}/>
                            <Input className="Text-Input" placeholder="Username" value={this.state.username} name="username"
                                   onChange={this.handleChange}/>
                            <Input className="Text-Input" placeholder="Plate Number" value={this.state.username} name="username"
                                   onChange={this.handleChange}/>
                            <Input className="Text-Input" placeholder="Password" value={this.state.username} name="username"
                                   onChange={this.handleChange}/>
                            <Input className="Text-Input" placeholder="Re-enter Password" value={this.state.username} name="username"
                                   onChange={this.handleChange}/>
                        </div>
                        <div className="SignUp-Container-Button">
                            <Button className="SignUp-Button" block type="primary" onClick = {this.setUser}>Sign Up</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginUser;