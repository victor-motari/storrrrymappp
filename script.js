// Initialize the map centered on JKUAT Main Gate
var map = L.map('map').setView([-1.101885, 37.014200], 13); // Adjust the initial coordinates as needed

// Add a tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Define your custom locations with images in pop-ups (latitude, longitude, area description, and image path)
var customLocations = [
  {
    location: [-1.101885, 37.014200], // JKUAT Gate
    popupContent: "<b>JKUAT Gate:</b><br>The main entrance to Jomo Kenyatta University of Agriculture and Technology.<br><img src='jkuat main gate.jpeg' alt='JKUAT Gate' width='200'/>"
  },
  {
    location: [-1.105271, 37.016844], // Thika Road
    popupContent: "<b>Thika Road:</b><br>A major highway connecting Nairobi to Thika.<br><img src='thika road junction.jpeg' alt='Thika Road' width='200'/>"
  },
  {
    location: [-1.092829, 37.031523], // Highpoint
    popupContent: "<b>Highpoint:</b><br>A residential and commercial area near JKUAT.<br><img src='highpoint thika road.jpeg' alt='Highpoint' width='200'/>"
  },
  {
    location: [-1.081280, 37.042457], // Witeithe Farm
    popupContent: "<b>Witeithe Farm:</b><br>An agricultural area along the Thika Superhighway.<br><img src='farm weteithe.jpeg' alt='Witeithe Farm' width='200'/>"
  },
  {
    location: [-1.065191, 37.052463], // Witeithe Market
    popupContent: "<b>Witeithe Market:</b><br>A popular market area near Witeithe Farm.<br><img src='market wete.jpeg' alt='Witeithe Market' width='200'/>"
  },
  {
    location: [-1.040774, 37.062172], // Mangu
    popupContent: "<b>Mangu:</b><br>A well-known area near Mangu High School.<br><img src='mangu thika road.jpeg' alt='Mangu' width='200'/>"
  },
  {
    location: [-1.017806, 37.071525], // Thika Sports Club
    popupContent: "<b>Thika Sports Club:</b><br>A recreational and sporting facility in Thika.<br><img src='thika soprts club.jpeg' alt='Thika Sports Club' width='200'/>"
  },
  {
    location: [-1.008562, 37.076183], // Thika Interchange
    popupContent: "<b>Thika Interchange:</b><br>The main junction connecting Thika Town to Nairobi and other regions.<br><img src='thika interchange.jpg' alt='Thika Interchange' width='200'/>"
  }
];

// Loop through the custom locations and add them to the map
customLocations.forEach(function(point) {
  L.marker(point.location)
    .addTo(map)
    .bindPopup(point.popupContent);
});

// Add the route along Thika Superhighway using GeoJSON
var route = {
  "type": "Feature",
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [37.014200, -1.101885], // JKUAT Gate
      [37.016844, -1.105271], // Thika Road
      [37.031523, -1.092829], // Highpoint
      [37.042457, -1.081280], // Witeithe Farm
      [37.052463, -1.065191], // Witeithe Market
      [37.062172, -1.040774], // Mangu
      [37.071525, -1.017806], // Thika Sports Club
      [37.076183, -1.008562]  // Thika Interchange
    ]
  }
};

// Add the route to the map
L.geoJSON(route, {
  style: {
    color: "black", // Road color set to black
    weight: 5,
    opacity: 0.7
  }
}).addTo(map);
