/* довольно примитивные способы сделать анимацию, возможно не совсем правильные, но хотя бы работает
animation-dalay не сработал */

let jungle = document.querySelector("#jungle");
let card = document.querySelector("#card");

function addDisplay() {
	jungle.classList.add("jungle1");
	card.classList.add("card1");

}

setInterval(addDisplay, 2000);

	//пытался скрыть дисплей при маленьком экране, но не получилось
function removeDisplay () {
	let w = window.innerWidth
	if (w < 425) {
	 return	jungle.classList.remove("jundle1");
	}
}

removeDisplay();