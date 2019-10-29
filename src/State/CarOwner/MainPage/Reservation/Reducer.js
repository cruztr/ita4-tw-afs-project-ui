const initialState = {
    reservation: {},
    parkingLots: []
};

export default (state = initialState, { type, payload}) => {
    switch(type) {
        case "REFRESH":
            return {...state, parkingLots: payload}
        case "CREATE_RESERVATION":
            return {...state, reservation: payload}
        default:
            return state;
    }
};