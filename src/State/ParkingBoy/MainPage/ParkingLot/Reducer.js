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
        case "OCCUPY_PARKING_BLOCK":
            return {...state,
                   ...state.parkingLot, parkingBlocks: state.parkingLot.parkingBlocks.map(block => {
                if(block.position == payload){
                    block.status = "OCCUPIED";
                }
                return block;
            })
        }
        default:
            return state;
    }
};