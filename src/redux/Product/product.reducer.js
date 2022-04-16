import { INCR, DECR } from "./product.action";
let initialState = {
  product: {},
  qty: 1,
};
let productReducer = (state = initialState, action) => {
  let { type, payload } = action; // object destructuring

  switch (type) {
    case INCR:
      return { ...state.product, product: payload };
    case DECR:
      return { ...state.product, product: payload };
    default:
      return state;
  }
};

export { productReducer };
