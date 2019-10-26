import {connect} from "react-redux";
import Reservations from "../../../../Components/ParkingBoy/MainPage/Reservations/Reservations";


const mapStateToProps = state => ({
    reservationList: state.reservationReducer.reservationList,
    filterType: state.reservationReducer.filterType
});

const mapDispatchToProps = dispatch => ({

    refreshContent: (contentList) =>
        dispatch({
            type: "REFRESH",
            payload: contentList
        })

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Reservations)