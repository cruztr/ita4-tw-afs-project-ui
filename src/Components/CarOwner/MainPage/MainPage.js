import {Breadcrumb, Icon, Layout, Menu, Statistic} from 'antd';
import React from "react";
import './MainPage.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import ReservationContainer from "../../../State/CarOwner/MainPage/Reservation/Container.js";
import LogoBordered from "../Images/logowhitebordered.png";
import LogoSmall from "../Images/logosmall.png"
import swal from "sweetalert";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class MainPage extends React.Component {
    state = {
        loading: true,
        collapsed : false
    };

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };


    goLogout = () => {
        return(
            this.props.history.push('/login')
        )
    }

    showLogoutBox = () =>{

        swal({
            title: "Log Out",
            text: "Do you want to logout?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willLogout) => {
            if (willLogout) {
                swal("Thanks for using Sparks!", {
                    icon: "success",
                }).then(() =>{this.goLogout()})

            }
        })
    }

    render() {
        const smallLogo = <div className="logo"><img width="60px" alt="Spark" src={LogoSmall}/></div>;
        const largeLogo = <div className="logo"><img width="170px" alt="Spark" src={LogoBordered}/></div>;

        return (
            <Router>
                <Layout>
                    <Sider className="slider2"
                           collapsible
                           collapsed={this.state.collapsed}
                           onCollapse={this.onCollapse}
                    >
                        {this.state.collapsed ? smallLogo : largeLogo}
                        <Menu theme="dark" className="mainMenu" defaultSelectedKeys={['1']} mode="inline" >
                            <Menu.Item key="2">
                                <Link to={'/'} className="nav-link">
                                    <Icon type="dashboard" />
                                    <span>Home</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to={'/reservation'} className="nav-link">
                                    <Icon type="schedule" />
                                    <span>Reservations</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Link to={'/logs'} className="nav-link">
                                    <Icon type="file" />
                                    <span>History</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="5">
                                <Link to={'/about'} className="nav-link">
                                    <Icon type="info-circle" />
                                    <span>About</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Link to={'/logout'} className="nav-link">
                                    <Icon type="info-circle" />
                                    <span>Log Out</span>
                                </Link>
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
                                    <Route path='/reservation'> <ReservationContainer account={this.props.location.account}/></Route>
                                    <Route path='/logs'> History </Route>
                                    <Route path='/about'> About </Route>
                                    <Route path="/logout" render={() => this.showLogoutBox()} />
                                </Switch>
                            </div>
                            <div className={"invi"}>
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