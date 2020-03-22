import React from "react";
import Jumbotron from "../components/Jumbotron";
import Featured from "../components/Featured";

const Homepage = () => {
  return (
    <>
      <Jumbotron
        title="Welcome to Mug Plug"
        text="Come discover our products in exclusivity"
        buttonText="Check our Mugs!"
        link="products"
        className="jumbo-products-homepage"
      ></Jumbotron>

      <Featured></Featured>
      <Jumbotron
        title="Join our Chat!"
        text="Come join people in our chat to talk about quotes and poetry"
        buttonText="Participate!"
        className="jumbo-chat-homepage"
      ></Jumbotron>
    </>
  );
};

export default Homepage;
