import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Title = ({name, title}) => {
    return ( 

        <Row>
            <Col sm={10} className='mx-auto my-2 text-center text-title'>
                <h1 className='text-capitalize font-weight-bold'>
                    {name} <span className='products'>{title}</span>
                </h1>
            </Col>
        </Row>
     );
}
 
export default Title;