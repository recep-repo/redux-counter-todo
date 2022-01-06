
import { DECREASE, INCREASE, RESET } from "../types/counterTypes"


export const increase = () => {
    return{
        type: INCREASE
    }
}
export const decrease = () => {
    return{
        type: DECREASE
    }
}
export const reset = () => {
    return{
        type: RESET
    }
}