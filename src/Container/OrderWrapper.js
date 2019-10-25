import { connect } from "react-redux";
import ParkingBoyResouce from "../Resources/ParkingBoyResouce";
import Order from "../Component/Order/Order";

const mapStateToProps = state => ({
    orderList: state.orderList
});

const mapDispatchToProps = dispatch => ({

    createOrder: (order) =>{
        ParkingBoyResouce.createPackage(order).then(res => res.json()).then(({parkingLotID, plateNumber, status, createdBy}) => {
            dispatch({
                type: 'CREATE_ORDER',
                // payload: {parkingLotID, plateNumber, status, createdBy}
                payload: order
            })
          })
        
    },

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Order)