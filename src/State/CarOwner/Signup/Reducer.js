const initialState = {
    signUpCredentials : {}
};

export default (state = initialState, action) => {
    switch (action.type) {
      case "SIGNUP":
        return {...state, carOwner: action.payload};
    default:
        return state;
    }
};