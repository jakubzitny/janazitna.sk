/**
 * location of ambulace
 */

function initMap() {
    // Create a new map instance
    var map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 37.7749, lng: -122.4194 }, // Set the initial center of the map
      zoom: 10 // Set the initial zoom level
    });
}

    // Create a marker and set its position.