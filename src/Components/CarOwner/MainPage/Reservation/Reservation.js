import {Button, Icon, Input, Popconfirm, Table, Drawer,message} from 'antd'
import Highlighter from 'react-highlight-words';
import 'antd/dist/antd.css';
import React from 'react';
import ParkingLotResource from "../../../../Api/ParkingLotResource";
import CarOwnerResources from "../../../../Api/CarOwnerResources";

export default class Reservations extends React.Component{
    intervalID;

    constructor(props){
        super(props);
        this.state = {
            visible: false,
            childrenDrawer: false,
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

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    showChildrenDrawer = () => {
        this.setState({
            childrenDrawer: true,
        });
    };

    onChildrenDrawerClose = () => {
        this.setState({
            childrenDrawer: false,
        });
    };

    createReservation = parkingLot => {
        if(this.props.reservation.reservationNumber) {
            message.error('You have pending reservation');
        }
        else {
            const param = {
                carOwnerId: this.props.account.id,
                parkingLotId: parkingLot.id,
                reservedTime: "14:00:00"
            }
            this.props.createReservation(param);
        }
    }

    cancelReservation = reservationId => {
        this.setState({
            visible: false,
        });
        this.props.cancelMyReservation(reservationId);
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
        //Get Reservation with status "RESERVED"
        this.props.getMyReservation(this.props.account.id);
        //Get List of parking Lot
        ParkingLotResource.getAvailableParkingLots()
            .then(res => res.json()).then(res => {
            this.props.refreshContent(res);
            // this.intervalID = setTimeout(this.getData.bind(this), 5000);
        });
    }

    componentWillUnmount() {
        // clearTimeout(this.intervalID);
    }

    getCurrentReservation = () => {
        if(this.props.reservation.reservationNumber) {
            this.props.getMyReservation(this.props.account.id);
            this.setState({
                visible: true,
            });
        }
        else {
            message.error('You have no pending');

        }
    };

    render(){
        const myReservation = this.props.reservation;
        //IF MAY RESERVATION RETURN NEW COMPONENT/ VIEW

            return (
                <div>
                    <Button type="primary" onClick={this.getCurrentReservation}>
                        View Reservation
                    </Button>
                    <Drawer
                        title="Reservation Details"
                        width={520}
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                    >
                        REFERENCE NUMBER: {myReservation.reservationNumber} <br/>
                        PARKING LOT NAME: {myReservation.parkingLotName} <br/>
                        PARKING LOT LOCATION: {myReservation.parkingLotLocation} <br/>
                        RESERVED TIME: {myReservation.reservedTime} <br/>
                        RESERVATION STATUS: {myReservation.reservationStatus}<br/>
                        RATE: {myReservation.rate}
                        <div
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                width: '100%',
                                borderTop: '1px solid #e8e8e8',
                                padding: '10px 16px',
                                textAlign: 'right',
                                left: 0,
                                background: '#fff',
                                borderRadius: '0 0 4px 4px',
                            }}
                        >
                            <Button
                                style={{
                                    marginRight: 8,
                                }}
                                onClick={this.onClose}
                            >
                                Cancel
                            </Button>
                            <Popconfirm title="Cancel reservation?" onConfirm={() => {
                                {this.cancelReservation(myReservation.reservationNumber)}
                            }}>
                                <Button type="primary">
                                    Submit
                                </Button>
                            </Popconfirm>
                        </div>
                    </Drawer>
                    <div id="containerID" className="container">
                        <h2>Available Parking Lot List</h2>
                        <Table columns={this.state.columns} dataSource={this.props.parkingLots} size="medium"></Table>
                    </div>
                </div>
            )

            //ELSE
            // return (
            //     <div id="containerID" className="container">
            //         <h2>Available Parking Lot List</h2>
            //         <Table columns={this.state.columns} dataSource={this.props.parkingLots} size="medium"></Table>
            //     </div>
            // )
            //
    }
}