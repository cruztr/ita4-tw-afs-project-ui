import { Input,  Button, Row, Modal, Col} from 'antd'
import 'antd/dist/antd.css';
import React from 'react';

export default class Order extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            plateNumber: ''
        }
    }
    createOrder = () =>{
        const param = {
            plateNumber: this.state.plateNumber,
            parkingLotID: this.props.parkingLot.id,
            parkingBoyID: 1,
            parkingBlockPosition : this.props.blockPosition
        }
        this.props.createOrder(param);
        this.props.isVisible(false);
        this.props.whenOrder();
    }

    plateNumberChange = (event) => this.setState({plateNumber: event.target.value});
    render(){
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
                        <Button className="Create-Order" key="submit" type="primary" onClick={this.createOrder}>Create Order</Button>
                    ]}
                 >
                    <Row type="flex" justify="center">
                        <Col span={8}>PLATE NUMBER:</Col>
                        <Col span={12}><Input placeholder="Plate Number" value={this.state.plateNumber}
                                              onChange={this.plateNumberChange}/></Col>
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
                        <Col span={12}></Col>
                    </Row>
                </Modal>
            </div>
        );
    }
}