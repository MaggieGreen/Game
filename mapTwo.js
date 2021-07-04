function initMap() {

    var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';


    var union = {
        info: '<strong>Dora Cat - Union City Library</strong><br>\
					34007 Alvarado-Niles Rd, Union City, <br>CA 94587<br>\
					<a href="https://www.google.com/maps/place/Union+City+Library/@37.5879473,-122.0292028,17z/data=!4m5!3m4!1s0x808f957d34984eef:0x4b6ce8a62871bcc5!8m2!3d37.58792!4d-122.0271514">Get Directions</a>',
        lat: 37.588173,
        long: -122.027146,
        icon: image
    };


    var fremont = {
        info: '<strong>Cookie Cat - Fremont Maint Library</strong><br>\
					2400 Stevenson Blvd, Fremont, <br> CA 94538<br>\
					<a href="https://www.google.com/maps/place/Fremont+Main+Library/@37.5508343,-121.9731661,17.01z/data=!4m5!3m4!1s0x808fc0936e0493ab:0xf1cff8b5faaf6f3!8m2!3d37.5508224!4d-121.9709789">Get Directions</a>',
        lat: 37.551137,
        long: -121.970979,
        icon: image
    };

    var newark = {
        info: '<strong>Tom Cat - Newark Library</strong><br>\r\
					6300 Civic Terrace Ave, <br>Newark, CA 94560<br>\
					<a href="https://www.google.com/maps/place/Newark+Library/@37.5345646,-122.0325773,17z/data=!3m1!4b1!4m5!3m4!1s0x808fbf1baa2e3b17:0xaf8c1339cd9b9b02!8m2!3d37.5345604!4d-122.0303886">Get Directions</a>',
        lat: 37.534817,
        long: -122.030327,
        icon: image
    };

    var locations = [
        [union.info, union.lat, union.long, 0],
        [fremont.info, fremont.lat, fremont.long, 1],
        [newark.info, newark.lat, newark.long, 2],
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: new google.maps.LatLng(37.588173, -122.027146),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow({});

    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            icon: image
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}