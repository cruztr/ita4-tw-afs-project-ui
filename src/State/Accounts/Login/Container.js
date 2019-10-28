import { connect } from "react-redux";
import Login from "../../../Components/Accounts/Login/Login";
import HomepageResources from "../../../Api/HomePageResources";
import CarOwnerResources from "../../../Api/CarOwnerResources"

const mapDispatchToProps = dispatch => ({
    loginParkingBoy : credentials => {
    HomepageResources.loginParkingBoy(credentials)
        .then(res => res.json())
        .then(res =>
            dispatch({
                type: "LOGIN",
                payload: res
            }))
    },

    loginCarOwner : (credentials) => {
    HomepageResources.loginCarOwner(credentials)
        .then(res => res.json())
        .then(res =>
            dispatch({
                type: "LOGIN",
                payload: res
            }))
    },

    checkOrder : (orderId) => {
    HomepageResources.checkOrder(orderId)
        .then(res => res.json())
        .then(res =>
            dispatch({
                type: "CHECKORDER",
                payload: res
            }))
    },

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
    accounts: state.accountsReducer
 });

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login);  