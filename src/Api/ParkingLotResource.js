export default {
    getParkingLot: () => fetch("http://localhost:8080/parkingLot/13", {
        mode: 'cors'
    })
}
  