import {PROTOCOL_TO_MAIN_PATH} from "./Config";


export default {
    createOrder: (param) => fetch(PROTOCOL_TO_MAIN_PATH +"/parkingBoy/"+param.parkingBoyID
    +"/orders", {
          mode: 'cors',
          method: 'POST',
          headers: new Headers({'Content-Type': 'application/json'}),
          body: JSON.stringify({
              "parkingLotId": param.parkingLotID,
              "plateNumber" : param.plateNumber,
              "parkingBlockPosition": param.parkingBlockPosition,
              "reservation": param.reservation
          })
    }),
    closeOrder: (param) => fetch(PROTOCOL_TO_MAIN_PATH +"/parkingBoy/"+param.parkingBoyID
        +"/orders", {
        mode: 'cors',
        method: 'PATCH',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(param.orderDetails)
    }),
    getOrder: (param) => fetch(PROTOCOL_TO_MAIN_PATH +"/parkingBoy/order", 
    {
        mode: 'cors',
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify({
            "parkingLotId": param.parkingLotId,
            "parkingBlockPosition": param.blockNumber
        })
    }),
    getAllAvailableOrders:() => fetch(PROTOCOL_TO_MAIN_PATH +"/parkingBoy/orders", {
        mode: 'cors',
    })
}