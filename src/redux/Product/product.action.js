const INCR = "INCR";
const DECR = "DECR";
let product = {
  product_Name: "APPLE Watch Series 6 GPS 44 mm Blue Aluminium",
  price: 43900,
  qty: 1,
  image:
    "https://rukminim1.flixcart.com/image/224/224/kfeamq80/smartwatch/g/h/4/ios-m00j3hn-a-apple-original-imafvvggyswtz7yu.jpeg?q=90",
};
let incrProductQty = () => {
  //invoke api - product Data
  return { type: INCR, payload: product };
};
let decrProductQty = () => {
  return { type: DECR, payload: product };
};
export { incrProductQty, decrProductQty, INCR, DECR };
