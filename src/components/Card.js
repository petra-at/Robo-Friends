import React from 'react';

const Card =({name, email ,username, id,phone,website,address,company})=>{
   
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <h1>{username}</h1>
            <div>
                <img alt="Robot" src={`https://robohash.org/${id}?size=200x200;bgset=bg1;ignoreext=false`}/>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                    <p>{phone}</p>
                    <p>{website}</p>
                    <p>{address.city}</p>
                    <p>{`${company.name} ~ ${company.catchPhrase}`}</p>
                </div>
            </div>
        </div>
    );
}
export default Card; 