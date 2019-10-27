import {Input, Button, Row, Modal, Col} from 'antd'
import 'antd/dist/antd.css';
import React from 'react';

export default class CloseOrder extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            plateNumber: 'abc123',
            parkingLot: 'Scape Building',
            location: '1st floor',
            blockNumber: 'My Block',
            timeIn: '12:04 PM',
            status: 'OPEN'
        }
    }
    closeOrder = () =>{
        const param = {
            plateNumber: this.state.plateNumber,
            parkingLotID: 1,
            parkingBoyID: 1
        }
        this.props.closeOrder(param);
        this.setModal2Visible(false);
    };
    state = {
        modal2Visible: false,
    };

    setModal2Visible(modal2Visible) {
        this.setState({ modal2Visible });
    }

    plateNumberChange = (event) => this.setState({plateNumber: event.target.value});
    render(){
        return(
            <div>
                <Button type="primary" onClick={() => this.setModal2Visible(true)}>
                    Close Order
                </Button>
                <Modal
                    title="Close Order"
                    centered
                    visible={this.state.modal2Visible}
                    on={() => this.closeOrder}
                    onCancel={() => this.setModal2Visible(false)}
                >

                    <Row type="flex" justify="center">
                        <Col span={8}>Plate Number:</Col>
                        <Col span={12}><Input placeholder={this.state.plateNumber}
                                              onChange={this.plateNumberChange} disabled={true}/></Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Col span={8}>Parking Lot:</Col>
                        <Col span={12}><Input placeholder={this.state.parkingLot} disabled={true}/></Col>
                    </Row>

                    <Row type="flex" justify="center">
                        <Col span={8}>Location:</Col>
                        <Col span={12}><Input placeholder={this.state.location} disabled={true}/></Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Col span={8}>Blk. Number:</Col>
                        <Col span={12}><Input placeholder={this.state.blockNumber} disabled={true}/></Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Col span={8}>Created By:</Col>
                        <Col span={12}><Input placeholder={this.state.timeIn} disabled={true}/></Col>
                    </Row>
                    <Row type="flex" justify="center" className="row">
                        <Button className="Close-Order" onClick={this.closeOrder}>Close Order</Button>
                        <Button className="Cancel" >Cancel</Button>
                    </Row>
                </Modal>
            </div>
        );
    }
}