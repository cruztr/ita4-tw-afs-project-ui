import {Divider, Popconfirm, Table} from 'antd'
import 'antd/dist/antd.css';
import React from 'react';
import ReservationResource from "../../../../Api/ReservationResource";

export default class Reservations extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            columns: [
                {
                    title: "Reservation Number.",
                    dataIndex: "reservationNumber",
                    key: "reservationNumber"
                },
                {
                    title: "Driver Name",
                    dataIndex: "fullName",
                    key: "fullName"
                },
                {
                    title: "Plate Number",
                    dataIndex: "plateNumber",
                    key: "plateNumber"
                },
                {
                    title: "Reserved Time",
                    dataIndex: "reservedTime",
                    key: "reservedTime"
                },
                {
                    title: "Action",
                    // dataIndex: "reservedTime",
                    key: "action",
                    render: (text,reservation) => (
                        <span>
                            <Popconfirm title="Sure to confirm?" onConfirm={() => {
                                console.log(reservation);
                            }}>
                                <a>Confirm</a>
                            </Popconfirm>
                            <Divider type={"vertical"} />
                            <Popconfirm title="Sure to void?" onConfirm={() => {
                                console.log(reservation);
                            }}>
                                <a>Void</a>
                            </Popconfirm>
                        </span>
                    )
                }
            ]
        }
    }

    componentDidMount(){
        ReservationResource.getAllReservation()
        .then(res => res.json()).then(res => this.props.refreshContent(res));
    }

    render(){
        return(
            <div id="containerID" className="container">
                <h2>Reservation List</h2>
                <Table columns={this.state.columns} dataSource={this.props.reservationList} size="medium"></Table>
            </div>
        );
    }
}