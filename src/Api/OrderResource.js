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
              "parkingBlockPosition" : param.parkingBlockPosition
          })
    }),
    closeOrder: (param) => fetch(PROTOCOL_TO_MAIN_PATH +"/parkingBoy/"+param.parkingBoyID
        +"/orders/"+param.orderId, {
        mode: 'cors',
        method: 'PATCH',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify({
            "parkingBoyId": param.parkingBoyID,
            "orderId" : param.orderId
        })
    })
}