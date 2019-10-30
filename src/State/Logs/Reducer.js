const initialState = {
    logs: []
};

export default (state = initialState, { type, payload}) => {
    switch(type) {
        case "REFRESH":
            return {...state, logs: payload}
        case "GET_LOGS":
            return {...state,
                logs: payload
            }
        default:
            return state;
    }
};