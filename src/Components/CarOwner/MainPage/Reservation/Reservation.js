import {Button, Icon, Input, Popconfirm, Table} from 'antd'
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
                    title: "Action",
                    key: "action",
                    render: (text,parkingLot) => (
                        <span>
                            <Popconfirm title="Sure to reserve?" onConfirm={() => {
                                {this.createReservation(parkingLot)}
                            }}>
                                <a>Reserve</a>

                            </Popconfirm>
                        </span>
                    )
                }
            ]
        }
    }

    createReservation = parkingLot => {
        const param = {
            carOwnerId: this.props.account.id,
            parkingLotId: parkingLot.id,
            reservedTime: "14:00:00"
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
        this.getData();
    }

    getData = () => {
        ParkingLotResource.getAvailableParkingLots()
            .then(res => res.json()).then(res => {
            this.props.refreshContent(res);
            // this.intervalID = setTimeout(this.getData.bind(this), 5000);
        });
    }

    componentWillUnmount() {
        // clearTimeout(this.intervalID);
    }

    render(){
        return(
            <div id="containerID" className="container">
                <h2>Available Parking Lot List</h2>
                <Table columns={this.state.columns} dataSource={this.props.parkingLots} size="medium"></Table>
            </div>
        );
    }
}