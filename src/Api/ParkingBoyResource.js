import {PORT} from "./Config";

export default {
    login: (credentials) => fetch(
      "http://localhost:"+PORT+"/spark/parkingBoy/login",{
          mode: 'cors',
          method: 'POST',
          headers: new Headers({'Content-Type': 'application/json'}),
          body: JSON.stringify(credentials)
    })
}
  