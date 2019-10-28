const initialState = {
    orderList: []
};

export default (state = initialState, { type, payload}) => {
    switch(type) {
        case "CREATE_ORDER":
            return {...state, 
                orderList: [...state.orderList, payload]}
        default:
            return state;
    }
};