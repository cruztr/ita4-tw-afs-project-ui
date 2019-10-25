import { connect } from "react-redux";
import Login from "../../Components/ParkingBoy/Login/Login.js"
import ParkingBoyResource from "../../Api/ParkingBoyResource.js";

const mapDispatchToProps = dispatch => ({
    login: credentials =>
    ParkingBoyResource.login(credentials)
    .then(res => res.json())
      .then(
        res => 
      dispatch({
        type: "LOGIN",
        payload: res
    }))
});

const mapStateToProps = state => ({
    user: state.parkingBoyReducer
 });

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login);  