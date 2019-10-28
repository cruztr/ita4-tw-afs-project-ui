import React from "react";
import {Button, Card, Input} from "antd";
import 'antd/dist/antd.css';
import './Login.css';
import sparkImage from './Images/route.png';
import { Redirect, Link } from 'react-router-dom'

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            orderId: ""
        }
    }
    handleChange = (event) => {
        const thisState = this.state;
        this.setState({
            ...thisState,
            [event.target.name]: event.target.value
        });
    }

    handleCheckOrder = () =>{
        this.props.checkOrder(this.state.orderId);

    }

    setUserCarOwner = () => {
        this.props.loginCarOwner(this.state);
    }

    setUserParkingBoy = () => {
        this.props.loginParkingBoy(this.state);
    }

    goLogin = () => {
        if(this.props.accounts.account.id){
            return <Redirect to= {{
                pathname: '/mainpage',
                account:this.props.accounts.account
            }}
         />
        }
    }

    checkOrder = () => {
        if(this.props.accounts.order.orderId == this.state.orderId){
            alert(JSON.stringify(this.props.accounts.order));
            // console.log(this.props.accounts.order);
        }
    }

    render(){
        return( 
            <div className="Login-CheckOrder_Whole">
                {this.goLogin()}
                {this.checkOrder()}
                <div className="UserContainer">
                    <Card className="Login-CheckOrder">
                        <Card className= "Login-Logo" bordered={false}
                              cover={<img alt="Spark" src={sparkImage} />}>
                        </Card>
                        <div className="Login-CheckOrder-Input">
                            <p>Check Order Status</p>
                            <Input placeholder="Order Id" value={this.state.orderId} name="orderId"
                                   onChange={this.handleChange}/>
                            <Button onClick = {this.handleCheckOrder}>Submit</Button>
                        </div>
                    </Card>
                    <Card className="Login-CheckOrder">
                        <Card className= "Login-Logo" bordered={false}
                              cover={<img alt="Spark" src={sparkImage} />}>
                        </Card>
                        <div className="Login-CheckOrder-Input">
                            <Input placeholder="Username" value={this.state.username} name="username"
                                   onChange={this.handleChange}/>
                            <Input placeholder="Password" type="password" value={this.state.password} name="password"
                                   onChange={this.handleChange}/>
                            <p className="Sign-Up">Register as Car Owner? <Link to="/signUp">Click here</Link></p>
                            <div className="UserContainer">
                                <Button onClick = {this.setUserCarOwner}>Login As Car Owner</Button>
                                <Button onClick = {this.setUserParkingBoy}>Login As Parking Boy</Button>
                            </div>
                        </div>
                    </Card>
                </div>


                {/*<Card  className="Login">*/}
                {/*</Card>*/}
                {/*<Card  className="Login">*/}

                {/*</Card>*/}
            </div>
        );
    }
}

export default Login;