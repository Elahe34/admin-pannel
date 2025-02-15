import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Mappage = () => {
  const mapContainer = useRef(null); // استفاده از useRef برای ذخیره مرجع به div نقشه

  useEffect(() => {
    // فقط یکبار نقشه رو ایجاد می‌کنیم
    if (mapContainer.current && !mapContainer.current._leaflet_id) {
      const map = L.map(mapContainer.current).setView([35.6762, 51.4231], 2); // زوم 2 برای نمای قاره‌ها

      // لایه Tile برای نقشه
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
    }

    // تمیز کردن نقشه هنگام unmount شدن کامپوننت
    return () => {
      if (mapContainer.current) {
        mapContainer.current._leaflet_id = null; // ریست کردن نقشه
      }
    };
  }, []);

  return (
    <div className='mr-auto flex flex-col items-center justify-center rounded border-4 border-[#9AC9D8] text-sm shadow-lg'>
        <div ref={mapContainer} style={{ height: '390px', width: '450px' }}></div>

    </div>
  )
};

export default Mappage;