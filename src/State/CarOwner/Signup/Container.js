import { connect } from "react-redux";
import Signup from "../../../Components/CarOwner/Signup/Signup";

const mapDispatchToProps = dispatch => ({
    // signUp: credentials =>
    // CarOwnerResources.login(credentials)
    // .then(res => res.json())
    //   .then(
    //     res =>
    //   dispatch({
    //     type: "LOGIN",
    //     payload: res
    // }))
});

const mapStateToProps = state => ({
    user: state.signUpCredentials
 });

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Signup);