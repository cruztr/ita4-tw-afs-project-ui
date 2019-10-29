const initialState = {
    orderListDetails : []
};

export default (state = initialState, { type, payload}) => {
    switch(type) {
        case "GET_ORDERS":
            return {...state,
                orderListDetails: payload
            }
        default:
            return state;
    }
};