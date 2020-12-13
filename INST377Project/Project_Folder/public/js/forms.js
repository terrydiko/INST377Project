
let url = "https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json";
let chart = "";
console.log(url);
//const fetchPromise = fetch(url);

let settings = { method: "Get" };
let clearanceCodeSet = new Set();

let getClearance = document.getElementById('clearance')

async function getData() {
    await fetch(url, settings)
        .then(res => res.json())
        .then((json) => {
            
            let listSize = json.data.children.length;
            for (x = 0; x < listSize; x++) {

                let readData = json.data.children[x].data;
                let clearanceCode= readData.clearance_code_inc_type;
                clearanceCodeSet.add(clearanceCode)

            }
            getClearance.innerText = clearanceCodeSet
            
        })
        .then(values => console.log(clearanceCodeSet));
        
        
    }
    
    

