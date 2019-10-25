import { Input, Button } from 'antd'
import 'antd/dist/antd.css';
import React from 'react';

export default class Order extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            plateNumber: '123VUY',
            parkingLot: 'Scape Building',
            location: '1st floor',
            blockNumber: 'My Block',
            timeIn: '12:04 PM'
        }
    }
    createOrder = () =>{ 
        const newOrder = {
            parkingLotID: 1,
            plateNumber: this.state.plateNumber,
            status: "OPEN",
            createdBy: 1 
        }
        this.props.createOrder(newOrder);
    }
    plateNumberChange = (event) => this.setState({plateNumber: event.target.value});
    render(){
        return(
            <div>
                <p> Plate Number
                    <Input placeholder="123VUY" value={this.state.plateNumber} onChange={this.plateNumberChange}/>
                </p>
                <p> Parking Lot
                    <Input placeholder="Scape" value={this.state.parkingLot}/>
                </p>
                <p> Location
                    <Input placeholder="123 Diyan Diyan Lang" value={this.state.location}/>
                </p>
                <p> Blk. Number:
                    <Input placeholder="123 Yeti Street" value={this.state.blockNumber}/>
                </p>
                <p> Time In:
                    <Input placeholder="123 Yeti Street" value={this.state.timeIn}/>
                </p>
                <Button type="primary" onClick={this.createOrder}>Create Order</Button>
            </div>
        );
    }
}