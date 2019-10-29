import {connect} from "react-redux";
import Reservation from "../../../../Components/CarOwner/MainPage/Reservation/Reservation";
import OrderResource from "../../../../Api/OrderResource";
import ReservationResource from "../../../../Api/ReservationResource";
import CarOwnerResources from "../../../../Api/CarOwnerResources";


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
                    // .then(
                    // ReservationResource.getAllReservation()
                    //     .then(reservationJson => reservationJson.json()).then(reservation => {
                    //     dispatch({
                    //         type: "REFRESH",
                    //         payload: reservation})
                    // })
                // )


            })

    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Reservation)