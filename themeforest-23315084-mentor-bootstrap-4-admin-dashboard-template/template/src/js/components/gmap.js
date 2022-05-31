(function(window, document, $, undefined){

    $(function(){
        var gmap = jQuery(".gmap");
        if (gmap.length > 0) {
             // Address Marker
                var addressLocation = $('#address');
                if (addressLocation.length > 0) {
                $(addressLocation)
                  new GMaps({
                    div: '#address',
                    lat: -12.043333,
                    lng: -77.028333
                  });
                }
                // Satellite view
                var satelliteView = $('#events');
                if (satelliteView.length > 0) {
                $(satelliteView)
                  var map = new GMaps({
                    div: '#events',
                    zoom: 16,
                    lat: -12.043333,
                    lng: -77.028333,
                    click: function(e) {
                      alert('click');
                    },
                    dragend: function(e) {
                      alert('dragend');
                    }
                  });
                }
                // Satellite view
                var marker = $('#marker');
                if (marker.length > 0) {
                $(marker)
                  var markerevents = new GMaps({
                    div: '#marker',
                    zoom: 16,
                    lat: -12.043333,
                    lng: -77.028333
                  
                  });

                  markerevents.addMarker({
                    lat: -12.043333,
                    lng: -77.03,
                    title: 'Lima',
                    details: {
                      database_id: 42,
                      author: 'HPNeo'
                    },
                    click: function(e){
                      if(console.log)
                        console.log(e);
                      alert('You clicked in this marker');
                    }
                  });
                  markerevents.addMarker({
                    lat: -12.042,
                    lng: -77.028333,
                    title: 'Marker with InfoWindow',
                    infoWindow: {
                      content: '<p>HTML Content</p>'
                    }
                })
              }
              var marker = $('#polygon');
                if (marker.length > 0) {
                $(marker)
                  var polygon = new GMaps({
                    div: '#polygon',
                    zoom: 16,
                    lat: -12.043333,
                    lng: -77.028333

                  });

                  var path = [[-12.040397656836609,-77.03373871559225], [-12.040248585302038,-77.03993927003302], [-12.050047116528843,-77.02448169303511],	[-12.044804866577001,-77.02154422636042]];

                  polygon1 = polygon.drawPolygon({
                    paths: path, // pre-defined polygon shape
                    strokeColor: '#BBD8E9',
                    strokeOpacity: 1,
                    strokeWeight: 3,
                    fillColor: '#BBD8E9',
                    fillOpacity: 0.6
                  });
              }
        }
    });

})(window, document, window.jQuery);