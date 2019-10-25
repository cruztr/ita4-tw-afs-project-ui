export default {
    createPackage: (order) => fetch("http://localhost:8080/orders/parkingLot/"+order.parkingLotID, {
          mode: 'cors',
          method: 'POST',
          headers: new Headers({'Content-Type': 'application/json'}),
          body: JSON.stringify(order)
    })
}