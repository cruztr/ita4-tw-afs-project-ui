const initialState = {
    signUpCredentials : {}
};

export default (state = initialState, action) => {
    switch (action.type) {
      case "SIGNUP":
        return {...state, parkingBoy: action.payload};
    default:
        return state;
    }
};