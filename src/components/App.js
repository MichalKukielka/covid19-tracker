import React, { useState, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext'
import { FormControl, Select, MenuItem, Card, CardContent } from '@material-ui/core';
import './styles/App.css';
import 'leaflet/dist/leaflet.css';
import { sortObjectData, prettyPrintData } from '../utils/utils';
import Infobox from './Infobox';
import TrackerMap from './TrackerMap';
import Table from './Table';
import LineChart from './LineChart';
import { ThemeSwitch } from './ThemeSwitch.js'

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
              <div className="app__header">
                <h1>Covid19-Tracker</h1>
                <div className="app__select">
                  <FormControl>
                      <Select
                        className="app__dropdown"
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
                <div>
                  <ThemeSwitch 
                    checked={darkMode}
                    onChange={() => setDarkMode(prevState => !prevState)}
                  />
                </div>
              </div>

              <div className="app__stats">
                <Infobox 
                  title="Coronavirus Cases"
                  type={"cases"}
                  cases={prettyPrintData(countryInfo.todayCases)} 
                  total={prettyPrintData(countryInfo.cases)} 
                  onClick={(e) => setCasesType("cases")}
                  active={casesType==='cases'}
                />
                <Infobox 
                  title="Recoverd Cases"
                  type={"recovered"}
                  cases={prettyPrintData(countryInfo.todayRecovered)} 
                  total={prettyPrintData(countryInfo.recovered)} 
                  onClick={(e) => setCasesType("recovered")}
                  active={casesType==='recovered'} 
                />
                <Infobox 
                  title="Death Cases"
                  type={"deaths"}
                  cases={prettyPrintData(countryInfo.todayDeaths)} 
                  total={prettyPrintData(countryInfo.deaths)} 
                  onClick={(e) => setCasesType("deaths")}
                  active={casesType==='deaths'}
                />
              </div>

              <TrackerMap countries={mapCountries} center={mapCenter} zoom={mapZoom} casesType={casesType} />
            </div>
            <Card className="app__sidebar">
              <CardContent>
                <h3>Live Cases by Country</h3>
                <Table countries={tableData} casesType={casesType}/>
                    <h3 className="app__secondHeader">Worldwide new {casesType}</h3>
                <LineChart casesType={casesType} />
              </CardContent>
            </Card>
          </div>
    </ThemeContext.Provider>
 );
}

export default App;
