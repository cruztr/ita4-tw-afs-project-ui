import {Breadcrumb, Icon, Layout, Menu} from 'antd';
import React from "react";
import ParkingLotContainer from "../../../State/ParkingBoy/MainPage/ParkingLot/Container.js";
import ReservationContainer from "../../../State/ParkingBoy/MainPage/Reservations/Container.js";
import ViewOrderContainer from "../../../State/ParkingBoy/MainPage/ViewOrder/Container"
import LogsContainer from "../../../State/Logs/Container.js";
import LogoBordered from "./Images/logowhitebordered.png"
import './MainPage.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class MainPage extends React.Component {
    render() {
        // alert(JSON.stringify(this.props.location.account))
        return (
            <Router>
                <Layout >
                    <Sider className="slider2" >
                        <div className="logo"><img width="150px" alt="Spark" src={LogoBordered}/></div>
                        <Menu theme="dark" className="mainMenu" defaultSelectedKeys={['1']} mode="inline" >
                            <Menu.Item key="2">
                                <Link to={'/'} className="nav-link">
                                <span><Icon type="dashboard" /></span>
                                    <span>Home </span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to={'/parkingLot'} className="nav-link">
                                <span><Icon type="car" /></span>
                                    <span>Parking Lots </span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Link to={'/orders'} className="nav-link">
                                <span><Icon type="carry-out" /></span>
                                    <span>Orders</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <Link to={'/reservations'} className="nav-link">
                                <span><Icon type="schedule" /></span>
                                    <span>Reservations </span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Link to={'/logs'} className="nav-link">
                                <span><Icon type="file" /></span>
                                    <span>Logs</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="7">
                                <Link to={'/about'} className="nav-link">
                                <span><Icon type="info-circle" /></span>
                                <span>About</span>
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="content-layout">
                        <Content>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                            </Breadcrumb>
                            <div className="div-content">
                                <Switch>
                                    <Route exact path='/'>Home</Route>
                                    <Route path='/parkingLot'> <ParkingLotContainer /></Route>
                                    <Route path='/orders'> Orders <ViewOrderContainer /></Route>
                                    <Route path='/reservations'> <ReservationContainer account={this.props.location.account}/></Route>
                                    <Route path='/logs'> <LogsContainer account={this.props.location.account} typeOfUser={this.props.location.typeOfUser}/> </Route>
                                    <Route path='/about'> About </Route>
                                </Switch>
                            </div>
                        </Content>
                        <Footer className="footer-layout" style={{ textAlign: 'center' }}>spark ©2019 Created by EUTeam</Footer>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

export default MainPage;