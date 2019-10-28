const initialState = {
    parkingLot: {
        parkingBlocks : []
    }
};

export default (state = initialState, { type, payload}) => {
    switch(type) {
        case "GET_PARKING_LOT":
            return {...state, 
                parkingLot: payload
            }
        default:
            return state;
    }
};