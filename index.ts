function initMap() {
  const tirana = { lat: 41.32768, lng: 19.818705 };

  const map = new google.maps.Map(document.getElementById("map")!, {
    zoom: 15,
    center: tirana,
  });

  var marker = new google.maps.Marker({
    position: tirana,
    map: map,
    title: "Tirana",
  });

  let infoWindow;

  // Configure the click listener.
  map.addListener("click", (mapsMouseEvent) => {
    // Create a new InfoWindow.
    infoWindow = new google.maps.InfoWindow({
      position: mapsMouseEvent.latLng,
    });
    infoWindow.setContent(
      JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
    );
    infoWindow.open(map);
  });
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};
