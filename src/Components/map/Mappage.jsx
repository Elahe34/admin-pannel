import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Mappage = () => {
  const mapContainer = useRef(null); 

  useEffect(() => {
    if (mapContainer.current && !mapContainer.current._leaflet_id) {
      const map = L.map(mapContainer.current).setView([35.6762, 51.4231], 2); 

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
    }

    return () => {
      if (mapContainer.current) {
        mapContainer.current._leaflet_id = null;
      }
    };
  }, []);

  return (
    <div className='mr-auto flex flex-col items-center justify-center rounded border-4 border-[#9AC9D8] text-sm shadow-lg'>
        <div ref={mapContainer} style={{ height: '390px', width: '420px' }}></div>

    </div>
  )
};

export default Mappage;