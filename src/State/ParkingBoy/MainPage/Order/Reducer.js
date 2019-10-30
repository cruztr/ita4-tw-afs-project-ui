const initialState = {
    status: "",
    reservation : null,
    carOwner : {},
    orderList: []
};

export default (state = initialState, { type, payload}) => {
    switch(type) {
        case "SET_STATUS":
                return {...state, 
                    status: payload}
        case "GET_RESERVATION":
                return {...state, 
                    reservation: payload}
        case "GET_CAR_OWNER":
                return {...state, 
                    carOwner: payload}
        case "CREATE_ORDER":
            return {...state, 
                orderList: [...state.orderList, payload]}
        default:
            return state;
    }
};