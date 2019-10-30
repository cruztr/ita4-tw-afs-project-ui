import { connect } from "react-redux";
import ViewOrder from "../../../../Components/ParkingBoy/MainPage/Order/ViewOrder"
import OrderResource from "../../../../Api/OrderResource";

const mapStateToProps = state => ({
    orders : state.viewOrderReducer
});

const mapDispatchToProps = dispatch => ({
    closeOrder: (param) => {
        OrderResource.closeOrder(param)
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: 'CLOSE_ORDER',
                    payload: res
                });
            })
    },

    viewOrder: () => {
    OrderResource.getAllAvailableOrders()
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: 'GET_ORDERS',
                payload: res
            });
        })
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewOrder)