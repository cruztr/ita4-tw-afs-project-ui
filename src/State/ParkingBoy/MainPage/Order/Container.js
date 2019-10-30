import { connect } from "react-redux";
import Order from "../../../../Components/ParkingBoy/MainPage/Order/Order";
import OrderResource from "../../../../Api/OrderResource.js";
import ParkingLotResource from "../../../../Api/ParkingLotResource.js";
import CarOwnerResource from "../../../../Api/CarOwnerResources.js";

const mapStateToProps = state => ({
    status: state.orderReducer.status,
    reservation: state.orderReducer.reservation,
    carOwner: state.orderReducer.carOwner
});

const mapDispatchToProps = (dispatch) => ({
    createOrder: (param) => {
        OrderResource.createOrder(param)
    },
    setStatus: (status) => {
        dispatch({
            type: "SET_STATUS",
            payload: status
        })
    },
    getReservation: (param) => {
        ParkingLotResource.getReservation(param).then(res => res.json())
            .then(res => {
                dispatch({
                    type: "GET_RESERVATION",
                    payload: res
                })
                CarOwnerResource.getCarOwner(res.carOwnerId).then(res => res.json())
                    .then(res =>
                        dispatch({
                            type: "GET_CAR_OWNER",
                            payload: res
                        }))
            })
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Order)