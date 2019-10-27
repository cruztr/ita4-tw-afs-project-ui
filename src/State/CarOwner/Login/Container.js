import { connect } from "react-redux";
import Login from "../../../Components/CarOwner/Login/Login.js";
import CarOwnerResources from "../../../Api/CarOwnerResources";

const mapDispatchToProps = dispatch => ({
    login: credentials =>
    CarOwnerResources.login(credentials)
    .then(res => res.json())
      .then(
        res => 
      dispatch({
        type: "LOGIN",
        payload: res
    }))
});

const mapStateToProps = state => ({
    user: state.loginReducer
 });

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login);  