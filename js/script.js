"use strict"

window.addEventListener('load', initialise);

//global vars
let mainAnimals;
let animals;
let allCards;
const source = 'https://sammydhulster.github.io/ZooManager//api/animals.json';
async function initialise() {
    mainAnimals = document.querySelector('#animals');
    getJsonData(source);
}

function generateCard(animal){
    const divCard = document.createElement('div');
    divCard.classList.add("card");
    const newHdg = document.createElement('h2');
    newHdg.innerHTML = `${animal.owner}`;
    divCard.appendChild(newHdg);
    const newP = document.createElement('p');
    newP.innerHTML = `${animal.animal.english}`;
    divCard.appendChild(newP);
    const newI = document.createElement('i');
    newI.innerHTML = `${animal.animal.latin}`;
    divCard.appendChild(newI);
    divCard.addEventListener('click', selectAnimal);

    return divCard;
}

    

function selectAnimal(e) {
    const selectedDiv = e.target.closest('.card');
    if (!selectedDiv) return;

    allCards = document.querySelectorAll('.card');
    allCards.forEach(div => div.classList.remove('selected'));
  
    selectedDiv.classList.add('selected');
  }

async function getJsonData(source) {
    fetch(source)
	.then(resp => resp.json()
	)
	.then(data =>{
		animals = data;
        createCards();
    })
	.catch(error => console.log(error));
}

function createCards(){
    animals.forEach(element => 
        {                           
            mainAnimals.appendChild(generateCard(element));                   
        } );
    
}
