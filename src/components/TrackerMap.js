import React from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import './styles/TrackerMap.css';
import { showDataOnMap } from '../util.js'

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
