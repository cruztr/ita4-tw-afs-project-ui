import {connect} from "react-redux";
import Reservation from "../../../../Components/CarOwner/MainPage/Reservation/Reservation";
import OrderResource from "../../../../Api/OrderResource";
import ReservationResource from "../../../../Api/ReservationResource";
import CarOwnerResources from "../../../../Api/CarOwnerResources";
import { message } from 'antd';
import swal from 'sweetalert';


const mapStateToProps = state => ({
    reservation: state.userReservationReducer.reservation,
    parkingLots: state.userReservationReducer.parkingLots,
    filterType: state.userReservationReducer.filterType
});

const mapDispatchToProps = dispatch => ({

    refreshContent: (contentList) =>{
        dispatch({
            type: "REFRESH",
            payload: contentList
        })
    },

    filterTypeChanged: (filterType) =>
        dispatch({
            type: "CHANGE_FILTER_TYPE",
            payload: filterType
        }),

    createReservation: (reservation) =>{
        CarOwnerResources.createReservation(reservation).then(res => res.json())
            .then(res =>
            {
                dispatch({
                    type: 'CREATE_RESERVATION',
                    payload: res
                })
                swal({
                    title: "Reservation Created",
                    text: "You have successfully created a reservation. This reservation is only valid within an hour",
                    icon: "success"
                })
                    // .then(
                    // ReservationResource.getAllReservation()
                    //     .then(reservationJson => reservationJson.json()).then(reservation => {
                    //     dispatch({
                    //         type: "REFRESH",
                    //         payload: reservation})
                    // })
                // )
            }).catch(() => {
            message.error('Creating reservation failed.');
            })

    },

    cancelMyReservation: (reservationId) =>{
        CarOwnerResources.cancelReservation(reservationId).then(res => res.json())
            .then(() => {
                dispatch({
                    type: 'CANCEL_RESERVATION'
                })
                swal({
                    title: "Reservation Cancelled",
                    text: "You have successfully cancelled a reservation.",
                    icon: "success"
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