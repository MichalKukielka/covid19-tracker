import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { MapContainer, TileLayer, Circle, Popup, useMap, MapConsumer } from 'react-leaflet';
import numeral from 'numeral';

import { MapWrapper, PopupFlag, PopupName, PopupCases, PopupRecovered, PopupDeaths } from './styled/TrackerMap';

const casesTypeColors = {
    cases: {
      hex: "#E984A2",
      rgb: "rgb(233, 132, 162)",
      half_op: "rgba(233, 132, 162, 0.5)",
      multiplier: 200,
    },
    recovered: {
      hex: "#B9CC95",
      rgb: "rgb(185, 204, 149)",
      half_op: "rgba(185, 204, 149, 0.5)",
      multiplier: 300,
    },
    deaths: {
      hex: "#A2DCEE",
      rgb: "rgb(162, 220, 238)",
      half_op: "rgba(162, 220, 238, 0.5)",
      multiplier: 1000,
    },
  };


export const showDataOnMap = (data, casesType) => 
    data.map(country => (
            <Circle
                key={country.country}
                pathOptions={{
                    color: casesTypeColors[casesType].hex,
                    fillColor: casesTypeColors[casesType].hex,
                }}
                center={[country.countryInfo.lat, country.countryInfo.long]}
                fillOpacity={0.4}
                radius={
                Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
                }
            >
            <Popup>
                <PopupFlag style={{backgroundImage: `url(${country.countryInfo.flag})`}} />
                <PopupName>
                    {country.country}
                </PopupName>                   
                <PopupCases>
                    Cases: {numeral(country.cases).format("0,0")}
                </PopupCases>
                <PopupRecovered>
                    Recovered: {numeral(country.recovered).format("0,0")}
                </PopupRecovered>
                <PopupDeaths>
                    Deaths: {numeral(country.deaths).format("0,0")}
                </PopupDeaths>
            </Popup>
        </Circle>
    ))

function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}   

function TrackerMap({ darkMode, countries, casesType, center, zoom}) {

    const currentTheme = useContext(ThemeContext);
    const mapTheme = darkMode ? `https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png` : `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`;

    return (
        <MapWrapper currentTheme={currentTheme}>
            <MapContainer center={center} zoom={zoom}>
                <ChangeView center={center} zoom={zoom} />  

                <TileLayer 
                    url={mapTheme}
                />
                {showDataOnMap(countries, casesType)}
            </MapContainer>
        </MapWrapper>
    )
}

export default TrackerMap
