var mymap = L.map('mapid').setView([19.3733109,-99.1566862], 13);

/*
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'sk.eyJ1IjoiY2F6YXJlc2UiLCJhIjoiY2swNDNnOHp2MDJrbzNpcWxzdTdpeDdncyJ9.TyvIk4mYK2xw-_UNveIp_Q'
}).addTo(mymap);
*/


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' , {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

