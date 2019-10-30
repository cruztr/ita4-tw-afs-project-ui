import React from 'react';
import { Modal, Button } from 'antd';
import "./CheckOrder.css"
class OrderDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visible : this.props.isVisible
        }
    }

    handleOk = () =>{
        this.props.handleClose();
    }

    
    render(){
        const order = this.props.order;
        return(
            <div>
            <Modal className={"order"}
                    title="Order Information"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    closable = {false}
                    footer={[
                        <Button onClick={this.handleOk}>
                          Okay
                        </Button>]}
                    >
                    <p>Order Number: {order.orderId}</p>
                    <p>Block Number: {order.parkingBlockPosition}</p>
                    <p>Plate Number: {order.plateNumber}</p>
                    <p>Status: {order.status}</p>
                    <p>Time In: {order.timeIn}</p>
                    <p>Time Out: {order.timeOut}</p>
                    <p>Cost: {order.price}</p>
            </Modal>
            </div>
        )
    }
}

export default OrderDetails;