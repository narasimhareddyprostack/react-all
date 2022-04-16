import React from "react";

function Message() {
  let emp_No = 101;
  let emp_Name = "Kavitha";
  let loc = ["Chennai", "Noida", "Kolkata", "Kochi"];
  let productInfo = {
    productName: "Iphone 5s",
    price: 5000,
  };
  return (
    <div>
      <h1> Employee Number: {emp_No}</h1>
      <h1> Employee Name: {emp_Name}</h1>

      <h1> Employee Location: {loc[0]}</h1>
      <h1>Product Info:{productInfo.productName}</h1>
    </div>
  );
}

export default Message;
