import React from 'react'
import { MapContainer, TileLayer, Circle, Popup, useMap } from 'react-leaflet';
import numeral from 'numeral';
import './styles/TrackerMap.css';

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
               <div className="popup__container">
                   <div className="popup__flag" style={{backgroundImage: `url(${country.countryInfo.flag})`}}>

                   </div>
                   <div className="popup__name">
                        {country.country}
                   </div>                   
                   <div className="popup__cases">
                        Cases: {numeral(country.cases).format("0,0")}
                   </div>
                   <div className="popup__recovered">
                        Recovered: {numeral(country.recovered).format("0,0")}
                   </div>
                   <div className="popup__deaths">
                        Deaths: {numeral(country.deaths).format("0,0")}
                   </div>

               </div>
            </Popup>
        </Circle>
    ))

function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}   

function TrackerMap({ countries, casesType, center, zoom}) {
    console.log(center, zoom)
    return (
        <div className="app__map">
            <MapContainer center={center} zoom={zoom}>
                <ChangeView center={center} zoom={zoom} /> 
                <TileLayer 
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {showDataOnMap(countries, casesType)}
            </MapContainer>
        </div>
    )
}

export default TrackerMap
