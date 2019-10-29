import {PROTOCOL_TO_MAIN_PATH} from "./Config";


export default {
    getLogs: (param) => fetch(PROTOCOL_TO_MAIN_PATH +"/logs/"+ param.userId+"/"+param.userType, {
        mode: 'cors'
    }),
}