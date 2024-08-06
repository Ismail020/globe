"use client";

import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useEffect } from 'react';
// @ts-ignore
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

export default function Home() {
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiaXNtYWlsMDIwYyIsImEiOiJjbHppZDFtam4wY3E3MnFyMWljbGwwcXAzIn0.Cfm6NtACDQhtjdG4PByR8w';
    const map = new mapboxgl.Map({
      container: 'map',
      center: [-74.5, 40],
      pitch: 10,
      zoom: 9,
    });

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
    });

    map.addControl(geocoder);

    map.on('style.load', () => {
      map.setConfigProperty('basemap', 'lightPreset', 'dusk');
    });

    map.on('style.load', () => {
      map.setConfigProperty('basemap', 'showPointOfInterestLabels', false);
    });
  }, []);

  return (
    <div>
      <div id='map' className='w-screen h-screen'></div>
    </div>
  );
}