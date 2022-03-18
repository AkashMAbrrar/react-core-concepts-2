import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country);
    const { area, region, population, name, flags } = props.country;
    return (
        <div className='country'>
            <h2>Country Name: {name.common}</h2>
            <h3>Population: {population}</h3>
            <p>Region:{region}</p>
            <p><small>Area: {area}</small></p>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;