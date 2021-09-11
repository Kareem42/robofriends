import React from 'react';
import Card from './Card';

// If you need to display a large list of items, use map instead of a forEach loop
const CardList = ({ robots }) => {
  return (
    <div>
      { 
       robots.map((user, i) => {
        return ( 
           <Card 
            key={ i } 
            id={ robots[i].id } 
            name={ robots[i].name } 
            email={ robots[i].email } 
            />
          )}
        )}
    </div>
  );
}
export default CardList;

// Key prop should have something that doesn't change. For example, index (or i) could change if array items get moved. So a better key in this case would be something unique like id.