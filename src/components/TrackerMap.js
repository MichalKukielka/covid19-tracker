import React from 'react'
import { MapContainer, TileLayer, Circle, Popup, useMap } from 'react-leaflet';
import numeral from 'numeral';
import './styles/TrackerMap.css';


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
{    
    
    console.log(casesType, casesTypeColors[casesType].hex);
    
    return data.map(country => (
            <Circle
                center={[country.countryInfo.lat, country.countryInfo.long]}
                color={casesTypeColors[casesType].hex}
                fillColor={casesTypeColors[casesType].hex}
                fillOpacity={0.4}
                radius={
                Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
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
}
function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}   

function TrackerMap({ countries, casesType, center, zoom}) {
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
