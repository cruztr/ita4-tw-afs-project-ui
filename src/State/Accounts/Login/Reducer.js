const initialState = {
    account : {},
    order: {},
    signUpCredentials: {},
    typeOfUser: "",
    isLoggedIn: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {...state,
                account: action.payload.body,
                typeOfUser: action.payload.type,
                order: ""};
        case "CHECKORDER" :
            return {...state,
                    order: action.payload,
                    account : {}
            }
        case "SIGNUP":
            return {...state,
                signUpCredentials: action.payload,
                account: null};
        default:
            return state;
        }
};