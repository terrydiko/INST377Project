// const url1 = "https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json?";
// let crimeSet1 = new Set();
// let setArray1 = [];
// getCrimeId = document.querySelector('.form-group1')
// async function getData() {
//     const response = await fetch(url1);
//     const data2 = await response.json();

//      for (x = 0; x < data2.length; x++) {
//         crimeSet1.add(data2[x].clearance_code_inc_type);
//       }
//       setArray1 = Array.from(crimeSet1);
//      setArray1.forEach((crime)=>{
//         getCrimeId.innerHtml = `<option>${crime}</option>`
//         console.log(crime)

//      })
//      console.log(getCrimeId)
// }
// getData()

function submitCrime() {
  console.log("HERE submitCrime");

  let crimeTypeItem = document.getElementById("crimeType");
  let crimeType = crimeTypeItem.options[crimeTypeItem.selectedIndex].value;
  let street1 = document.getElementById("street1_id").value;
  let latitude = document.getElementById("lon_id").value;
  let longitude = document.getElementById("lat_id").value;

  let data = {
    crimetype: crimeType,
    location: street1,
    lat: latitude,
    lon: longitude,
  };

  let crimeURL = "http://localhost:4000/crime";
  const fetchPromise = fetch(crimeURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  });

  fetchPromise
  .then((response) => {
    window.location = "../"
  })
  .catch((err) => {
    console.log(err);
  });

}

const search = document.getElementById('street1_id');
const matchList = document.querySelector('.autocom-box');

const searchLocations = async searchText => {
  const res = await fetch("https://nominatim.openstreetmap.org/search?limit=50&format=json&country=United+States&state=Maryland&county=Prince+George%27s+County&street=" + search.value.replaceAll(' ', '+'))
  const locations = await res.json();

  if (searchText) {
    document.querySelector('.search-input').classList.add("active");
    outputHtml(locations)
    let allList = matchList.querySelectorAll("li")
    for (let i = 0; i < allList.length; i++) {
      //adding onclick attribute in all li tag
      allList[i].setAttribute("onclick", "select(this)");
  }
  }
  else {
    document.querySelector('.search-input').classList.remove("active");
  }
}

const outputHtml = matches => {
  if (matches.length > 0) {
    const html = matches.map(match => `
      <li>${match.display_name} @ ${match.lat}, ${match.lon}</li>
    `).join('');
    matchList.innerHTML = html;
  } else {
    matchList.innerHTML = '<li>Sorry, no results...</li>';
  }
}

function select(element){
    let selectData = element.textContent;
    search.value = selectData.split(" @ ")[0];
    document.getElementById("lat_id").value = selectData.split(" @ ")[1].split(", ")[0];
    document.getElementById("lon_id").value = selectData.split(" @ ")[1].split(", ")[1];
    document.querySelector('.search-input').classList.remove("active");
}

search.addEventListener('input', () => searchLocations(search.value))

