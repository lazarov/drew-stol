var directionsDisplay = new google.maps.DirectionsRenderer();
var directionsService = new google.maps.DirectionsService();
// arrays to hold copies of the markers and html used by the side_bar
// because the function closure trick doesnt work there
var gmarkers = [];
var htmls = [];

// arrays to hold variants of the info window html with get direction forms open
var to_htmls = [];
var from_htmls = [];

// global "map" variable
var map;


var infowindow = new google.maps.InfoWindow({
  size: new google.maps.Size(200, 100)
});


function initialize() {

  var location = new google.maps.LatLng(49.720550, 21.329594);

  var mapOptions = {
    center: location,
    zoom: 11,
    scrollwheel: true
  };

  map = new google.maps.Map(document.getElementById("map-canvas"),
    mapOptions);

  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById("directionsPanel"));
  google.maps.event.addListener(map, 'click', function() {
    infowindow.close();
  });

  var image = {
    url: 'http://maps.google.com/mapfiles/ms/micons/red.png'
  };
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    animation: google.maps.Animation.DROP,
    icon: image,
    title: 'DREW-STOL, 38-243 Harklowa 108'
  });

  var i = gmarkers.length;
  latlng = location;

  // The info window version with the "to here" form open
  to_htmls[i] = '<b>Do DREW-STOL</b> <a href="javascript:fromhere(' + i + ')"><\/a>' +
    'z miejscowosci:<form action="javascript:getDirections()">' +
    '<input type="text" SIZE=40 MAXLENGTH=40 name="saddr" id="saddr" value="" placeholder="Wpisz adres poczatkowy" /><br>' +
    '<INPUT value="Wyznacz trase" TYPE="button" onclick="getDirections()"><br>' +
    'Spacer <input type="checkbox" name="walk" id="walk" /> &nbsp; Unikaj autostrad <input type="checkbox" name="highways" id="highways" />' +
    '<input type="hidden" id="daddr" value="' + latlng.lat() + ',' + latlng.lng() +
    '"/>';
  // The info window version with the "from here" form open
  from_htmls[i] = '<b>Z DREW-STOL</b> <a href="javascript:tohere(' + i + ')"><\/a>' +
    'do domu:<form action="javascript:getDirections()">' +
    '<input type="text" SIZE=40 MAXLENGTH=40 name="daddr" id="daddr" value="" placeholder="Wpisz adres docelowy" /><br>' +
    '<INPUT value="Wyznacz trase" TYPE="SUBMIT"><br>' +
    'Spacer <input type="checkbox" name="walk" id="walk" /> &nbsp; Unikaj autostrad <input type="checkbox" name="highways" id="highways" />' +
    '<input type="hidden" id="saddr" value="' + latlng.lat() + ',' + latlng.lng() +
    '"/>';
  // The inactive version of the direction info
  var html = marker.getTitle() + '<br>Jak: <a href="javascript:tohere(' + i + ')">dojechac<\/a> / <a href="javascript:fromhere(' + i + ')">wrocic?<\/a>';
  var contentString = html;

  google.maps.event.addListener(marker, 'click', function() {
    map.setZoom(15);
    map.setCenter(marker.getPosition());
    infowindow.setContent(contentString);
    infowindow.open(map, marker);
  });
  // save the info we need to use later for the side_bar
  gmarkers.push(marker);
  htmls[i] = html;
}

google.maps.event.addDomListener(window, 'load', initialize);

// ===== request the directions =====
function getDirections() {
  // ==== Set up the walk and avoid highways options ====
  var request = {};
  if (document.getElementById("walk").checked) {
    request.travelMode = google.maps.DirectionsTravelMode.WALKING;
  } else {
    request.travelMode = google.maps.DirectionsTravelMode.DRIVING;
  }

  if (document.getElementById("highways").checked) {
    request.avoidHighways = true;
  }
  // ==== set the start and end locations ====
  var saddr = document.getElementById("saddr").value;
  var daddr = document.getElementById("daddr").value;

  request.origin = saddr;
  request.destination = daddr;
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    } else alert("Nie znalezniono miejsca docelowego" + status);
  });
}


// This function picks up the click and opens the corresponding info window
function myclick(i) {
  google.maps.event.trigger(gmarkers[i], "click");
}


// functions that open the directions forms
function tohere(i) {
  // gmarkers[i].openInfoWindowHtml(to_htmls[i]);
  infowindow.setContent(to_htmls[i]);
  infowindow.open(map, gmarkers[i]);
}

function fromhere(i) {
  // gmarkers[i].openInfoWindowHtml(from_htmls[i]);
  infowindow.setContent(from_htmls[i]);
  infowindow.open(map, gmarkers[i]);
}

window.onload = initialize();

/* SIMPLE MARKER ON MAP */

/*function initialize() {
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

*/
