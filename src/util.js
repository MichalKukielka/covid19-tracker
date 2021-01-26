import React from 'react';
import numeral from 'numeral';
import { Circle, Popup } from 'react-leaflet';

const casesTypeColors = {
    cases: {
        hex: "#CC1034",
        rgb: "rgb(204, 16, 52)",
        multiplier: 25000,
    },
    recovered: {
        hex: "#7dd71d",
        rgb: "rgb(125, 215, 29)",
        multiplier: 35000,
    },
    deaths: {
        hex: "#fb4443",
        rgb: "rgb(251, 68, 67)",
        multiplier: 1200000,
    },
};

export const sortObjectData = (data, key) => {
    const sortedData = [...data]
    return sortedData.sort((a, b) => a[key] > b[key] ? -1 : 1)
}

export const showDataOnMap = (data, caseType = 'cases') => 
    data.map(country => (
        <Circle
            center={[country.countryInfo.lat, country.countryInfo.long]}
            fillOpacity={0.4}
            color={casesTypeColors[caseType].hex}
            fillColor={casesTypeColors[caseType].hex}
            radius = {
                Math.sqrt(country[caseType] * casesTypeColors[caseType].multiplier)
            }
        >
            <Popup>
                <p> test </p>
            </Popup>
        </Circle>
    ))
