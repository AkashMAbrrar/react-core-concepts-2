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
        <div>
            <h1>Hello From Countries Of The Plannet: {countries.length}</h1>

            <div className='countries-container'>
                {
                    countries.map(country => <Country
                        country={country}
                        key={country.cca3}
                    // name={country.name.common}
                    // population={country.population}
                    // area={country.area}
                    // region={country.region}
                    // flags={country.flags}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;



// Super Charged Interviewee Club(SCIC)