const url = "https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json?";
const urlByCategory =
  "https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json?clearance_code_inc_type=";

let crimeSet = new Set();
let setArray = [];

var crimes = L.layerGroup();
let all = L.layerGroup();
var accident = L.layerGroup();
var theft = L.layerGroup();
var assault = L.layerGroup();
var sexOffense = L.layerGroup();
var breakingEnt = L.layerGroup();
var robbery = L.layerGroup();
var vandalism = L.layerGroup();
var auto = L.layerGroup();
var homicide = L.layerGroup();

var CrimeIcon = L.Icon.extend({
  options: {
    iconSize: [64, 74],
    iconAnchor: [22, 94],
    // popupAnchor:  [-3, -76]
  },
});
let assaultIcon = new CrimeIcon({ iconUrl:'./Icons/assault.png'});
let accidentIcon = new CrimeIcon({ iconUrl: "./Icons/accident.png" });
let autoIcon = new CrimeIcon({ iconUrl: "./Icons/autorecover.png" });
let breakingEntIcon = new CrimeIcon({ iconUrl: "./Icons/breaking.png" });
let homicideIcon = new CrimeIcon({ iconUrl: "./Icons/homicide.png" });
let robberyIcon = new CrimeIcon({ iconUrl: "./Icons/robbery.png" });
let sexOffIcon = new CrimeIcon({ iconUrl: "./Icons/sexOffense.png" });
let vandalismIcon = new CrimeIcon({ iconUrl: "./Icons/vandalism.png" });
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
  const response = await fetch(url);
  const data = await response.json();
  // Creating a list of crime category this is added to a set
  for (x = 0; x < data.length; x++) {
    crimeSet.add(data[x].clearance_code_inc_type);
  }

  setArray = Array.from(crimeSet);

  setArray.forEach(async (e) => {
    let url1 = `https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json?clearance_code_inc_type=${e
      .replaceAll(" ", "%20")
      .replaceAll("&", "%26")}`;

    const response1 = await fetch(url1);
    const data1 = await response1.json();
    for (let i = 0; i < data.length; i++) {
      if (!data1[i]) {
        continue;
      }
      const latitude = data1[i].latitude;
      const longitude = data1[i].longitude;
      const crime = data1[i].clearance_code_inc_type;
      const date = data1[i].date;

      if (crime === "ACCIDENT") {
        L.marker([latitude, longitude], { icon: accidentIcon })
          .addTo(accident);
      }
      if (crime === "THEFT FROM AUTO" || crime === "THEFT") {
        L.marker([latitude, longitude], { icon: theftIcon }).addTo(theft);
      }

      if (
        crime === "ASSAULT" ||
        crime === "ASSAULT, WEAPON" ||
        crime === "ASSAULT, SHOOTING"
      ) {
        L.marker([latitude, longitude], { icon: assaultIcon }).addTo(assault);
      }

      if (crime === "AUTO, STOLEN" || crime === "AUTO, STOLEN & RECOVERED") {
        L.marker([latitude, longitude], { icon: autoIcon }).addTo(auto);
      }

      if (crime === "SEX OFFENSE") {
        L.marker([latitude, longitude], { icon: sexOffIcon }).addTo(sexOffense);
      }

      if (crime === "ROBBERY, OTHER" || crime === "ROBBERY, COMMERCIAL") {
        L.marker([latitude, longitude], { icon: robberyIcon }).addTo(robbery);
      }

      if (
        crime === "B & E, VACANT" ||
        crime === "B & E, OTHER" ||
        crime === "B & E, RESIDENTIAL" ||
        crime === "B & E, COMMERCIAL" ||
        crime === "B & E, RESIDENTIAL (VACANT)"
      ) {
        L.marker([latitude, longitude], { icon: breakingEntIcon }).addTo(
          breakingEnt
        );
      }

      if (crime === "HOMICIDE") {
        L.marker([latitude, longitude], { icon: homicideIcon }).addTo(homicide);
      }
    }
  });
}

getData();
