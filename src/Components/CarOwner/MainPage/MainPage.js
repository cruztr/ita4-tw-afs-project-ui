import {Breadcrumb, Icon, Layout, Menu, Spin, Statistic} from 'antd';
import React from "react";
import Logo from "../Images/logowhitebordered.png";
import './MainPage.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import ReservationContainer from "../../../State/CarOwner/MainPage/Reservation/Container.js";
import LogoBordered from "../Images/logowhitebordered.png";
import LogoSmall from "../Images/logo.png"

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Countdown } = Statistic;

class MainPage extends React.Component {
    state = {
        loading: true,
        collapsed : false
    };

    onFinish =() =>{
        this.setState({ loading: false });
    };
    deadline = Date.now() + 1 * 10 * 10 * 10 * 2 + 1 * 30;

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    render() {
        return (
            <Spin spinning={this.state.loading}>
            <Router>
                <Layout>
                    <Sider className="slider2"
                           collapsible
                           collapsed={this.state.collapsed}
                           onCollapse={this.onCollapse}
                    >
                        <div className="logo"><img width="170px" alt="Spark" src={this.state.collapsed ? LogoSmall : LogoBordered}/></div>
                        <Menu theme="dark" className="mainMenu" defaultSelectedKeys={['1']} mode="inline" >
                            <Menu.Item key="2">
                                <Icon type="dashboard" />
                                <span><Link to={'/'} className="nav-link">Home </Link></span>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <Icon type="schedule" />
                                <span><Link to={'/reservations'} className="nav-link">My Reservations </Link></span>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Icon type="file" />
                                <span><Link to={'/logs'} className="nav-link">My History</Link></span>
                            </Menu.Item>
                            <Menu.Item key="7">
                                <Icon type="info-circle" />
                                <span><Link to={'/about'} className="nav-link">About</Link></span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="content-layout">
                        <Content style={{ margin: '0 16px' }}>
                           <Breadcrumb style={{ margin: '16px 0' }}>
                            </Breadcrumb>
                            <div className="div-content">
                                <Switch>
                                    <Route exact path='/'>Home</Route>
                                    <Route path='/parkingLot'>Parking Lots</Route>
                                    <Route path='/orders'> Orders </Route>
                                    <Route path='/reservations'> <ReservationContainer account={this.props.location.account}/></Route>
                                    <Route path='/logs'> History </Route>
                                    <Route path='/about'> About </Route>
                                </Switch>
                            </div>
                            <div className={"invi"}>
                            <Countdown title="Countdown" value={this.deadline} onFinish={this.onFinish} />
                            </div>
                        </Content>
                        <Footer className="footer-layout">spark ©2019 Created by EUTeam</Footer>
                    </Layout>
                </Layout>
            </Router>
            </Spin>
        );
    }
}

export default MainPage;