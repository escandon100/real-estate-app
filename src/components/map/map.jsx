import React from 'react'
import { MapContainer , TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import "./map.scss"
import Pin from "../../components/pin/pin"



const Map = ({items}) => {

    const center = [51.505, -0.09];
     const zoom = 7;

  return (
    <MapContainer center = {center} zoom={zoom} className='map'>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        {
            items.map((item)=> {
                return <Pin item = {item} key={item.id}/>
            })
        }
       
    </MapContainer>
  )
}


export default Map
