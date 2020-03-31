import React from "react";
import Payment from "../components/Payment";
import { Link, useHistory } from "react-router-dom";

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
      <Link to="" className="previous" onClick={() => history.goBack()}>
        &#8249; Previous
      </Link>
      <Payment></Payment>
    </>
  );
};

export default PaymentPage;
