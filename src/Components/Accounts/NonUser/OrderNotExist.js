import React from 'react';
import { Modal, Button, Icon } from 'antd';

class OrderNotExist extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visible : this.props.isVisible
        }
    }

    handleOk = () =>{
        this.props.handleClose();
    }

    render(){
        return(
            <div>
                <Modal className={"notfound"}
                    title="Data not found!"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    closable = {false}
                    footer={[
                        <Button onClick={this.handleOk}>
                            Okay
                        </Button>]}
                >
                    <p>Sorry! We did not find any record for that input.</p>
                </Modal>
            </div>
        )
    }
}

export default OrderNotExist;