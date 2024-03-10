import { ReactNode } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

interface MapProps {
  children: ReactNode
}
const Map = ({children}: MapProps) => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        {children}
    </MapContainer>
  )
}

export default Map