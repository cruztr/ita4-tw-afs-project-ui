export default {
    login: (credentials) => fetch(
      "http://localhost:8080/parkingBoy/login",{
          mode: 'cors',
          method: 'POST',
          headers: new Headers({'Content-Type': 'application/json'}),
          body: JSON.stringify(credentials)
    })
}
  