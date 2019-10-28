import {PROTOCOL_TO_MAIN_PATH} from "./Config";

export default {
    loginParkingBoy: (credentials) => fetch(
        PROTOCOL_TO_MAIN_PATH +"/parkingBoy/login",{
            mode: 'cors',
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(credentials)
        }),

    loginCarOwner: (credentials) => fetch(
        PROTOCOL_TO_MAIN_PATH +"/carOwner/login",{
            mode: 'cors',
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(credentials)
        }),

    checkOrder: (orderId) => fetch(
    PROTOCOL_TO_MAIN_PATH +"/parkingBoy/orders/" + orderId,{
        mode: 'cors',
        method: 'GET',
        headers: new Headers({'Content-Type': 'application/json'}),
        // body: JSON.stringify(credentials)
    }),
}
