import React from "react";
import Jumbotron from "../components/Jumbotron";
import Featured from "../components/Featured";

{
  /*Homepage*/
}

const Homepage = () => {
  return (
    <>
      <Featured></Featured>
      <Jumbotron
        title="Join our Chat!"
        text="Come join people in our chat to talk about quotes and poetry"
        buttonText="Participate!"
        link=""
        signal="Coming soon!"
        className="jumbo-chat-homepage"
      ></Jumbotron>
    </>
  );
};

export default Homepage;
