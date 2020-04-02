import React from "react";
import Payment from "../components/Payment";
import { Link, useHistory } from "react-router-dom";
import Previous from "../components/Previous";

{
  /*Page with Payment Widget*/
}

const PaymentPage = () => {
  {
    /*get url of previous page*/
  }

  let history = useHistory();

  return (
    <>
      <Previous text='Previous'></Previous>
      <Payment></Payment>
    </>
  );
};

export default PaymentPage;
