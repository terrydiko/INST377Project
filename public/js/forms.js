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
    let city = document.getElementById("city_id").value;
    let stateItem = document.getElementById("state_id");
    let state = stateItem.options[stateItem.selectedIndex].value;
    let zip = document.getElementById("zip_id").value;

    let data = {
        'crimetype': crimeType,
        'streetaddress': street1,
        'city': city,
        'state': state,
        'zipcode': zip,
    };

    console.log(JSON.stringify(data))
    let crimeURL = "http://localhost:4000/crime";
    const fetchPromise = fetch(crimeURL, {
      method: 'POST', headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }, body: JSON.stringify(data)
    });

}