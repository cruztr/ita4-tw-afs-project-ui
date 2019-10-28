import { Row, Col, AutoComplete } from 'antd';
import React from "react";
import 'antd/dist/antd.css';
import './ParkingLot.css';
import OrderContainer from "../../../../State/ParkingBoy/MainPage/Order/Container.js";
import CloseOrderContainer from '../../../../State/ParkingBoy/MainPage/CloseOrder/Container.js';

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
        console.log(value);
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
          let param = {
            status : status,
            blockPosition :  this.state.blockPosition
          }
          this.props.updateParkingBlock(param);
      }

      showModal = () =>{
        if(this.state.showOrder)
          return <OrderContainer isVisible={this.closeModal} parkingLot={this.props.parkingLot} blockPosition = {this.state.blockPosition} whenOrder={this.updateParkingBlock} />;

        else if(this.state.showCloseOrder)
            return <CloseOrderContainer isVisible={this.closeModal} parkingLot={this.props.parkingLot} blockPosition = {this.state.blockPosition} whenCloseOrder={this.updateParkingBlock} />;
        else return null;
      }
    
      initializeParkingBlocks = () => {
        const blocks = [];  

        this.props.parkingLot.parkingBlocks.sort((a, b) => (a.position > b.position)? 1: -1).forEach(block => {
          let parkingBlock = "";
               parkingBlock = <Col className="gutter-row" key={block.id} id={block.id} span={2}  onClick={() =>this.showOrder(true, block.position, block.status)}>
                                    <div className={block.status}>{block.position}</div>
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
        <hr></hr>
        <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
          {this.initializeParkingBlocks()}
        </Row>
      {this.showModal()}
      </div>
        );
      }
}

export default ParkingLot;