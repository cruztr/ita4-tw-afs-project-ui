import { connect } from "react-redux";
import Order from "../../../../Components/ParkingBoy/MainPage/Order/Order";
import OrderResource from "../../../../Api/OrderResource.js";

const mapStateToProps = state => ({
    orderList: state.orderList
});

const mapDispatchToProps = dispatch => ({

    createOrder: (param) =>{
        OrderResource.createOrder(param).then(res => res.json())
            .then(res => {
            dispatch({
                type: 'CREATE_ORDER',
                payload: res
            })
          })
        
    },
    closeOrder: (param) =>{
        OrderResource.closeOrder(param).then(res => res.json())
            .then(res => {
                dispatch({
                    type: 'CREATE_ORDER',
                    payload: res
                })
            })

    }

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Order)