import { connect } from "react-redux";
import OrderResource from "../../../../Api/OrderResource.js";
import CloseOrder from "../../../../Components/ParkingBoy/MainPage/Order/CloseOrder";

const mapStateToProps = state => ({
    orderDetails : state.orderCloseReducer.orderDetails
});


const mapDispatchToProps = dispatch => ({
    closeOrder: (param) =>{
        OrderResource.closeOrder(param)
    },
    getOrder: (parkingLotPositon) =>{
        OrderResource.getOrder(parkingLotPositon)
        .then(res => res.json())
            .then(res => {
        dispatch({
            type: 'GET_ORDER',
            payload: res
        })
    })
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CloseOrder)