import {PROTOCOL_TO_MAIN_PATH} from "./Config";

export default {
    getAllParkingLots: () => fetch("http://localhost:8089/parkingLot", {
        mode: 'cors'
    })
}
  