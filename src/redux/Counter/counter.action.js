//create Action Types
let COUNTERINCR = "COUNTERINCR";
let COUNTERDECR = "COUNTERDECR";
let incrAction = () => {
  return { type: COUNTERINCR };
};
let decrAction = () => {
  return { type: COUNTERDECR };
};

export { incrAction, decrAction, COUNTERINCR, COUNTERDECR };
