import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import { casesTypeColors } from '../utils/theme';
import L from "leaflet";
import { MapContainer, Circle, useMap } from 'react-leaflet';
import numeral from 'numeral';

import { MapWrapper, StyledPopup, PopupFlag, PopupName, PopupCases, PopupRecovered, PopupDeaths } from './styled/TrackerMap';

export const showDataOnMap = (data, casesType, currentTheme, darkMode) => {
    console.log(currentTheme.elementBackgroundColor)
    return data.map(country => (
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
            <StyledPopup currentTheme={currentTheme} className={darkMode ? `darkmode` : `lightmode`}>
                <PopupFlag currentTheme={currentTheme} flag={country.countryInfo.flag} style={{ backgroundImage: `url(${country.countryInfo.flag})` }} />
                <PopupName currentTheme={currentTheme}>
                    {country.country}
                </PopupName>
                <PopupCases currentTheme={currentTheme}>
                    Cases: {numeral(country.cases).format("0,0")}
                </PopupCases>
                <PopupRecovered currentTheme={currentTheme}>
                    Recovered: {numeral(country.recovered).format("0,0")}
                </PopupRecovered>
                <PopupDeaths currentTheme={currentTheme}>
                    Deaths: {numeral(country.deaths).format("0,0")}
                </PopupDeaths>
            </StyledPopup>
        </Circle>
    ))
}

function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}

function MyTileLayer({ darkMode }) {
    const map = useMap();
    var dark = L.tileLayer(
        "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
    );
    const normal = L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    );
    map.addLayer(darkMode ? dark : normal);
    return null;
}

function TrackerMap({ darkMode, countries, casesType, center, zoom }) {

    const currentTheme = useContext(ThemeContext);

    return (
        <MapWrapper currentTheme={currentTheme}>
            <MapContainer center={center} zoom={zoom}>
                <ChangeView center={center} zoom={zoom} />
                <MyTileLayer
                    darkMode={darkMode}
                />
                {showDataOnMap(countries, casesType, currentTheme, darkMode)}
            </MapContainer>
        </MapWrapper>
    )
}

export default TrackerMap
