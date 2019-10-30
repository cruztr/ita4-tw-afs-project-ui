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
        case "UPDATE_PARKING_BLOCK":
            return {allParkingLots: payload.parkingLots,
                 parkingLot:payload.parkingLot
        }
        case "CLEAR_PARKING_LOT":
            return {...state,
                parkingLot: {parkingBlocks:[]}
            }
        default:
            return state;
    }
};