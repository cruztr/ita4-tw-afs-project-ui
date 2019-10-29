import {Button, Icon, Input, Popconfirm, Table} from 'antd'
import Highlighter from 'react-highlight-words';
import 'antd/dist/antd.css';
import React from 'react';
import ReservationResource from "../../../../Api/ReservationResource";

export default class Reservations extends React.Component{
    intervalID;

    constructor(props){
        super(props);
        this.state = {
            searchText: '',
            columns: [
                {
                    title: "Reservation Number.",
                    dataIndex: "reservationNumber",
                    key: "reservationNumber"
                },
                {
                    title: "Driver Name",
                    dataIndex: "fullName",
                    key: "fullName",
                    ...this.getColumnSearchProps('fullName')
                },
                {
                    title: "Plate Number",
                    dataIndex: "plateNumber",
                    key: "plateNumber",
                    ...this.getColumnSearchProps('plateNumber')
                },
                {
                    title: "Reserved Time",
                    dataIndex: "reservedTime",
                    key: "reservedTime"
                },
                {
                    title: "Action",
                    key: "action",
                    render: (text,reservation) => (
                        <span>
                            <Popconfirm title="Sure to confirm?" onConfirm={() => {
                                {this.createOrder(reservation)}
                            }}>
                                <a>Confirm</a>

                            </Popconfirm>
                        </span>
                    )
                }
            ]
        }
    }

    createOrder = reservation => {
        const param = {
            parkingLotID: reservation.parkingLotId,
            parkingBoyID: this.props.account.id,
            plateNumber: reservation.plateNumber,
            parkingBlockPosition: reservation.position,
            reservation: reservation
        }
        this.props.createOrder(param);
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
        ReservationResource.getAllReservation()
            .then(res => res.json()).then(res => {
            this.props.refreshContent(res);
            this.intervalID = setTimeout(this.getData.bind(this), 5000);
        });
    }

    componentWillUnmount() {
        clearTimeout(this.intervalID);
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