import {FETCH_CUSTOMER_FAILURE, FETCH_CUSTOMER_REQUEST, FETCH_CUSTOMER_SUCCESS} from "./customers.actionTypes";

export const CUSTOMER_FEATURE_KEY = 'customers';

let initialState = {
    loading : false,
    customers : [],
    errorMessage : ''
};

let customerReducer = (state = initialState , action) => {
    let {type , payload} = action;
    switch(type) {
        case FETCH_CUSTOMER_REQUEST :
            return {
                ...state,
                loading : true
            };
        case FETCH_CUSTOMER_SUCCESS :
            return {
                ...state,
                loading : false,
                customers: payload
            };
        case FETCH_CUSTOMER_FAILURE :
            return {
                ...state,
                loading : false,
                errorMessage: payload
            };
        default : return  state;
    }
};
export {customerReducer};
