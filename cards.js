var create = document.getElementById("createButton");
var userInput = document.getElementById("userInput");
var cardHolder = document.getElementById("cardHolder");

function cardCreator() {
	let cardStart = '<div class="card">';
	let cardUserContent = '<h1>' + userInput.value + '</h1>';
	let cardDelete = '<button id="delete">Delete</button>';
	let cardEnd = '</div>';
	let card = cardStart + cardUserContent + cardDelete + cardEnd;
	cardHolder.innerHTML += card;

}


function enterHandler(event) {
	if (event.keyCode === 13) {
		cardCreator();
	}
}


function cardDelete(event) {
	if (event.target.innerHTML === "Delete") {
		console.log("delete innerHTML Test Works");
		event.target.parentElement.remove();       //THIS LINE IS HOW TO REMOVE THE PARENT OF THE DELETE BUTTON

	}	
		console.log("deleteEvent", event);
}




create.addEventListener("click", cardCreator);
userInput.addEventListener("keydown", enterHandler);
cardHolder.addEventListener("click", cardDelete)