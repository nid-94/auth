// usage of combine reducer
import { combineReducers } from "redux";
import userReducer from "./user";

const rootReducer = combineReducers({
    userReducer,
});
export default rootReducer;
