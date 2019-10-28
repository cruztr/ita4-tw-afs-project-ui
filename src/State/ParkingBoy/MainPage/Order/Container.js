import { connect } from "react-redux";
import Order from "../../../../Components/ParkingBoy/MainPage/Order/Order";
import OrderResource from "../../../../Api/OrderResource.js";

const mapDispatchToProps = () => ({
    createOrder: (param) =>{
        OrderResource.createOrder(param)
    },
});

export default connect(
    null,
    mapDispatchToProps
)(Order)