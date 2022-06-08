import { FETCH_CUST_REQ, FETCH_CUST_SUCCESS, FETCH_CUST_FAILURE } from './user.action'
let initialState = {
    users: [],
    loading: false,
    errMessage: {}
}
let userReducer = (state = initialState, action) => {

    let { type, payload } = action;//Objec destructruing
    console.log(payload, "Test 123")
    console.log(type, "Test Type")
    switch (type) {
        case FETCH_CUST_REQ:
            return {
                ...state, loading: true
            }
        case FETCH_CUST_SUCCESS:
            console.log("Test Case section")
            return {
                users: payload,
                loading: false
            }
        case FETCH_CUST_FAILURE:
            return {
                ...state, loading: false, errMessage: payload
            }
        default:
            return state;
    }
}
export { userReducer }