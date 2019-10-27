import {PROTOCOL_TO_MAIN_PATH} from "./Config";

export default {
    login: (credentials) => fetch(
        PROTOCOL_TO_MAIN_PATH +"/parkingBoy/login",{
          mode: 'cors',
          method: 'POST',
          headers: new Headers({'Content-Type': 'application/json'}),
          body: JSON.stringify(credentials)
    })
}
  