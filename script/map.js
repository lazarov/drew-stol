function initialize() {
  var myLatlng = new google.maps.LatLng(49.720550, 21.329594);
  var mapOptions = {
    zoom: 11,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'DREW-STOL, 38-243 Harklowa 108'
  });
}

window.onload = initialize();
