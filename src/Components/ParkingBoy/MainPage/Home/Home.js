import React from "react";
import { Card, Col, Row, Descriptions, Typography   } from 'antd';
import { Alert } from 'antd';
import "./Home.css";
import ParkingBoyResource from "../../../../Api/ParkingBoyResource.js"; 

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            createdCards : 0,
            closedCards : 0,
            pendingReservations : 0
        }
    }
    componentDidMount = () => {
        this.getAllCreatedCards();
        this.getAllClosedCards();
        this.getPendingReservations();
    }

    getAllCreatedCards = () =>{
        ParkingBoyResource.getAllCreatedCards(this.props.user.id).then(res => res.json())
        .then(res =>  this.setState({
            createdCards : res.length
        }));
    }

    getAllClosedCards = () =>{
        ParkingBoyResource.getAllClosedCards(this.props.user.id).then(res => res.json())
        .then(res =>  this.setState({
            closedCards : res.length
        }));
    }

    getPendingReservations = () =>{
        ParkingBoyResource.getPendingReservations().then(res => res.json())
        .then(res =>  this.setState({
            pendingReservations : res.length
        }));
    }

    render(){
        const { Title } = Typography;
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const fullName = this.props.user.firstName + " " + this.props.user.lastName;
        console.log(this.props.user);
        return(
            <div className="Home">
                <div style={{ background: '#262b41', padding: '10px' }}>
                <Title level={3} style={{color:"white"}}>My Profile</Title>
                <span className='date'>{date}</span>
                </div>
                <div className="user-info">
                    <Card>
                    <Descriptions>
                    <Descriptions.Item label="Name">{fullName}</Descriptions.Item>
                    <Descriptions.Item label="Username">{this.props.user.username}</Descriptions.Item>
                    </Descriptions>
                    </Card>
                </div>
                <br></br>
                <br></br>
                <div className="summary">
                    <Row gutter={16}>
                        <Col span={3}>
                        </Col>
                        <Col span={6}>
                            <Card title="orders created" bordered={true}>
                                    <Alert className='number-of-created' message={this.state.createdCards} type="success" />
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card title="orders closed" bordered={true}>
                            {<Alert className='number-of-closed' message={this.state.closedCards} type="info" />}
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card title="pending reservations" bordered={true}>
                            {<Alert className='number-of-pending' message={this.state.pendingReservations} type="error" />}
                            </Card>
                        </Col>
                        <Col span={3}>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Home;    