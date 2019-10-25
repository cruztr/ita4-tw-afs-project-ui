const initialState = {
    parkingBoy : {},
    isLoggedIn: false
};

export default (state = initialState, action) => {
    switch (action.type) {
      case "LOGIN":

        return {...state, parkingBoy: action.payload};
    default:
        return state;
    }
};