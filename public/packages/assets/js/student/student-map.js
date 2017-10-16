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
        
        addMarker(bangalore, map);

      }

      // Adds a marker to the map.
      function addMarker(location, map) {
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
