import { Input,  Button, Row, Modal, Col} from 'antd'
import 'antd/dist/antd.css';
import React from 'react';

export default class Order extends React.Component{
    constructor(props){
        super(props);
        let parkingBlock = this.props.parkingLot.parkingBlocks.filter(parkingBlock => parkingBlock.position == this.props.blockPosition)[0];
        this.state = {
            plateNumber: '',
            disableButton: true,
            status: parkingBlock.status
        }
        this.getReservation();
    }
    getReservation = () => {
        if(this.state.status == "RESERVED"){
            const param = {
                parkingLotId : this.props.parkingLot.id,
                blockPosition : this.props.blockPosition
            }
            this.props.getReservation(param);
        }
    }


    createOrder = () =>{
        const param = {
            plateNumber: this.state.status == "RESERVED" ? this.props.carOwner.plateNumber : this.state.plateNumber,
            parkingLotID: this.props.parkingLot.id,
            parkingBoyID: this.props.account.id,
            parkingBlockPosition : this.props.blockPosition,
            reservation : this.props.reservation
        }
        this.props.createOrder(param);
        this.props.isVisible();
        this.props.whenOrder("OCCUPIED");
    }


    plateNumberChange = (event) => {
        this.setState({plateNumber: event.target.value});
        if(event.target.value.length>0){
            this.setState({disableButton: false});
        }
        else{
            this.setState({disableButton: true});
        }
    }
    render(){
        const fullName = this.props.account.firstName + " " + this.props.account.lastName;
        return(
            <div>
                <Modal
                    title="Create Order"
                    centered
                    visible={true}
                    on={() => this.createOrder}
                    onCancel={() => this.props.isVisible(false)}
                    style={{ paddingBottom: "200px" }}
                    footer={[
                        <Button className="Cancel" onClick={() => this.props.isVisible(false)}>
                            Cancel
                        </Button>,
                        <Button className="Create-Order" key="submit" type="primary" disabled={this.state.status == "RESERVED" ? false:this.state.disableButton} onClick={this.createOrder}>Create Order</Button>
                    ]}
                 >
                    <Row type="flex" justify="center">
                        <Col span={8}>PLATE NUMBER:</Col>
                        <Col span={12}><Input placeholder="Plate Number" value={this.state.status == "RESERVED" ? this.props.carOwner.plateNumber : this.state.plateNumber}
                                              onChange={this.plateNumberChange}
                                              disabled={this.state.status == "RESERVED" ? true : false} /></Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Col span={8}>PARKING LOT:</Col>
                        <Col span={12}>{this.props.parkingLot.name}</Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Col span={8}>LOCATION:</Col>
                        <Col span={12}>{this.props.parkingLot.location}</Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Col span={8}>BLK NUMBER:</Col>
                        <Col span={12}>{this.props.blockPosition}</Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Col span={8}>CREATED BY:</Col>
                        <Col span={12}>{fullName}</Col>
                    </Row>
                </Modal>
            </div>
        );
    }
}