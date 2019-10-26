const initialState = {
    reservationList: [],
    filterType: 'all'
};

export default (state = initialState, { type, payload}) => {
    switch(type) {
        case "REFRESH":
            return {...state, reservationList: payload}
        default:
            return state;
    }
};