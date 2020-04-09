import React, {useEffect} from 'react';


const SearchBox = props => {

    useEffect(() => {
        var searchBox = document.querySelectorAll('.search-box input[type="text"] + span');

        searchBox.forEach((elm) => {
            elm.addEventListener('click', () => {
                elm.previousElementSibling.value = '';
            });
        });
    }, [])


    return ( 
       
        <div className='search-box'>
        <input type='text' onChange={props.handleInput} placeholder=' ex :Mug 3'></input>
        <span></span>
    </div>
     );
}
 
export default SearchBox;