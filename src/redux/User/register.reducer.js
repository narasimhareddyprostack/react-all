
import {REGISTER_USER} from './register.action'
const registerFeatureKey='register'
let initialState = {
    username:"",
    email:"",
    password:"",
    terms:false
}
let registerUserReducer = (state = initialState, action)=>{
    let {type, payload} = action
    switch(type){
        case REGISTER_USER:
            return {
                ...state, ...payload
            }
        default:
            return state

    }
}
export {registerUserReducer,registerFeatureKey}