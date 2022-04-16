//how to combine Redux Reducer?
import { combineReducers } from "redux";
import { counterReducer, counterKey } from "./Counter/counter.reducer";
import { messageReducer } from "./Message/message.reducer";
import { productReducer } from "./Product/product.reducer";
import {registerUserReducer,registerFeatureKey } from './User/register.reducer'
import { userReducer} from './User/user.reducer'

let rootReducer = combineReducers({
  [counterKey]: counterReducer,
  message: messageReducer,
  product: productReducer,
  [registerFeatureKey]:registerUserReducer,
  users: userReducer
});
export { rootReducer };
