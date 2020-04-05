import React from 'react'; 
import Card from './Card.js';

const CardList =({robots})=>{
    return (
        <div>
            {
                robots.map((user,i)=>{
                return (
                    <Card 
                    key={i}  //keep track of each child element in DOM 
                    id={robots[i].id} 
                    username= {robots[i].username}
                    name={robots[i].name} 
                    email={robots[i].email}
                    phone={robots[i].phone}
                    address={robots[i].address}
                    company={robots[i].company}
                    website={robots[i].website}
                    />
                    );
                })
            }
        </div>
    );
}

export default CardList; 