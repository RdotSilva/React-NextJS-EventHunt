import Image from "next/image";
import { useState, useEffect } from "react";
import ReactMapGl, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Geocode from "react-geocode";

export default function EventMap({ evt }) {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [loading, setLoading] = useState(true);
  const [viewport, setViewport] = useState({
    latitude: 53.2707,
    longitude: 9.0568,
    width: "100%",
    height: "500px",
    zoom: 12,
  });

  return <div>MAP</div>;
}
