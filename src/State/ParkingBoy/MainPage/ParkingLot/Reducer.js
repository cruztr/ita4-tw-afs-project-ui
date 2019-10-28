const initialState = {
    parkingLot: {
        parkingBlocks : []
    },
    allParkingLots : []
};

export default (state = initialState, { type, payload}) => {
    switch(type) {
        case "GET_PARKING_LOT":
            return {...state, 
                parkingLot: state.allParkingLots.find(parkingLot =>parkingLot.name===payload) 
            }
        case "GET_ALL_PARKING_LOTS":
            return {...state, 
                allParkingLots: payload
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