import GoogleMapReact from "google-map-react";
import Marker from "google-map-react";
export interface MapProps {}

export const MapComp = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <div style={{ height: "40%", margin: "3%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker
          lat={defaultProps?.center?.lat}
          lng={defaultProps?.center?.lng}
        />
      </GoogleMapReact>
    </div>
  );
};

MapComp.defaultProps = {};

export default MapComp;
