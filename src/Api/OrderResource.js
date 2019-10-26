export default {
    createOrder: (param) => fetch("http://localhost:8080/spark/parkingBoy/"+param.parkingBoyID
    +"/orders", {
          mode: 'cors',
          method: 'POST',
          headers: new Headers({'Content-Type': 'application/json'}),
          body: JSON.stringify({
              "parkingLotId": param.parkingLotID,
              "plateNumber" : param.plateNumber
          })
    })
}