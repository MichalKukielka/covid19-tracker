import React, { useState, useEffect } from 'react';
import { FormControl, Select, MenuItem, Card, CardContent } from '@material-ui/core';
import './App.css';
import Infobox from './components/Infobox';
import Map from './components/Map';

function App() {

  const [countries, setCountries] = useState(['USA', 'Japanese', 'Poland'])
  const [country, setCountry] = useState('worldwide')

  useEffect(() => {

    const getCountriesData = async () => {
      await fetch('https://disease.sh/v3/covid-19/countries')
        .then(res => res.json())
        .then(data => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2
          }))
          console.log(countries)
          setCountries(countries)
        })
    }

    getCountriesData()
  }, [])

  const onCountryChange = async (e) => {
    await setCountry(e.target.value)
  }

  return (
    <div className="app">
      <div className="app__main">
        <div className="app__header">
          <h1>Cobvid19-Tracker</h1>
          <FormControl>
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              <MenuItem key="worldwide" value="worldwide">
                Worldwide
            </MenuItem>
              {/* Loop through countries */}
              {countries.map(country => (
                <MenuItem key={country.name} value={country.value}>
                  {country.name}
                </MenuItem>
              ))}

            </Select>
          </FormControl>
        </div>

        <div className="app__stats">
          <Infobox title="Coronavirus Cases" cases="+2000" total="2B" />
          <Infobox title="Recoverd Cases" cases="+2000" total="1B" />
          <Infobox title="Death Cases" cases="+2000" total=".5B" />
        </div>

        <Map />
      </div>
      <Card className="app__sidebar">
        <CardContent>
          <h3>Live Cases by Country</h3>
          <h3>Worldwide new cases</h3>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
