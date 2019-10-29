import { connect } from "react-redux";
import ViewOrder from "../../../../Components/ParkingBoy/MainPage/Order/ViewOrder"
import OrderResource from "../../../../Api/OrderResource"

const mapStateToProps = state => ({
    orderListDetails : state.viewOrderReducer.orderListDetails
});

const mapDispatchToProps = dispatch => ({
    closeOrder: (param) =>{
        OrderResource.closeOrder(param);
    },

    viewOrder: () => {
    OrderResource.getAllAvailableOrders()
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: 'GET_ORDERS',
                payload: res
            })
        })
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewOrder)