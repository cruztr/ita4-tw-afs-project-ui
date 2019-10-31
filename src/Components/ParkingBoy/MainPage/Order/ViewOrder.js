import {Table, Popconfirm, Input, Button, Icon} from 'antd';
import React from 'react';
import Highlighter from "react-highlight-words";
import swal from 'sweetalert';

export default class ViewOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            closeOrder: '',
            columns: [
                {
                    title: "Order Number",
                    dataIndex: "orderNumber",
                    key: "orderNumber",
                    ...this.getColumnSearchProps('orderNumber')
                },
                {
                    title: "Plate Number",
                    dataIndex: "plateNumber",
                    key: "plateNumber",
                    ...this.getColumnSearchProps('plateNumber')
                },
                {
                    title: "ParkingLot Name",
                    dataIndex: "parkingLotName",
                    key: "parkingLotName",
                    ...this.getColumnSearchProps('parkingLotName')
                },
                {
                    title: "Price Rate",
                    dataIndex: "price",
                    key: "price"
                },
                {
                    title: "Total Cost",
                    dataIndex: "cost",
                    key: "cost"
                },
                {
                    title: "Time In",
                    dataIndex: "timeIn",
                    key: "timeIn"
                },
                {
                    title: "Action",
                    key: "action",
                    render: (text, order) => (
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

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Button
                    type="primary"
                    onClick={() => this.handleSearch(selectedKeys, confirm)}
                    icon="search"
                    size="small"
                    style={{ width: 90, marginRight: 8 }}
                >
                    Search
                </Button>
                <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                    Reset
                </Button>
            </div>
        ),
        filterIcon: filtered => (
            <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        },
        // render: text => (
        //     <Highlighter
        //         highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        //         searchWords={[this.state.searchText]}
        //         autoEscape
        //         textToHighlight={text.toString()}
        //     />
        // ),
    });

    handleSearch = (selectedKeys, confirm) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            isRefreshed: null
        });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({
            searchText: '',
            isRefreshed: null
        });
    };

    componentDidMount(){
        this.props.viewOrder();
    }

    closeOrder = order => {
        const param = {
            orderDetails:{
                parkingLotId: order.parkingLotId,
                plateNumber: order.plateNumber,
                parkingBlockPosition: order.parkingBlockPosition,
            },
            parkingBoyID: this.props.account.id,
            orderNumber: order.orderNumber
        }

        this.props.closeOrder(param);
        this.setState({ closeOrder: param });
    }

    validateStatus(){
        const status = this.props.orders.status;
        if(status !== null && this.state.closeOrder !== null) {
            if(status === true){
                const body = "Order " + this.state.closeOrder.orderNumber + " was successfully close. please click Ok to continue";
                swal({
                    title: "Order Closed",
                    text: body,
                    icon: "success"
                }).then(() => {
                    this.props.viewOrder();
                    this.setState({ closeOrder: null });
                });
            }
            else {
                const body = "Order " + this.state.closeOrder.orderNumber + " was not successfully close.";
                swal({
                    title: "Exceptions",
                    text: body,
                    icon: "warning"
                }).then(() => {
                    this.props.viewOrder();
                    this.setState({closeOrder: null});
                });
            }
        }
    }


    render(){
        const validate = this.validateStatus();
        return(
            <div>
                {validate}
                <h2>Open Orders</h2>
                <Table columns={this.state.columns} dataSource={this.props.orders.orderListDetails} size="medium"></Table>
            </div>
        )
    }
}