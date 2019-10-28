import React from "react";
import {Button, Card, Input, Layout, Row, Col, Modal } from "antd";
import 'antd/dist/antd.css';
import './Login.css';
import sparkImage from './Images/logowhitebordered.png';
import driveArriveRelax from './Images/driverarriverelax.png';
import SignUpContainer from '../../CarOwner/Signup/Signup'
import { Redirect, Link } from 'react-router-dom'
const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;

class Login extends React.Component{y
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            orderId: "",
            visible: false
        }
    }

    showModal = () => {
    const thisState = this.state;
    this.setState({
          ...thisState,
          visible: true,
      });
    };

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

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };

    setUserCarOwner = () => {
        this.props.loginCarOwner(this.state);
    }

    setUserParkingBoy = () => {
        this.props.loginParkingBoy(this.state);
    }

    signUpCarOwner = info =>{
        this.props.signUp(info)
        this.handleCancel();
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
        else if (this.props.accounts.signUpCredentials.id) {
            return <Redirect to= {{
                pathname: 'mainpageCarOwner',
                    account: this.props.accounts.signUpCredentials
            }}
            />
        }
    }

    render(){
        return(
            <div className={"maindiv"}>
                <Layout className={"Layout"}>
                    <div className={"Content"}>
                        <div className={"wrapper"}>
                            <Content>
                                {this.goLogin()}
                                {this.checkOrder()}
                                {/*Check Order*/}
                                <div className={"es1"}>
                                    <div className={"Order-block"}>
                                        <Card className={"st1"} bordered={false}>
                                            <p className={"Ps1"}>PARKING JUST GOT A LOT SIMPLER</p>
                                            <Card bordered={false}
                                                  cover={<img alt="Spark" src={driveArriveRelax}/>}>
                                            </Card>

                                            {/*<div>*/}
                                            {/*    <Input placeholder="Order Id" value={this.state.orderId} name="orderId"*/}
                                            {/*           onChange={this.handleChange}/>*/}
                                            {/*    <Button onClick = {this.handleCheckOrder}>Submit</Button>*/}
                                            {/*</div>*/}
                                            <p className={"pSm"}>Check the status of your parked car:</p>
                                            <Search
                                                value={this.state.orderId} name="orderId"
                                                onChange={this.handleChange}
                                                placeholder="Input Order Number"
                                                enterButton="Search"
                                                size="large"
                                                onSearch={this.handleCheckOrder}
                                            />
                                        </Card>
                                    </div>
                                </div>
                                {/*login*/}
                            <div className={"es2"}>
                                    <div className={"Login-block"}>
                                        <Card className={"Login-card"} bordered={false}
                                              cover={<img alt="Spark" src={sparkImage}/>}
                                                  >
                                           <div className={"Input"}>
                                                <Input className={"Login-uform"} placeholder="Username" value={this.state.username}
                                                   name="username"
                                                   onChange={this.handleChange}/>
                                           </div>
                                           <div className={"Input"}>
                                            <Input className={"Login-uform"} placeholder="Password" type="password" value={this.state.password}
                                                   name="password"
                                                   onChange={this.handleChange}/>
                                           </div>
                                            <div>
                                                <div className={"Div-btn"}>
                                                    <Button className={"User-btn"} onClick = {this.setUserCarOwner}>I am a Car Owner</Button>
                                                </div>
                                                <div className={"Div-btn"}>
                                                    <Button className={"Boy-btn"} onClick = {this.setUserParkingBoy}>I am a Parking Boy</Button>
                                                </div>
                                                <p className={"Ps2"}>Register as Car Owner? <Button onClick={this.showModal} type="link" block> Sign-Up </Button></p>
                                                    <Modal
                                                        title="Sign Up"
                                                        visible={this.state.visible}
                                                        footer={null}
                                                    >
                                                    <SignUpContainer closeModal={this.handleCancel} registerCarOwner={this.signUpCarOwner} />
                                                </Modal>
                                            </div>
                                        </Card>
                                    </div>
                                </div>
                            </Content>
                            <Footer className={"Footer"}>Created by EUTeam</Footer>
                        </div>
                    </div>
                </Layout>
            </div>
    );
    }
}

export default Login;