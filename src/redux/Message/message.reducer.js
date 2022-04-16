//import action type
import { GM, GN } from "./message.action";

let defaultState = {
  message: "Hello,",
};
let messageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GM:
      return { message: "Good Morning" };
    case GN:
      return { message: "Good Night" };
    default:
      return state;
  }
};
export { messageReducer };
