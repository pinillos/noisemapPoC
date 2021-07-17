var map = L.map('mapid', {
    center: [40.4463, -3.5945],
    zoom: 16,
    minZoom: 12,
    maxBounds : [
    	[41.957236472025635,-3.7600341796875],
    	[39.45627757127799,-3.4824951171875,]
        ]
    });

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        subdomains: 'abc'
    }).addTo(map);

map.attributionControl.addAttribution(' © <a href="http://www.openstreetmap.org/">OpenStreetMap</a> contributors');

map.scrollWheelZoom.disable();

L.control.scale().addTo(map);

//custom size for this example, and autoresize because map style has a percentage width
var heatmap = L.webGLHeatmap({
    size: 6,
    units: 'm',
    alphaRange: 0.8
});

var dataPoints = [
    [40.4497, -3.6039, "100"],
    [40.4499, -3.59, "78"],
    [40.4488, -3.59, "89"],
    [40.4466, -3.6043, "3"]
];

heatmap.setData(dataPoints);
heatmap.multiply(2);

try {
    map.addLayer(heatmap);
} catch (e) {
    throw e;
}
