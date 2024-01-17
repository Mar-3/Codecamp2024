'use client'
import { TileLayer, MapContainer, useMap, Marker, Popup, Circle, CircleMarker } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import NoticeBox from "../NoticeBox/NoticeBox";
import { Box } from "@mui/material";


const fillRedOptions = { fillColor: 'red'};

const skinnarilaCoordinates = [61.0631, 28.0982]

export default function Map({props}) {
  const notices = props;
  return (
    <Box container justifyItems={""} style={{position:'relative', height:"80vh", width:"100vw"}}>
    <MapContainer center={skinnarilaCoordinates} zoom={13} scrollWheelZoom={true} style={{ position:'absolute', top:'0', bottom:'0', width: "100%" }}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {notices.map((notice) => {
      return (<>
      <Circle key={notice.id} center={notice.location} pathOptions={fillRedOptions} radius={200}>
      <Popup>
          <NoticeBox props={notice}/>
        </Popup>
      </Circle>
      </>)
    })}
  </MapContainer>
  </Box>
  )

}