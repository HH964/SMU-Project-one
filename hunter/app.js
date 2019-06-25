var googleURL = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyA3SVRHtd9fyun6WGgFbLlKKnKGJ_9jl18';


$.ajax({
    url: googleURL,
    method: 'GET',
    dataType: 'jsonp'
}).then(function () {
    // 32.7767° N, 96.7970° W
    var latitude = 32.7767;
    var longitude = -96.7970;
    var x = parseFloat(latitude);
    var y = parseFloat(longitude);

    var locations = [
        ['Preston Hollow Park', 32.8804037, -96.7952787],
        ['Four Seasons', 32.864327, -96.95764]
    ];

    var latlng = new google.maps.LatLng(x, y);
    var myOptions = {
        zoom: 10,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('map'), myOptions);

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    };
});




