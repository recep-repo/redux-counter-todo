// import {INCREASE_COUNTER, RESET_COUNTER, DECREASE_COUNTER} from '../types/counterTypes'

// const initialState = {
//     counter:0
// }

// const counterReducer = (state=initialState, action) => {
//     switch (action.type) {
//         case INCREASE_COUNTER:
//             return {
//                 counter : state.counter + 1
//             }
//         case DECREASE_COUNTER:
//             return {
//                 counter: state.counter - 1
//             }
//         case RESET_COUNTER:
//             return {
//                 counter : 0
//             }
//         default:
//             return state
//     }
// }

// export default counterReducer

import { INCREASE, DECREASE, RESET } from "../types/counterTypes"

const initialState = {
    counter : 0
}


const counterReducer = (state=initialState, action) => {
    switch (action.type) {
        case INCREASE:
            return{
                counter: state.counter + 1
            }
        case DECREASE:
            return{
                counter: state.counter - 1
            }   
        case RESET:
            return{
                counter: 0
            }
        default:
            return state
    }




}

export default counterReducer