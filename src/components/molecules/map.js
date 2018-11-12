import React, { Component } from 'react';

export default class Map extends Component {
  componentDidMount() {
    let location = {lat: 51.0538286, lng: 3.7250121};
    // The map, centered at Uluru
    let map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: location});
    // The marker, positioned at Uluru
    let marker = new google.maps.Marker({position: location, map: map});
  }
  render() {
    return (
      <div id="map"></div>
    )
  }
}
