const initialState = {
    account : {},
    order: {},
    signUpCredentials: {},
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
        case "SIGNUP":
            return {...state, signUpCredentials: action.payload};
        default:
            return state;
        }
};