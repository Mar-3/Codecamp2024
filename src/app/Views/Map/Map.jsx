'use client'
import { TileLayer, MapContainer, useMap, Marker, Popup, Circle, CircleMarker } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { mockdata } from "@/app/mockdata";
import { NoticeBox } from "../NoticeBox/NoticeBox";


const fillRedOptions = { fillColor: 'red'};

const skinnarilaCoordinates = [61.0631, 28.0982]

export default function Map() {
  

  return (
    <>
    <h1> MAP </h1>
    <MapContainer center={skinnarilaCoordinates} zoom={13} scrollWheelZoom={false} style={{ height: "70rem", width: "100%" }}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {mockdata.notices.map((notice) => {
      return (<>
      <Circle key={notice.id} center={notice.location} pathOptions={fillRedOptions} radius={200}/>
      <CircleMarker center={notice.location} pathOptions={{fillOpacity:0}} radius={20}>
        <Popup>
          <NoticeBox props={notice}/>
        </Popup>
      </CircleMarker>
      </>)
    })}
    <Circle center={skinnarilaCoordinates} pathOptions={fillRedOptions} radius={100}/>
    <Marker position={skinnarilaCoordinates}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  </>
  )

}