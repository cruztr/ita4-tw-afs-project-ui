import { connect } from "react-redux";
import Signup from "../../../Components/CarOwner/Signup/Signup";
import CarOwnerResources from "../../../Api/CarOwnerResources"

const mapDispatchToProps = dispatch => ({
    signUp: credentials => {
        CarOwnerResources.signUp(credentials)
        .then(res => res.json())
          .then(
            res =>
          dispatch({
            type: "SIGNUP",
            payload: res
        }))
    }

});

const mapStateToProps = state => ({
    user: state.signUpCredentials
 });

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Signup);