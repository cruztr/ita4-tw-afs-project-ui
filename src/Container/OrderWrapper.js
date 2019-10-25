import { connect } from "react-redux";
import ParkingBoyResouce from "../Resources/OrderResource";
import Order from "../Component/Order/Order";

const mapStateToProps = state => ({
    orderList: state.orderList
});

const mapDispatchToProps = dispatch => ({

    createOrder: (param) =>{
        ParkingBoyResouce.createOrder(param).then(res => res.json()).then(({parkingLotId, plateNumber, timeIn, createdBy}) => {
            dispatch({
                type: 'CREATE_ORDER',
                payload: {parkingLotId, plateNumber, timeIn, createdBy}
            })
          })
        
    },

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Order)