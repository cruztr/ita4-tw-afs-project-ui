import {Table, Popconfirm} from 'antd';
import React from 'react';

export default class ViewOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            columns: [
                {
                    title: "Order Number.",
                    dataIndex: "reservationNumber",
                    key: "reservationNumber"
                },
                {
                    title: "Driver Name",
                    dataIndex: "fullName",
                    key: "fullName",
                    // ...this.getColumnSearchProps('fullName')
                },
                {
                    title: "Plate Number",
                    dataIndex: "plateNumber",
                    key: "plateNumber",
                    // ...this.getColumnSearchProps('plateNumber')
                },
                {
                    title: "Reserved Time",
                    dataIndex: "reservedTime",
                    key: "reservedTime"
                },
                {
                    title: "Action",
                    key: "action",
                    render: (text,order) => (
                        <span>
                            <Popconfirm title="Sure to confirm?" onConfirm={() => {
                                {this.closeOrder(order)}
                            }}> <a>Close Order</a>
                            </Popconfirm>
                        </span>
                    )
                }
            ]
        }
    }

    closeOrder = order => {

    }

    populateList(){
        let obj = [
            {
                reservationNumber: 1,
                fullName: 1,
                plateNumber: 2,
                reservedTime: 2
            },
            {
                reservationNumber: 1,
                fullName: 1,
                plateNumber: 2,
                reservedTime: 2
            },
            {
                reservationNumber: 1,
                fullName: 1,
                plateNumber: 2,
                reservedTime: 2
            },
            {
                reservationNumber: 1,
                fullName: 1,
                plateNumber: 2,
                reservedTime: 2
            },
            {
                reservationNumber: 1,
                fullName: 1,
                plateNumber: 2,
                reservedTime: 2
            }
        ]

        return obj;
    }


    render(){
        const viewOrder = this.populateList();
        return(
            <div>
                <h2>Open Orders</h2>
                <Table columns={this.state.columns} dataSource={viewOrder} size="medium"></Table>
            </div>
        )
    }
}