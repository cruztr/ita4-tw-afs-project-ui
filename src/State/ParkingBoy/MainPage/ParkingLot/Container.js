import { connect } from "react-redux";
import ParkingLot from "../../../../Components/ParkingBoy/MainPage/ParkingLot/ParkingLot";
import ParkingLotResource from "../../../../Api/ParkingLotResource";

const mapStateToProps = state => ({
    parkingLot: state.parkingLotReducer.parkingLot,
    allParkingLots: state.parkingLotReducer.allParkingLots
});

const mapDispatchToProps = dispatch => ({

    getParkingLot: (parkingLotName) =>{
            dispatch({
                type: 'GET_PARKING_LOT',
                payload: parkingLotName
            })
    },
    getAllParkingLots: () =>{
        ParkingLotResource.getAllParkingLots()
        .then(res => res.json())
            .then(res => {
            dispatch({
                type: 'GET_ALL_PARKING_LOTS',
                payload: res
            })
          })
    },
    updateParkingBlock: (parkingBlock) =>{
            dispatch({
                type: 'UPDATE_PARKING_BLOCK',
                payload: parkingBlock
            })
    },
    clearParkingLot: () =>{
        dispatch({
            type: 'CLEAR_PARKING_LOT',
            payload: null
        })
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ParkingLot)