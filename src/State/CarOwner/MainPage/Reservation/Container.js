import {connect} from "react-redux";
import Reservation from "../../../../Components/CarOwner/MainPage/Reservation/Reservation";
import OrderResource from "../../../../Api/OrderResource";
import ReservationResource from "../../../../Api/ReservationResource";
import CarOwnerResources from "../../../../Api/CarOwnerResources";


const mapStateToProps = state => ({
    reservation: state.userReservationReducer.reservation,
    parkingLots: state.userReservationReducer.parkingLots
});

const mapDispatchToProps = dispatch => ({

    refreshContent: (contentList) =>{
        dispatch({
            type: "REFRESH",
            payload: contentList
        })
    },

    createReservation: (reservation) =>{
        CarOwnerResources.createReservation(reservation).then(res => res.json())
            .then(res =>
            {
                dispatch({
                    type: 'CREATE_RESERVATION',
                    payload: res
                })

            })

    },

    cancelMyReservation: (reservationId) =>{
        CarOwnerResources.cancelReservation(reservationId).then(res => res.json())
            .then(() => {
                dispatch({
                    type: 'CANCEL_RESERVATION'
                })
            })
},
    getMyReservation: (accountId) =>{
        CarOwnerResources.getMyReservation(accountId).then(res => res.json())
            .then(res => {
                dispatch({
                  type: 'GET_RESERVATION',
                  payload:res
                })
            })
    },

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Reservation)