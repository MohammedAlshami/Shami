"use client";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import L from "leaflet";


import { MapContent } from "./MapContent";
const selectedBasemap = `https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibXNoYW1pIiwiYSI6ImNtMGljY28zMzBqZGsycXF4MGppdmE0bWUifQ.nWArfpCw78mToZi2cN-e8w`;

const page = () => {
  useEffect(() => {
    // Set map icon size
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      shadowUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    });
  }, []);

  const onEachFeature = (feature, layer) => {
    if (feature.properties && feature.properties.name) {
      layer.bindPopup(`<b>${feature.properties.name}</b>`);
    }
  };

  return (
    <div className="m-24 bg-neutral-800/40 p-2 rounded-lg">
      <MapContainer
        center={[40.7681, -73.9819]}
        zoom={15}
        style={{ height: "80vh", width: "100%", backgroundColor: "black" }}
      >
        <TileLayer
          url={selectedBasemap}
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <GeoJSON data={MapContent} onEachFeature={onEachFeature} />
      </MapContainer>
    </div>
  );
};

export default page;
