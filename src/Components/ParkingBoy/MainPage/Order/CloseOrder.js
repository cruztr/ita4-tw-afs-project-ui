import {Input, Button, Row, Modal, Col} from 'antd'
import 'antd/dist/antd.css';
import React from 'react';
import ParkingBoyResource from "../../../../Api/ParkingBoyResource.js";

export default class CloseOrder extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            createdBy : {}
        }
    }
    componentDidMount = () =>{
        const parkingLotPosition = {
            parkingLotId : this.props.parkingLot.id,
            blockNumber : this.props.blockPosition
        }
        this.props.getOrder(parkingLotPosition);
    }

    closeOrder = () =>{
        const param = {
            orderDetails : this.props.orderDetails,
            parkingBoyID: this.props.account.id
        }
        this.props.closeOrder(param);
        this.props.isVisible();
        this.props.whenCloseOrder("AVAILABLE");
    };

    getParkingBoyById = (parkingBoyId) => {
        ParkingBoyResource.getParkingBoyById(parkingBoyId).then(res => res.json())
        .then(res => this.setState({
            createdBy : res
        }));
    }

    plateNumberChange = (event) => this.setState({plateNumber: event.target.value});

    render(){
        this.getParkingBoyById(this.props.orderDetails.createdBy);
        const creatorFullName = this.state.createdBy.firstName + " " + this.state.createdBy.lastName;
        const fullName = this.props.account.firstName + " " + this.props.account.lastName;
        return(
            <div>
                <Modal
                    title="Close Order"
                    centered
                    visible={this.props.isVisible}
                    on={() => this.closeOrder}
                    onCancel={() => this.props.isVisible(false)}
                
                      footer={[
                        <Button className="Cancel" onClick={() => this.props.isVisible(false)}>
                            Cancel
                        </Button>,
                        <Button className="Create-Order" key="submit" type="primary" onClick={this.closeOrder}>Close Order</Button>
                    ]}
                    >

                    <Row type="flex" justify="center">
                        <Col span={8}>Plate Number:</Col>
                        <Col span={12}>{this.props.orderDetails.plateNumber}</Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Col span={8}>Parking Lot:</Col>
                        <Col span={12}>{this.props.parkingLot.name}</Col>
                    </Row>

                    <Row type="flex" justify="center">
                        <Col span={8}>Location:</Col>
                        <Col span={12}>{this.props.parkingLot.location}</Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Col span={8}>Blk. Number:</Col>
                        <Col span={12}>{this.props.blockPosition}</Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Col span={8}>Created By:</Col>
                        <Col span={12}>{creatorFullName}</Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Col span={8}>Closed By:</Col>
                        <Col span={12}>{fullName}</Col>
                    </Row>
                </Modal>
            </div>
        );
    }
}