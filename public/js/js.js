

const getButton1 = document.querySelector(".crime1");

const createButton1 = document.createElement('button');
createButton1.className = 'button1';
createButton1.textContent = "Report Crime";
createButton1.addEventListener('click', ()=>{
    window.location = './forms.html'
})
getButton1.appendChild(createButton1);
const createButton2 = document.createElement('button');
createButton2.className = 'button2';
createButton2.textContent = "Newly Reported Crimes";
createButton2.addEventListener('click', ()=>{
    window.location = './reportedCrimes.html'
})
getButton1.appendChild(createButton2);

const getCrime= document.getElementById('#crime')





