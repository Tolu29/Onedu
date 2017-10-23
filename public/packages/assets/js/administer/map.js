// In the following example, markers appear when the user clicks on the map.
      // Each marker is labeled with a single alphabetical character.
      var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      var labelIndex = 0;
      var markers = [];
      var map;

      function initialize() {
        var bangalore = { lat: 25.543176, lng: -103.408397 };

        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: bangalore
        });

        // This event listener calls addMarker() when the map is clicked.
        google.maps.event.addListener(map, 'click', function(event) {
          addMarker(event.latLng, map);
        });

      }

      function clearMarkers() {
        setMapOnAll(null);
      }

      function setMapOnAll(map) {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
        }
      }


      // Adds a marker to the map.
      function addMarker(location, map) {
        if (markers.length == 1) {
          clearMarkers();
          markers = [];
        }
        // Add the marker at the clicked location, and add the next-available label
        // from the array of alphabetical characters.
        marker = new google.maps.Marker({
          position: location,
          label: labels[labelIndex++ % labels.length],
          map: map
        });

        markers.push(marker);
      }

      google.maps.event.addDomListener(window, 'load', initialize);

$(function(){

  $("body").on('click', '.ubication', function(){
    clearMarkers();
    markers = [];
    setTimeout(function(){ google.maps.event.trigger(map, "resize"); }, 1000);
    if (locationInfo.obj.latitud != null && locationInfo.obj.longitud != null) {
      var bangalore = { lat: locationInfo.obj.latitud, lng: locationInfo.obj.longitud };
      addMarker(bangalore, map);
    }
  });

  $("body").on('click', '.saveUbication', function(){
    let data = {
      lat: markers[0].getPosition().lat(),
      long: markers[0].getPosition().lng()
    }

    $.ajax({
      url: "/location",
      type: "POST",
      data: data,
      headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    })
    .done(function(data){
      $(".closeMap").trigger('click');
    });
  });

});
