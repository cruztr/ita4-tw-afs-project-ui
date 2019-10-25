import React from "react";
import {Button, Card, Input} from "antd";
import 'antd/dist/antd.css';
import './Login.css';
import sparkImage from './images/route.png';


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
    };
    login = () => {
        this.props.login(this.state);
        if(this.props.user.parkingBoy.id){
             this.props.status = true;
        }
    };
    render(){
        return(
            <div className="Login-Whole">
                <Card  className="Login">
                    <Card className= "Login-Logo" bordered={false}
                          cover={<img alt="Spark" src={sparkImage} />}>
                    </Card>
                    <div className="Login-Input">
                        <Input placeholder="Username" value={this.state.username} name="username"
                               onChange={this.handleChange}/>
                        <Input placeholder="Password" type="password" value={this.state.password} name="password"
                               onChange={this.handleChange}/>
                        <Button className="Login-Button" onClick = {this.login}>Login</Button>
                    </div>
                </Card>
            </div>
        );
    }
}

export default Login;