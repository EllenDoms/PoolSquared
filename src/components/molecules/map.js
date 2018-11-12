import React, { Component } from "react"
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

import { mapStyles } from '../../config/googleMaps';
import markerImg from '../assets/map/marker.png';
import markerActiveImg from '../assets/map/marker-active.png';
/*global google*/


class Map extends Component {
   render() {
     let marker = {
         url: markerImg,
         scaledSize: new google.maps.Size(30, 30)
     };
     let markerActive = {
         url: markerActiveImg,
         scaledSize: new google.maps.Size(50, 50)
     };
     const GoogleMapExample = withGoogleMap(props => (
        <GoogleMap
          defaultCenter = { { lat: 51.0538286, lng: 3.7250121 } }
          defaultZoom = { 14 }
          defaultOptions={{
            mapTypeControl: false,
            styles: mapStyles
          }}
        >
        <Marker
          position = {{ lat: 51.0538286, lng: 3.7250121 }}
          icon = {markerActive}
        />
        <Marker
          position = {{ lat: 51.0533256, lng: 3.7150121 }}
          icon = {marker}
        />
        </GoogleMap>
     ));
     return(
        <div>
          <GoogleMapExample
            containerElement={ <div style={{ height: `100vh`, width: '100vw' }} /> }
            mapElement={ <div style={{ height: `100%` }} /> }
          />
        </div>
     );
   }
};
export default Map;
