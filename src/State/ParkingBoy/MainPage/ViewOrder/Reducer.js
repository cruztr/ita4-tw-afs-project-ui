import swal from "sweetalert";
const initialState = {
    orderListDetails : [],
    status: null
};

export default (state = initialState, { type, payload}) => {
    switch(type) {
        case "CLOSE_ORDER":
            if(payload.code === 200){
                return {
                    ...state,
                    status: true
                }
            }
            else{
                return {
                    ...state,
                    status: false
                }
            }
        case "GET_ORDERS":
            return {...state,
                orderListDetails: payload,
                status:null
            }
        default:
            return state;
    }
};