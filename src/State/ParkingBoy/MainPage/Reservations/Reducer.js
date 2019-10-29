const initialState = {
    reservationList: [],
    orderList: []
};

export default (state = initialState, { type, payload}) => {
    switch(type) {
        case "REFRESH":
            return {...state, reservationList: payload}
        case "CREATE_ORDER":
            return {...state,
                orderList: [...state.orderList, payload]}
        default:
            return state;
    }
};