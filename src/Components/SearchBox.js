import React from "react";

// Using a deconstructor here allows me to grab the props object and grab the properties.
const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='pa2'>
        <input 
            className='pa3 ba b--green bg-lightest-blue'
            type='search' 
            placeholder='search robots' 
            onChange = {searchChange}
        />   
        </div>
    );
}

export default SearchBox;