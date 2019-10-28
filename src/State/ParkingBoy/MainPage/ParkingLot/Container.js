import { connect } from "react-redux";
import ParkingLot from "../../../../Components/ParkingBoy/MainPage/ParkingLot/ParkingLot";
import ParkingLotResource from "../../../../Api/ParkingLotResource";

const mapStateToProps = state => ({
    parkingLot: state.parkingLotReducer.parkingLot
});

const mapDispatchToProps = dispatch => ({

    getParkingLot: () =>{
        ParkingLotResource.getParkingLot()
        .then(res => res.json())
            .then(res => {
            dispatch({
                type: 'GET_PARKING_LOT',
                payload: res
            })
          })
    },
    occupyParkingBlock: (parkingBlock) =>{
            dispatch({
                type: 'OCCUPY_PARKING_BLOCK',
                payload: parkingBlock
            })
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ParkingLot)