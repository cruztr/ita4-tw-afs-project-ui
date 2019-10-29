import {connect} from "react-redux";
import Reservation from "../../../../Components/CarOwner/MainPage/Reservation/Reservation";
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