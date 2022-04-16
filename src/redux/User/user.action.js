import Axios from 'axios'
const FETCH_CUST_REQ = 'FETCH_CUST_REQ'
const FETCH_CUST_SUCCESS = 'FETCH_CUST_SUCCESS'
const FETCH_CUST_FAILURE = 'FETCH_CUST_FAILURE'

let fetchCustomerReq = () => {
    return { type: FETCH_CUST_REQ }
}
let fetchCustomerSuccess = (user) => {
    console.log(user, "Test 124");
    return {
        type: FETCH_CUST_SUCCESS,
        payload: user
    }
}
let fetchCustomerFailure = () => {
    return { type: FETCH_CUST_FAILURE }
}
let fetchCustomersAction = () => {
    return (dispatch) => {
        dispatch(fetchCustomerReq());
        Axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
            dispatch(fetchCustomerSuccess(response.data))
        }).catch((err) => {
            dispatch(fetchCustomerFailure(err))
        })

    }
}
export { fetchCustomersAction, FETCH_CUST_REQ, FETCH_CUST_SUCCESS, FETCH_CUST_FAILURE }