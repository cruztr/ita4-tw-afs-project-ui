import {Breadcrumb, Icon, Layout, Menu} from 'antd';
import React from "react";
import OrderContainer from "../../../State/ParkingBoy/MainPage/Order/Container.js";
import ReservationContainer from "../../../State/ParkingBoy/MainPage/Reservations/Container.js";
import Logo from "./sparkLogo.png";
import './MainPage.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class MainPage extends React.Component {
    render() {
        // alert(JSON.stringify(this.props.location.account))
        return (
            <Router>
                <Layout style={{minHeight: '100vh' }}>
                    <Sider className="slider" >
                        <div className="logo"><img width="200px" alt="Spark" src={Logo}/></div>
                        <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" >
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
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Icon type="file" />
                                <span><Link to={'/logs'} className="nav-link">History</Link></span>
                            </Menu.Item>
                            <Menu.Item key="7">
                                <Icon type="info-circle" />
                                <span><Link to={'/about'} className="nav-link">About</Link></span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0, paddingBottom: "101px"}} />
                        <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                            </Breadcrumb>
                            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                                <Switch>
                                    <Route exact path='/'>Home</Route>
                                    <Route path='/parkingLot'>Parking Lots</Route>
                                    <Route path='/orders'> Orders </Route>
                                    <Route path='/reservations'> Reservations</Route>
                                    <Route path='/logs'> History </Route>
                                    <Route path='/about'> About </Route>
                                </Switch>
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>spark ©2019 Created by EUTeam</Footer>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

export default MainPage;


// import React from "react";
// import OrderContainer from "../../../State/ParkingBoy/MainPage/Order/Container.js";
//
// class MainPage extends React.Component{
//     render(){
//         return(
//             <div className="parkingboy-main-page">
//                 <OrderContainer />
//             </div>
//         );
//     }
// }
//
// export default MainPage;