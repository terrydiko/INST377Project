

const url = "https://whizzper.herokuapp.com/crimes";

let crimeSet = new Set();

let data = undefined;

var crimes = L.layerGroup();

var accident = L.layerGroup();
var theft = L.layerGroup();
var assault = L.layerGroup();
var sexOffense = L.layerGroup();
var breakingEnt = L.layerGroup();
var robbery = L.layerGroup();
var auto = L.layerGroup();
var homicide = L.layerGroup();

var CrimeIcon = L.Icon.extend({
  options: {
    iconSize: [64, 74],
    iconAnchor: [22, 94],
    // popupAnchor:  [-3, -76]
  },
});
let assaultIcon = new CrimeIcon({ iconUrl: "./Icons/assault.png" });
let accidentIcon = new CrimeIcon({ iconUrl: "./Icons/accident.png" });
let autoIcon = new CrimeIcon({ iconUrl: "./Icons/autorecover.png" });
let breakingEntIcon = new CrimeIcon({ iconUrl: "./Icons/breaking.png" });
let homicideIcon = new CrimeIcon({ iconUrl: "./Icons/homicide.png" });
let robberyIcon = new CrimeIcon({ iconUrl: "./Icons/robbery.png" });
let sexOffIcon = new CrimeIcon({ iconUrl: "./Icons/sexOffense.png" });
let theftIcon = new CrimeIcon({ iconUrl: "./Icons/theft.png" });

// const attribution =
//   '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

// const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

var mbAttr =
    'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  mbUrl =
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw";

var grayscale = L.tileLayer(mbUrl, {
    id: "mapbox/light-v9",
    tileSize: 512,
    zoomOffset: -1,
    attribution: mbAttr,
  }),
  streets = L.tileLayer(mbUrl, {
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    attribution: mbAttr,
  });

//Making a map and tiles
const mymap = L.map("mapid", {
  center: [38.9072, -77.0369],
  zoom: 12,
  minZoom: 10,
  layers: [grayscale, accident],
});

var baseLayers = {
  Grayscale: grayscale,
  Streets: streets,
};

var overlays = {
  Accident: accident,
  Assault: assault,
  Auto: auto,
  "Breaking & Entering": breakingEnt,
  Homicide: homicide,
  Robbery: robbery,
  "Sex Offense": sexOffense,
  Theft: theft,
};

// const tiles = L.tileLayer(tileUrl, { attribution });
L.control.layers(baseLayers, overlays).addTo(mymap);

//Making a marker

async function getData() {
  const response = await fetch('./crimes', {method:"Get"});
  const data = await response.json();
  // Creating a list of crime category this is added to a set
  console.log(data)
  for (let i = 0; i < data.length; i++) {
    if (!data[i]) {
      continue;
    }
    
    const longitude = data[i].lon;
    const latitude = data[i].lat;
    const crime = data[i].crimetype;
    console.log(`Latitude: ${latitude} Longitude: ${longitude}`)

    if (crime === "accident") {
      console.log('accident')
      L.marker([longitude, latitude], { icon: accidentIcon }).addTo(accident);
    }
    if ( crime === "theft") {
      L.marker([longitude, latitude], { icon: theftIcon }).addTo(theft);
    }

    if (
      crime === "assault") {
      L.marker([longitude, latitude], { icon: assaultIcon }).addTo(assault);
    }

    if (crime === "auto") {
      L.marker([longitude, latitude], { icon: autoIcon }).addTo(auto);
    }

    if (crime === "sex offense") {
      L.marker([longitude, latitude], { icon: sexOffIcon }).addTo(sexOffense);
    }

    if (crime === "robbery") {
      L.marker([longitude, latitude], { icon: robberyIcon }).addTo(robbery);
    }

    if (crime === "B & E") {
      L.marker([longitude, latitude], { icon: breakingEntIcon }).addTo(
        breakingEnt
      );
    }

    if (crime === "homicide") {
      L.marker([longitude, latitude], { icon: homicideIcon }).addTo(homicide);
    }
  }
}

getData();
