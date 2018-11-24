var map1 = L.map('map1').setView([-30.0277, -51.2287], 12);
var map2 = L.map('map2').setView([-30.0277, -51.2287], 12);
var map3 = L.map('map3').setView([-30.0277, -51.2287], 12);
var map4 = L.map('map4').setView([-30.0277, -51.2287], 12);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoidnJ2cyIsImEiOiJjam9zbnM4ZjAwYjVrM3FzNWlqcHppczVvIn0.n2HTVIKjyl8NBWFI__Ueiw'
}).addTo(map1);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoidnJ2cyIsImEiOiJjam9zbnM4ZjAwYjVrM3FzNWlqcHppczVvIn0.n2HTVIKjyl8NBWFI__Ueiw'
}).addTo(map2);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoidnJ2cyIsImEiOiJjam9zbnM4ZjAwYjVrM3FzNWlqcHppczVvIn0.n2HTVIKjyl8NBWFI__Ueiw'
}).addTo(map3);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoidnJ2cyIsImEiOiJjam9zbnM4ZjAwYjVrM3FzNWlqcHppczVvIn0.n2HTVIKjyl8NBWFI__Ueiw'
}).addTo(map4);


d3.csv("data/cicloviasimplantadas.csv ", function (error, data) {
	drawCiclovias(data);
});

d3.csv("data/acidentes-2016.csv ", function (error, data) {
	drawAcidentes(data);
});

d3.csv("data/lombadasAux.csv ", function (error, data) {
	drawLombadas(data);
});

d3.csv("data/pardaisAux.csv ", function (error, data) {
	drawPardais(data);
});

d3.csv("data/semaforosAux.csv ", function (error, data) {
	drawSemaforos(data);
});

var myStyle = {
    "color": 'red',
    "weight": 3,
    "opacity": 1
};

function drawCiclovias(data) {
	var myLayer = L.geoJSON().addTo(map1);
	allGeoJson = [];
	for(var i=0; i < data.length; i++) {
		if(data[i].geojson.length>0) {
			geojson = JSON.parse(data[i].geojson);
			allGeoJson.push(geojson);
		}
		//geojson = JSON.parse(dataBikePaths[i].geojson)
		//myLayer.addData(geojson);
	}
	L.geoJSON(allGeoJson, {
    	style: myStyle
	}).addTo(map1);
};

function drawAcidentes(data) {
	for(var i=0; i < data.length; i++) {
		if(data[i].BICICLETA > 0) {
			var circle = L.circle([data[i].LATITUDE, data[i].LONGITUDE], {
			    color: 'blue',
			    fillColor: 'blue',
			    fillOpacity: 1,
			    radius: 2
			}).addTo(map1);
		}
		var circle = L.circle([data[i].LATITUDE, data[i].LONGITUDE], {
		    color: 'blue',
		    fillColor: 'blue',
		    fillOpacity: 1,
		    radius: 2
		}).addTo(map2);

		var circle = L.circle([data[i].LATITUDE, data[i].LONGITUDE], {
		    color: 'blue',
		    fillColor: 'blue',
		    fillOpacity: 1,
		    radius: 2
		}).addTo(map3);

		var circle = L.circle([data[i].LATITUDE, data[i].LONGITUDE], {
		    color: 'blue',
		    fillColor: 'blue',
		    fillOpacity: 1,
		    radius: 2
		}).addTo(map4);
	}

};

function drawLombadas(data) {
	for(var i=0; i < data.length; i++) {
		var circle = L.circle([data[i].Lat,data[i].Lng], {
		    color: 'red',
		    fillColor: '#f03',
		    fillOpacity: 0.5,
		    radius: 100
		}).addTo(map4);
	}
};

function drawPardais(data) {
	for(var i=0; i < data.length; i++) {
		var circle = L.circle([data[i].Lat,data[i].Lng], {
		    color: 'red',
		    fillColor: '#f03',
		    fillOpacity: 0.5,
		    radius: 100
		}).addTo(map3);
	}
};

function drawSemaforos(data) {
	for(var i=0; i < data.length; i++) {
		var circle = L.circle([parseFloat(data[i].Lat.replace(",",".")),parseFloat(data[i].Lng.replace(",","."))], {
		    color: 'red',
		    fillColor: '#f03',
		    fillOpacity: 0.5,
		    radius: 50
		}).addTo(map2);
	}
};
