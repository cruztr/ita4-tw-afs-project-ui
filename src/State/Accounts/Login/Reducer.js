const initialState = {
    account : {},
    order: {},
    isLoggedIn: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {...state,
                account: action.payload,
                order: ""};
        case "CHECKORDER" :
            return {...state,
                    order: action.payload
            }
        default:
            return state;
        }
};