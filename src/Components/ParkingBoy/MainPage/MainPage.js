import {Breadcrumb, Icon, Layout, Menu} from 'antd';
import React from "react";
import ParkingLotContainer from "../../../State/ParkingBoy/MainPage/ParkingLot/Container.js";
import ReservationContainer from "../../../State/ParkingBoy/MainPage/Reservations/Container.js";
import LogoBordered from "./Images/logowhitebordered.png"
import LogoSmall from "./Images/logo.png"
import './MainPage.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class MainPage extends React.Component {
    state = {
        collapsed : false
    };

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    render() {
        return (
            <Router>
                <Layout >
                    <Sider className="slider2"
                       collapsible
                       collapsed={this.state.collapsed}
                       onCollapse={this.onCollapse}
                    >
                        <div className="logo"><img width="170px" alt="Spark" src={this.state.collapsed ? LogoSmall : LogoBordered}/></div>
                        <Menu mode="inline" theme="dark" className="mainMenu" defaultSelectedKeys={['1']} mode="inline" >
                            <Menu.Item key="2">
                                <Icon className="menu-icon" type="dashboard" theme="outlined"/>
                                <span><Link to={'/'} className="nav-link">Home</Link></span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="car" />
                                <span><Link to={'/parkingLot'} className="nav-link">Parking Lots</Link></span>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Icon type="carry-out" />
                                <span><Link to={'/orders'} className="nav-link">My Orders</Link></span>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <Icon type="schedule" />
                                 {/*<span><Link to={'/reservations'} className="nav-link">Reservations</Link></span>*/}
                                <span>Reservations</span>
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
                                    <Route path='/reservations'> <ReservationContainer/></Route>
                                    <Route path='/logs'> Logs </Route>
                                    <Route path='/about'> About </Route>
                                </Switch>
                            </div>
                        </Content>
                        <Footer className="footer-layout">spark ©2019 Created by EUTeam</Footer>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

export default MainPage;