const initialState = {
    reservationList: [],
    orderList: [],
    filters: []
};

export default (state = initialState, { type, payload}) => {
    switch(type) {
        case "REFRESH":
            return {...state, reservationList: payload}
        case "CREATE_ORDER":
            return {...state,
                orderList: [...state.orderList, payload]}
        case "CREATE_PARKING_LOT_FILTERS":
            return {...state,
                filters: [...state.filters, payload]}
        default:
            return state;
    }
};