import React from "react";
import  Jumbotron  from "../components/Jumbotron";

const Homepage = (title, buttonText, className) => {
  return ( 
    <>
    <Jumbotron title='Bienvenue chez Mug Plug' text='Venez découvrir nos produits en exclusivité' buttonText='Découvrez nos Mugs!' link='products' className='jumbo-products-homepage'></Jumbotron>
    <Jumbotron title='Rejoignez notre Chat!'text='Venez découvrir notre chat et discuter de poésie et citations' buttonText='Participer!' className='jumbo-chat-homepage'></Jumbotron>
    </>
  
 
   );
}
 

export default Homepage;


