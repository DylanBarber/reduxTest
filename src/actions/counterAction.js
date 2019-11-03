import { COUNT_UP, COUNT_DOWN } from "./types";

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