import {PROTOCOL_TO_MAIN_PATH} from "./Config";

export default {
    login: (credentials) => fetch(
        PROTOCOL_TO_MAIN_PATH +"/carOwner/login",{
            mode: 'cors',
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(credentials)
        }),

    signUp: (credentials) => fetch(
        PROTOCOL_TO_MAIN_PATH +"/carOwner/signUp",{
            mode: 'cors',
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(credentials)
        }),

    createReservation: (reservation) => fetch(
        PROTOCOL_TO_MAIN_PATH +"/carOwner/parkingLot/"+parseInt(reservation.parkingLotId),{
            mode: 'cors',
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({
                "carOwnerId": reservation.carOwnerId,
                "reservedTime": reservation.reservedTime
            })
        }),
    cancelReservation: (reservationId) => fetch(
        PROTOCOL_TO_MAIN_PATH +"/carOwner/reservation/"+reservationId,{
            mode: 'cors',
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({
            })
        }),
    getMyReservation: (carownerId) => fetch(
        PROTOCOL_TO_MAIN_PATH +"/carOwner/"+carownerId,{
            mode: 'cors'
        }),
}
