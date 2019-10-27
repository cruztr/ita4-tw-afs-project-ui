import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React from "react";
import ParkingLot from "./ParkingLot/ParkingLot.js";
import Logo from "./Images/sparkLogo.png";
import './MainPage.css';
const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class MainPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
        };
    }


    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        return (
            <Layout style={{minHeight: '100vh' }}>
                <Sider className="slider" >
                    <div className="logo"><img width="200px" alt="Spark" src={Logo}/></div>
                    <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                  <Icon type="car" />
                  <span>Parking Lots</span>
                </span>
                            }
                        >
                            <Menu.Item key="2">Orders</Menu.Item>
                            <Menu.Item key="3">Reservations</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="4">
                            <Icon type="file" />
                            <span>Logs</span>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Icon type="info-circle" />
                            <span>About Spark</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    {/*<Header style={{ background: '#fff', padding: 0 }} />*/}
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Parking Lots</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            <ParkingLot />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>spark ©2019 Created by EUTeam</Footer>
                </Layout>
            </Layout>
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