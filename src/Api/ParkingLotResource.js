import {PROTOCOL_TO_MAIN_PATH} from "./Config";

export default {
    getParkingLot: () => fetch("http://localhost:8089/parkingLot/132", {
        mode: 'cors'
    }),
    getAllParkingLots: () => fetch("http://localhost:8089/parkingLot", {
        mode: 'cors'
    })
}
  