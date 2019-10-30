const initialState = {
    status: "",
    reservation : {},
    carOwner : {}
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
        default:
            return state;
    }
};