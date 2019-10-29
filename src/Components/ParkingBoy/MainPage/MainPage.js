import {Breadcrumb, Icon, Layout, Menu} from 'antd';
import React from "react";
import ParkingLotContainer from "../../../State/ParkingBoy/MainPage/ParkingLot/Container.js";
import ReservationContainer from "../../../State/ParkingBoy/MainPage/Reservations/Container.js";
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
                            <Menu.Item key="2"><span>
                                <Icon type="dashboard" /></span>
                                <span><Link to={'/'} className="nav-link">Home </Link></span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <span><Icon type="car" /></span>
                                <span><Link to={'/parkingLot'} className="nav-link">Parking Lots </Link></span>
                            </Menu.Item>
                            <Menu.Item key="4"><span>
                                <Icon type="carry-out" /></span>
                                <span><Link to={'/orders'} className="nav-link">Orders </Link></span>
                            </Menu.Item>
                            <Menu.Item key="5"><span>
                                <Icon type="schedule" /></span>
                                 <span><Link to={'/reservations'} className="nav-link">Reservations </Link></span>
                                {/*<span>Reservations</span>*/}
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Icon type="file" />
                                <span><Link to={'/logs'} className="nav-link">Logs</Link></span>
                            </Menu.Item>
                            <Menu.Item key="7">
                                <Icon type="info-circle" />
                                <span><Link to={'/about'} className="nav-link">About</Link></span>
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
                                    <Route path='/orders'> Orders </Route>
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