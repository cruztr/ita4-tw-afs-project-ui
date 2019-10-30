import {PROTOCOL_TO_MAIN_PATH} from "./Config";

export default {
    getAllParkingLots: () => fetch("http://localhost:8089/parkingLot", {
        mode: 'cors'
    }),
    getParkingLots: (filterType) => fetch("http://localhost:8089/parkingLot/"+filterType, {
        mode: 'cors'
    }),
    getReservation: (param) => fetch("http://localhost:8089/parkingLot/"+ param.parkingLotId +"/parkingBlock/"+ param.blockPosition, {
        mode: 'cors'
    })
}