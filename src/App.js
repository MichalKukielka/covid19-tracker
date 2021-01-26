import React, { useState, useEffect } from 'react';
import { FormControl, Select, MenuItem, Card, CardContent } from '@material-ui/core';
import './App.css';
import { sortObjectData } from './util';
import Infobox from './components/Infobox';
import Map from './components/Map';
import Table from './components/Table';
import LineChart from './components/LineChart';

function App() {

  const [countries, setCountries] = useState(['USA', 'Japanese', 'Poland'])
  const [country, setCountry] = useState('worldwide')
  const [countryInfo, setCountryInfo] = useState({})
  const [tableData, setTableData] = useState([])

  useEffect(() => {

    const getCountriesData = async () => {
      await fetch('https://disease.sh/v3/covid-19/countries')
        .then(res => res.json())
        .then(data => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2
          }));
          setCountries(countries);
          setTableData(sortObjectData(data, 'cases'))
        })
    }

    getCountriesData()

    fetch('https://disease.sh/v3/covid-19/all')
    .then(res => res.json())
    .then(data => {
      setCountryInfo(data);
    })

  }, [])

  const onCountryChange = async (e) => {
    const countryCode = e.target.value
    setCountry(countryCode)

    const url = countryCode === 'worldwide' 
    ? `https://disease.sh/v3/covid-19/all`
    : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
          .then(res => res.json())
          .then(data => {
            setCountryInfo(data);
            console.log(data);
          })
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
          <Infobox title="Coronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases} />
          <Infobox title="Recoverd Cases" cases={countryInfo.todayRecovered} total={countryInfo.recovered} />
          <Infobox title="Death Cases" cases={countryInfo.todayDeaths} total={countryInfo.deaths}  />
        </div>

        <Map />
      </div>
      <Card className="app__sidebar">
        <CardContent>
          <h3>Live Cases by Country</h3>
          <Table countries={tableData} casesType="cases"/>
          <h3>Worldwide new cases</h3>
          <LineChart casesType="cases"/>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
