import React from 'react';
import FormAuth from '../components/FormAuth';
import { Container } from "react-bootstrap";



const Connexion = () => {
    return ( 

        <Container className='connexion-container'>
        <h1>Connexion</h1>
        <FormAuth></FormAuth>
        </Container>
     );
}
 
export default Connexion;