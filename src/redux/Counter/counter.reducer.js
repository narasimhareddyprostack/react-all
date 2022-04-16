//import action types
import { COUNTERINCR, COUNTERDECR } from "./counter.action";
let counterKey = "counter";
let couterState = {
  counter: 0,
};
let counterReducer = (state = couterState, action) => {
  console.log(action);
  console.log(action.type);
  let { type } = action;
  switch (type) {
    case COUNTERINCR:
      return { counter: state.counter + 1 };
    case COUNTERDECR:
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};
export { counterReducer, counterKey };
