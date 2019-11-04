import { COUNT_UP, COUNT_DOWN, RESET_COUNT } from "../actions/types";

const initialState = {
    counter: 0
}

export default (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case COUNT_UP:
            return {
                ...state,
                counter: state.counter + 1
            }
        case COUNT_DOWN:
            return {
                ...state,
                counter: state.counter - 1
            }
        case RESET_COUNT:
            return {
                ...state,
                counter: 0
            }
        default:
            return state
    }
}