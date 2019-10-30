import { Row, Col, AutoComplete } from 'antd';
import React from "react";
import 'antd/dist/antd.css';
import './ParkingLot.css';
import OrderContainer from "../../../../State/ParkingBoy/MainPage/Order/Container.js";
import CloseOrderContainer from '../../../../State/ParkingBoy/MainPage/CloseOrder/Container.js';
import blockOccupied from "../Images/Block/block-occupied.png";
import blockAvailable from "../Images/Block/block-available.png";
import blockReserved from "../Images/Block/block-reserved.png";

class ParkingLot extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          showOrder : false,
          showCloseOrder : false,
          blockPosition : "",
          value: '',
          dataSource: []
        }
      }
      componentDidMount = () =>{
        this.props.getAllParkingLots();
      }

      onSearch = () => {
        const parkingLotNames = this.props.allParkingLots.map(parkingLot => parkingLot.name).filter(parkingLotName => parkingLotName.toLowerCase().includes(this.state.value.toLowerCase()));
        this.setState({
          dataSource: !parkingLotNames ? [] : parkingLotNames
        });
      };

      onChange = value => {
        this.setState({ value });
      };

      getParkingBlocks = value =>{
        this.props.getAllParkingLots();
        this.props.getParkingLot(value);
      }

      showOrder = (isVisible, blockPostion, status) => {
        if(status == "AVAILABLE"){
            this.setState({
              showOrder : isVisible,
              blockPosition : blockPostion
          })
        }
        else if (status == "OCCUPIED"){
            this.setState({
              showCloseOrder : isVisible,
              blockPosition : blockPostion
          })
        }
      }

      closeModal = () =>{
        this.setState({
          showOrder : false,
          showCloseOrder : false
        })
      }


      updateParkingBlock = (status) =>{
        let name = this.props.parkingLot.name;
        let blockPosition =this.state.blockPosition;

        let thisParkingLots = [];
        let thisParkingLot = {};

        this.props.allParkingLots.forEach(parkingLot => {
          if(parkingLot.name == name){
            thisParkingLot = parkingLot;
              parkingLot.parkingBlocks.forEach(parkingBlock => {
                  if(parkingBlock.position == blockPosition){
                      parkingBlock.status = status;
                  }
              });
          }
          thisParkingLots.push(parkingLot);
      });


          let params = {
              parkingLots : thisParkingLots,
              parkingLot : thisParkingLot
          }

          this.props.updateParkingBlock(params);

      }

      showModal = () =>{
        if(this.state.showOrder)
          return <OrderContainer isVisible={this.closeModal} parkingLot={this.props.parkingLot} blockPosition = {this.state.blockPosition} whenOrder={this.updateParkingBlock} account={this.props.account} />;

        else if(this.state.showCloseOrder)
            return <CloseOrderContainer isVisible={this.closeModal} parkingLot={this.props.parkingLot} blockPosition = {this.state.blockPosition} whenCloseOrder={this.updateParkingBlock} account={this.props.account} />;
        else return null;
      }

      initializeParkingBlocks = () => {
        const blocks = [];

        this.props.parkingLot.parkingBlocks.sort((a, b) => (a.position > b.position)? 1: -1).forEach(block => {
          let parkingBlock = "";
               parkingBlock = <Col className="gutter-row" key={block.id} id={block.id} span={2}  onClick={() =>this.showOrder(true, block.position, block.status)}>
                   <div className="block-image">
                       <img className="parking-block" alt="parking block" src={block.status === "AVAILABLE" ? blockAvailable : (block.status === "OCCUPIED" ? blockOccupied : blockReserved)} />
                       <h2>{block.position}</h2>
                   </div>
               </Col>
            blocks.push(
              parkingBlock
            );
        })
        return blocks;
      }
    
      render(){
        const { dataSource, value } = this.state;
        return (
    <div className="parking-block">
     <AutoComplete
          value={value}
          dataSource={dataSource}
          style={{ width: 200 }}
          onSelect={this.getParkingBlocks}
          onSearch={this.onSearch}
          onChange={this.onChange}
          placeholder="Parking Lot Name"
        />
        <div className="legends">
          <img src={blockOccupied} width="20px" /><span>OCCUPIED | </span>
          <img src={blockAvailable} width="20px" /><span>AVAILABLE | </span>
          <img src={blockReserved} width="20px" /><span>RESERVED</span>
        </div>
        <hr/>
        <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
          {this.initializeParkingBlocks()}
        </Row>
      {this.showModal()}
      </div>
        );
      }
}

export default ParkingLot;