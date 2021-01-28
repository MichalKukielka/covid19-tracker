import React, { useState, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext'
import { Card, CardContent } from '@material-ui/core';
import './styles/App.css';
import 'leaflet/dist/leaflet.css';
import { sortObjectData } from '../utils/utils';

import Header from './Header';
import Stats from './Stats';
import TrackerMap from './TrackerMap';
import Table from './Table';
import LineChart from './LineChart';

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [countries, setCountries] = useState(['USA', 'Japanese', 'Poland']);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState('cases');


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
          setMapCountries(data)
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


    const url = countryCode === 'worldwide'
      ? `https://disease.sh/v3/covid-19/all`
      : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then(res => res.json())
      .then(data => {
        setCountry(countryCode)
        setCountryInfo(data);
        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
      })
  }

  // W PLIKU APP O TEAMCIE DECYDUJE STATE

  return (
    <ThemeContext.Provider value={darkMode}>
      <div className="app">
        <div className="app__main">
          <Header countries={countries} onCountryChange={onCountryChange} country={country} darkMode={darkMode} setDarkMode={setDarkMode} />
          <Stats countryInfo={countryInfo} casesType={casesType} setCasesType={setCasesType} />
          <TrackerMap countries={mapCountries} center={mapCenter} zoom={mapZoom} casesType={casesType} />
        </div>
        <Card className="app__sidebar">
          <CardContent>
            <h3>Live Cases by Country</h3>
            <Table countries={tableData} casesType={casesType} />
            <h3 className="app__secondHeader">Worldwide new {casesType}</h3>
            <LineChart casesType={casesType} />
          </CardContent>
        </Card>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
