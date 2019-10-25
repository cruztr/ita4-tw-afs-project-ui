import { connect } from "react-redux";
import Login from "../../Components/ParkingBoy/Login/Login.js"

const mapDispatchToProps = dispatch => ({
    updateInputValue: inputValue =>
      dispatch({
        type: "UPDATE_INPUT_VALUE",
        payload: inputValue
    })
});

export default connect(
    null,
    mapDispatchToProps
  )(Login);  