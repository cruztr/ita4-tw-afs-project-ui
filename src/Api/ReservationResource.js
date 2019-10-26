export default {

    getAllReservation: () => fetch("http://localhost:8080/sparks/parkingBoy/reservations",
        {
            headers: new Headers({'Content-Type': 'application/json'}),
            mode: 'cors'
        }),
}