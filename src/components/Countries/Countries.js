import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div className='countries-container'>
            <h1>Hello From Countries Of The Plannet: {countries.length}</h1>
            {
                countries.map(country => <Country
                    country={country}
                // name={country.name.common}
                // population={country.population}
                // area={country.area}
                // region={country.region}
                // flags={country.flags}


                ></Country>)
            }

        </div>
    );
};

export default Countries;



// Super Charged Interviewee Club(SCIC)