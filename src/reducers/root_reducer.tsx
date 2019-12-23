import UserReducer from "./user_reducer";
import { combineReducers } from "redux";


const RootReducer = combineReducers({
    UserReducer,
});

export default RootReducer;