import { Input,  Button, Row, Modal, Col} from 'antd'
import 'antd/dist/antd.css';
import React from 'react';

export default class Order extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            plateNumber: '',
            parkingLot: 'Scape Building - 1st floor',
            location: 'Macapagal Blvd., Pasay City, 1300',
            blockNumber: '1B',
            timeIn: '12:04 PM'
        }
    }
    createOrder = () =>{
        const param = {
            plateNumber: this.state.plateNumber,
            parkingLotID: 1,
            parkingBoyID: 1
        }
        this.props.createOrder(param);
        this.setModal2Visible(false);
    }
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
                    Create Order
                </Button>
                <Modal
                    title="Create Order"
                    centered
                    visible={this.state.modal2Visible}
                    on={() => this.createOrder}
                    onCancel={() => this.setModal2Visible(false)}
                    style={{ paddingBottom: "200px" }}
                    footer={[
                        <Button className="Cancel">
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
                        <Col span={12}>{this.state.parkingLot}</Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Col span={8}>LOCATION:</Col>
                        <Col span={12}>{this.state.location}</Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Col span={8}>BLK NUMBER:</Col>
                        <Col span={12}>{this.state.blockNumber}</Col>
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