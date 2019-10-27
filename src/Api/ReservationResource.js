import {PROTOCOL_TO_MAIN_PATH} from "./Config";
export default {

    getAllReservation: () => fetch(
        PROTOCOL_TO_MAIN_PATH +"/parkingBoy/reservations",
        {
            headers: new Headers({'Content-Type': 'application/json'}),
            mode: 'cors'
        }),
}