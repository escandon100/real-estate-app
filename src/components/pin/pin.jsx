import React from 'react'
import {Marker , Popup } from "react-leaflet"
import { Link } from 'react-router';
import "./pin.scss"
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const Pin = ({item}) => {
  return (
    <Marker key={item.id} position={[item.latitude , item.longitude]}>
    <Popup>
       <div className="popupContainer">
        <img src={item.title === "Beautiful Apartment" ? item.images[0] : item.img } alt="" />
        <div className="textContainer">
            <Link to = {`/${item.id}`}>{item.title}</Link>
             <span>{item.bedroom} bedroom</span>
            <b>${item.price}</b>
        </div>
       </div>
    </Popup>
</Marker>
  )
}

export default Pin
