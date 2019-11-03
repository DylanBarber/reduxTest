import { combineReducers } from "redux"; 
import counterReducer from "./counterReducer";

export default combineReducers({
    countUp: counterReducer,
    countDown: counterReducer
});