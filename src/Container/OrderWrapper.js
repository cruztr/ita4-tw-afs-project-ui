import { connect } from "react-redux";
import ParkingBoyResouce from "../Resources/OrderResource";
import Order from "../Component/Order/Order";

const mapStateToProps = state => ({
    orderList: state.orderList
});

const mapDispatchToProps = dispatch => ({

    createOrder: (param) =>{
        ParkingBoyResouce.createOrder(param).then(res => res.json())
            .then(res => {
            dispatch({
                type: 'CREATE_ORDER',
                payload: res
            })
          })
        
    },

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Order)