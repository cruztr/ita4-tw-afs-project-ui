const initialState = {
    orderDetails : {}
};

export default (state = initialState, { type, payload}) => {
    switch(type) {
        case "GET_ORDER":
            return {...state, 
                orderDetails: payload
            }
        default:
            return state;
    }
};