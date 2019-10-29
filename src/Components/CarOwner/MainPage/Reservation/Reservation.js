import {Button, Icon, Input, Popconfirm, Table, Menu, Tag, message } from 'antd'
import Highlighter from 'react-highlight-words';
import 'antd/dist/antd.css';
import React from 'react';
import ParkingLotResource from "../../../../Api/ParkingLotResource";

export default class Reservations extends React.Component{
    intervalID;
    constructor(props){
        super(props);
        this.state = {
            searchText: '',
            columns: [
                {
                    title: "Parking Lot Name",
                    dataIndex: "name",
                    key: "name",
                    ...this.getColumnSearchProps('name')
                },
                {
                    title: "Location",
                    dataIndex: "location",
                    key: "location",
                    ...this.getColumnSearchProps('location')
                },
                {
                    title: "Rate",
                    dataIndex: "rate",
                    key: "rate"
                },
                {
                    title: "Status",
                    dataIndex: "status",
                    key: "status",
                    render: status => (
                        <span>
                            <Tag color={(status==="AVAILABLE" ? "green" : "volcano")}>{status}</Tag>
                        </span>
                    ),
                },
                {
                    title: "Action",
                    key: "action",
                    render: (text,parkingLot) => {
                        if(parkingLot.status === "AVAILABLE"){
                            return (
                                <span>
                                    <Popconfirm title="Sure to reserve?" onConfirm={() => {
                                        {this.createReservation(parkingLot)}
                                    }}>
                                        <a>Reserve</a>
                                    </Popconfirm>
                                </span>
                            );
                        }
                    }
                }
            ]
        }
    }
    handleClick = e => {
        this.props.filterTypeChanged(e.key);
        ParkingLotResource.getParkingLots(e.key)
            .then(res => res.json()).then(res => {
            this.props.refreshContent(res);
        });
    };

    createReservation = parkingLot => {
        let today = new Date();
        today.setHours(today.getHours() + 1);
        let hour = today.getHours();
        let minutes = today.getMinutes();
        const param = {
            carOwnerId: this.props.account.id,
            parkingLotId: parkingLot.id,
            reservedTime: hour+":"+minutes
        }
        this.props.createReservation(param);
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
        render: text => (
            <Highlighter
                highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                searchWords={[this.state.searchText]}
                autoEscape
                textToHighlight={text.toString()}
            />
        ),
    });

    handleSearch = (selectedKeys, confirm) => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };

    componentDidMount(){
        // GET KUNG MAY EXISTING RESERVATION
        //FOR GETTING ALL PARKING LOT
        ParkingLotResource.getParkingLots(this.props.filterType)
            .then(res => res.json()).then(res => {
            this.props.refreshContent(res);
        });
    }

    render(){
        return(
            <div id="containerID" className="container">
                <h2>Parking Lot List</h2>
                <Menu onClick={this.handleClick} selectedKeys={this.props.filterType} mode="horizontal">
                    <Menu.Item key="all">
                        <Icon type="filter" />All
                    </Menu.Item>
                    <Menu.Item key="available">
                        <Icon type="filter" />Available
                    </Menu.Item>
                </Menu>
                <Table columns={this.state.columns} dataSource={this.props.parkingLots} size="medium"></Table>
            </div>
        );
    }
}