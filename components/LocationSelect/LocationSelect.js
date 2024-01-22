"use client";
import {
  TileLayer,
  MapContainer,
  Marker,
  Circle,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { Box, Modal, IconButton, Grid } from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  height: "70vh",
};
const skinnarilaCoordinates = [61.0631, 28.0982];

const LocationSelect = (props) => {
  const coords = props.coords;
  const setCoords = props.setCoords;
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleMapClick = (e) => {
    const coordObj = [e.latlng.lat.toFixed(3), e.latlng.lng.toFixed(3)];
    setCoords(coordObj);
  };

  return (
    <>
      <Grid item xs={6}>
        <IconButton size="large" onClick={handleOpen}>
          <MapIcon color={"primary"} fontSize="50px" />
        </IconButton>
      </Grid>
      <Modal open={open} onClose={handleClose}>
        <Box style={style} justifyItems={"center"}>
          <MapContainer
            center={coords}
            zoom={13}
            scrollWheelZoom={true}
            style={{
              position: "absolute",
              top: "0",
              bottom: "0",
              width: "100%",
            }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapEventsHandler handleMapClick={handleMapClick} />
            <Marker position={coords}></Marker>
            <Circle center={coords} radius={100}></Circle>
          </MapContainer>
        </Box>
      </Modal>
    </>
  );
};

const MapEventsHandler = ({ handleMapClick }) => {
  useMapEvents({
    click: (e) => handleMapClick(e),
  });
  return null;
};

export default LocationSelect;
