import {
  GoogleMap,
  InfoWindow,
  Marker,
  useLoadScript,
} from '@react-google-maps/api';
import { useState } from 'react';
// import { useMemo } from 'react';
interface MapProps {
  title: string;
  subtitle: string;
}
// @ts-nocheck
const Map: React.FC<MapProps> = ({
  title, subtitle
}) => {
  const { isLoaded } = useLoadScript({
    // @ts-ignore
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  const defaultCenter = { lat: 25.744839354280487, lng: -80.27873287019175 };
  const defaultZoom = 15;
  const [mapRef, setMapRef] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [infoWindowData, setInfoWindowData] = useState();
  const markers = [
    {
      address: 'Lagjja Margiona',
      lat: 25.744839354280487,
      lng: -80.27873287019175,
    },
    // { address: "Address2", lat: 42.667542, lng: 21.8446 },
    // { address: "Address3", lat: 42.667542, lng: 21.7769 },
  ];
  // @ts-ignore
  const onMapLoad = (map) => {
    setMapRef(map);
    const bounds = new google.maps.LatLngBounds();
    markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
  
    if (map.getZoom() < defaultZoom) {
      map.fitBounds(bounds);
    }
  };
  // @ts-ignore
  const handleMarkerClick = (id, lat, lng, address) => {
    // @ts-ignore
    mapRef?.panTo({ lat, lng });
    // @ts-ignore
    setInfoWindowData({ id, address });
    setIsOpen(true);
  };
  return (
    <>
      <div className="mt-20 mb-4 p-4">
        <h1 className="text-3xl font-semibold text-[#FF9505] p-2">
          {title}
        </h1>
        <span className="p-2">
          {subtitle}
        </span>
      </div>
      <div className="mb-20 p-4">
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap
            mapContainerClassName="map-container"
            onLoad={onMapLoad}
            onClick={() => setIsOpen(false)}
            center={defaultCenter}
            zoom={defaultZoom}
          >
            {markers.map(({ address, lat, lng }, ind) => (
              <Marker
                key={ind}
                position={{ lat, lng }}
                onClick={() => {
                  handleMarkerClick(ind, lat, lng, address);
                }}
              >
                {/* @ts-ignore */}
                {isOpen && infoWindowData?.id === ind && (
                  // @ts-ignore
                  <InfoWindow
                    onCloseClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    {/* @ts-ignore */}
                    <h3 className="text-black">{infoWindowData.address}</h3>
                  </InfoWindow>
                )}
              </Marker>
            ))}
          </GoogleMap>
        )}
      </div>
    </>
  );
};
export default Map;
