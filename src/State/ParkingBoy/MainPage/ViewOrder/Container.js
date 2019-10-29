import { connect } from "react-redux";
import ViewOrder from "../../../../Components/ParkingBoy/MainPage/Order/ViewOrder"

const mapStateToProps = state => ({
    orderListDetails : state.orderCloseReducer.orderDetails
});

const mapDispatchToProps = () => ({
    viewOrder: () =>{
        console.log("Hello");
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewOrder)