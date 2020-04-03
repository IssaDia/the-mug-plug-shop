import React from 'react';


const SearchBox = props => {


    return ( 
        <div>
            <input type='text' onChange={props.handleInput} placeholder=' ex :Mug 3'></input>
        </div>
     );
}
 
export default SearchBox;