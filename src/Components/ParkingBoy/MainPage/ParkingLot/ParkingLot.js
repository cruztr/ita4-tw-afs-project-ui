import { Row, Col } from 'antd';
import React from "react";
import 'antd/dist/antd.css';
import './ParkingLot.css';
import OrderContainer from "../../../../State/ParkingBoy/MainPage/Order/Container.js";

class ParkingLot extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          parkingBlocks : [],
          initializedBlocks : [],
          showOrder : false
        }
      }
      getParkingBlocks = () =>{
        fetch("http://localhost:8080/parkingLot/13", {mode: 'cors'})
        .then(res => res.json())
        .then(res =>{
          this.setState({
            parkingBlocks : res.parkingBlocks
          });
          console.log(this.state.parkingBlocks);
          });
      }
      showOrder = (isVisible) => {
          this.setState({
              showOrder : isVisible
          })
      }
      updateParkingBlock = () => {
        if(this.state.showOrder)
            return <OrderContainer isVisible={this.showOrder} />;
        else return null;
      }
    
      initializeParkingBlocks = () => {
        const blocks = [];  

        this.state.parkingBlocks.forEach(block => {
            blocks.push(
              <Col className="gutter-row" key={block.id} id={block.id} span={60 / this.state.parkingBlocks.length}  onClick={() =>this.showOrder(true)}>
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
      {this.updateParkingBlock()}
      </div>
        );
      }
}

export default ParkingLot;