import {PROTOCOL_TO_MAIN_PATH} from "./Config";
export default {

    getAllReservation: () => fetch(
        PROTOCOL_TO_MAIN_PATH +"/parkingBoy/reservations",
        {
            headers: new Headers({'Content-Type': 'application/json'}),
            mode: 'cors'
        }),

    createReservation: (param) => fetch(PROTOCOL_TO_MAIN_PATH +"/carOwner/", {
        mode: 'cors',
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify({
            "parkingLotId": param.parkingLotID,
            "plateNumber" : param.plateNumber,
            "parkingBlockPosition": param.parkingBlockPosition,
            "reservation": param.reservation
        })
    })
}