import {PROTOCOL_TO_MAIN_PATH} from "./Config";

export default {
    getParkingLot: () => fetch("http://localhost:8089/parkingLot/246", {
        mode: 'cors'
    })
}
  