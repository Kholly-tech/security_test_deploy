// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// // Fix for default markers
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: import("leaflet/dist/images/marker-icon-2x.png"),
//   iconUrl: import("leaflet/dist/images/marker-icon.png"),
//   shadowUrl: import("leaflet/dist/images/marker-shadow.png"),
// });

// export const MapComponent = () => {
//   const position = [7.4369114, 3.8837345]; // [latitude, longitude]

//   return (
//     <MapContainer
//       center={position}
//       zoom={13}
//       style={{ height: "400px", width: "100%" }}
//     >
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <Marker position={position}>
//         <Popup>
//           A pretty CSS3 popup. <br /> Easily customizable.
//         </Popup>
//       </Marker>
//     </MapContainer>
//   );
// };

{/* <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.714754884775!2d-71.04048572404818!3d42.36991793447893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3705d2b553e45%3A0x81a064cc131c8be0!2s154%20Maverick%20St%2C%20Boston%2C%20MA%2002128%2C%20USA!5e0!3m2!1sen!2sng!4v1754036811513!5m2!1sen!2sng"
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>; */}

export const LocationMap = () => {
  // Replace this URL with your own Google Maps embed link
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.714754884775!2d-71.04048572404818!3d42.36991793447893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3705d2b553e45%3A0x81a064cc131c8be0!2s154%20Maverick%20St%2C%20Boston%2C%20MA%2002128%2C%20USA!5e0!3m2!1sen!2sng!4v1754036811513!5m2!1sen!2sng";

  return (
    <div className="map-container relative w-full h-full bg-gray-300 rounded-lg overflow-hidden shadow-md">
      <iframe
        title="154 Maverick Street, Boston, MA 02128"
        src={mapSrc}
        className="absolute top-0 left-0 w-full h-full border-0"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
