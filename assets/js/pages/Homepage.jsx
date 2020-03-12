import React from "react";
import  Jumbotron  from "../components/Jumbotron";

const Homepage = (title, buttonText, className) => {
  return ( 
    <>
    <Jumbotron title='Bienvenue chez Mug Plug' buttonText='Découvrez nos Mugs!' className='jumbo-products-homepage'></Jumbotron>
    <Jumbotron title='Rejoignez notre Chat!' buttonText='Participer!' className='jumbo-chat-homepage'></Jumbotron>
    </>
  
 
   );
}
 

export default Homepage;


