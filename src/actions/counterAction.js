import { COUNT_UP, COUNT_DOWN, RESET_COUNT } from "./types";

export const countUp = () => dispatch => {
    dispatch({
        type: COUNT_UP,
        //payload: someData <-- would go here
    })
}

export const countDown = () => dispatch => {
    dispatch({
        type: COUNT_DOWN,
        //payload: someData <-- would go here
    })
}

export const resetCount = () => dispatch => {
    dispatch({
        type: RESET_COUNT,
        //payload: someData <-- would go here
    })
}