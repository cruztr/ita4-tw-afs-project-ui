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
        case "GET_RESERVATION":
            return {...state, reservation: payload}
        case "CANCEL_RESERVATION":
            return {...state, reservation: {}}
        default:
            return state;
    }
};