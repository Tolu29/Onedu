// In the following example, markers appear when the user clicks on the map.
      // Each marker is labeled with a single alphabetical character.
      var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      var labelIndex = 0;
      var markers = [];
      var map;
      var backLevel = 0;

      function initialize() {
        var bangalore = { lat: 25.543176, lng: -103.408397 };

        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: bangalore
        });

        addMarker(bangalore, map);

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
          return ;
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

          $("body").on('click','#schoolMap',function(){
            backLevel = 4;            
            $(".thirdLevel").fadeOut('slow', function(){
              $(".fourthLevel").fadeIn('slow', function(){
                var bangalore = { lat: uniActive[0].latitud, lng: uniActive[0].longitud };
                clearMarkers();
                markers = [];
                addMarker(bangalore, map);
                setTimeout(function(){ google.maps.event.trigger(map, "resize"); }, 1000);
              });
            });
          });

      });
