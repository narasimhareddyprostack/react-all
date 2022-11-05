import {FETCH_CUSTOMER_FAILURE, FETCH_CUSTOMER_REQUEST, FETCH_CUSTOMER_SUCCESS} from "./customers.actionTypes";
import Axios from "axios";

let fetchCustomerRequest = () => {
    return {
        type : FETCH_CUSTOMER_REQUEST
    }
};

let fetchCustomerSuccess = (customers) => {
    return {
        type : FETCH_CUSTOMER_SUCCESS,
        payload : customers
    }
};

let fetchCustomerFailure = (error) => {
    return {
        type : FETCH_CUSTOMER_FAILURE,
        payload : error
    }
};

// special Action
let fetchCustomers = () => {
    return (dispatch) => {
        dispatch(fetchCustomerRequest());
        Axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            dispatch(fetchCustomerSuccess(response.data));
        }).catch((error) => {
            dispatch(fetchCustomerFailure(error))
        });
    }
};
export {fetchCustomers};
