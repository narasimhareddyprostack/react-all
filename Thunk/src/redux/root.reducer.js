import {combineReducers} from "redux";
import {CUSTOMER_FEATURE_KEY, customerReducer} from "./customers/customers.reducer";

let rootReducer = combineReducers({
    [CUSTOMER_FEATURE_KEY] : customerReducer
});

export {rootReducer};
