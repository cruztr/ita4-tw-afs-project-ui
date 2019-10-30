import {connect} from "react-redux";
import Reservations from "../../../../Components/ParkingBoy/MainPage/Reservations/Reservations";
import OrderResource from "../../../../Api/OrderResource";
import ReservationResource from "../../../../Api/ReservationResource";


const mapStateToProps = state => ({
    reservationList: state.reservationReducer.reservationList,
    orderList: state.reservationReducer.orderList,
    filters: state.reservationReducer.filters
});

const mapDispatchToProps = dispatch => ({

    refreshContent: (contentList) =>{
        dispatch({
            type: "REFRESH",
            payload: contentList
        })
    },

    createOrder: (order) =>{
        OrderResource.createOrder(order).then(res => res.json())
            .then(res =>
            {
                dispatch({
                    type: 'CREATE_ORDER',
                    payload: res
                })
            }).then(() => {
            ReservationResource.getAllReservation()
                .then(reservationJson => reservationJson.json()).then(reservation => {
                dispatch({
                    type: "REFRESH",
                    payload: reservation})
            })
        })
    },

    createFilters: (filters) => {
        dispatch({
            type: 'CREATE_PARKING_LOT_FILTERS',
            payload: filters
        })
    }

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Reservations)