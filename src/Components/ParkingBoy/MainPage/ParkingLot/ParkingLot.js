import { Row, Col } from 'antd';
import React from "react";
import 'antd/dist/antd.css';
import './ParkingLot.css';
import OrderContainer from "../../../../State/ParkingBoy/MainPage/Order/Container.js";

class ParkingLot extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          showOrder : false
        }
      }
      getParkingBlocks = () =>{
         this.props.getParkingLot();
      }
      showOrder = (isVisible) => {
          this.setState({
              showOrder : isVisible
          })
      }
      showOrderModal = () => {
        if(this.state.showOrder)
            return <OrderContainer isVisible={this.showOrder} parkingLot={this.props.parkingLot} />;
        else return null;
      }
    
      initializeParkingBlocks = () => {
        const blocks = [];  

        this.props.parkingLot.parkingBlocks.forEach(block => {
            blocks.push(
              <Col className="gutter-row" key={block.id} id={block.id} span={60 / this.props.parkingLot.parkingBlocks.length}  onClick={() =>this.showOrder(true)}>
                <div className={block.status}>{block.position+1}</div>
              </Col>
            );
        })
        return blocks;
      }
    
      render(){
        return (
    <div className="gutter-example">
    <button onClick={this.getParkingBlocks}>Get Parking Blocks</button>
        <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
          {this.initializeParkingBlocks()}
        </Row>
      {this.showOrderModal()}
      </div>
        );
      }
}

export default ParkingLot;