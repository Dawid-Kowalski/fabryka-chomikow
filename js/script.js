let hamsterNameHTML = document.getElementById("hamster-name");
let hamsterAgeHTML = document.getElementById("hamster-age");
let hamsterTypeHTML = document.getElementById("hamster-type");

let hamsterTemplate = document.getElementById("hamster-template").innerHTML;

let cageHTML = document.getElementById("cage");

let cage = {allHamster: []};

function Hamster(name, age, type) {
	this.name = name;
	this.age = age;
	this.type = type;
}

function goToCage() {
	let hamsterName = document.getElementById("hamster-name").value;
	let hamsterAge = document.getElementById("hamster-age").value;
	let hamsterType = document.getElementById("hamster-type").value;

	let hamster = new Hamster(hamsterName, hamsterAge, hamsterType);

	cage.allHamster.push(hamster);

	addHamster();
}

function addHamster() {

	cageHTML.removeChild(cageHTML.firstChild);

	let results = document.createElement("div");
	cageHTML.appendChild(results);

	let generatedHamster = Mustache.render(hamsterTemplate, cage);
	results.insertAdjacentHTML("beforeend", generatedHamster);
}


