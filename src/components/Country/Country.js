import React from 'react';
import './Country.css'

const Country = (props) => {
   const {area, region, name, flags, capital,currencies} = props.country;

    return (
        <div className='country bg-warning'>
            <h2>Name: {name.common}</h2>
            <h5>Capital: {capital}</h5>
            {/* <h6>Currency : {currencies.name}</h6> */}
            {/* <h5>Languages: {languages}</h5> */}
            <img src={flags.png} alt="" />
            <p>Area: {area}</p> 
            <p><small>Region: {region}</small></p>
            
        </div>
    );
};

export default Country;