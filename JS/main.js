
const enterName = document.querySelector('.enterName');
const aName = document.querySelector('.aName');
const aGuestInput = document.querySelector('.aGuests');
const button = document.querySelector('.ivest');
const list = document.querySelector('.listPrint');
const finalList = document.querySelector('.finalList')
var counterText = document.querySelector('.aCounter');
var count, cureent = 1;
var guestList = {};

button.addEventListener('click', addGuests);
aGuestInput.addEventListener("keyup", function (event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		addGuests();
	}
});

aName.addEventListener("keyup", function (event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		enterGuestName();
	}
});


finalList.style.visibility = "hidden";

function addGuests() {
	count = document.querySelector('.aGuests').value;

	if (count > 0 & count >= cureent) {
		button.disabled = true;
		counterText.textContent = 'Įveskite svečią Nr: 1 iš ' + count + ' galimų';
		document.querySelector('.enterName').disabled = false;
		document.querySelector('.aName').disabled = false;
		aName.focus();
	}
	else {
		counterText.textContent = 'Neteisingai įvestas skaičius';
	}
}


function doReset() {
	var child = list.lastElementChild;
	while (child) {
		list.removeChild(child);
		child = list.lastElementChild;
	}

	enterName.disabled = true;
	aName.disabled = true;
	button.disabled = false;
	document.querySelector('.aName').value = '';
	document.querySelector('.aGuests').value = '';
	counterText.textContent = 'Įveskite svečio vardą';
	aGuestInput.focus();
}

function enterGuestName() {
	let aRecord = document.querySelector('.aName').value;

	if (aRecord != "" & (Object.keys(guestList).length < count)) {
		counterText.textContent = 'Įveskite svečią Nr: ' + (Object.keys(guestList).length + 2) + ' iš ' + count + ' galimų';
		guestList[Object.keys(guestList).length + 1] = aRecord;
		document.querySelector('.aName').value = '';
	}

	if (Object.keys(guestList).length == count) {
		counterText.textContent = 'Visi svečiai įvesti';
		enterName.disabled = true;
		finalList.style.visibility = "visible";
		const values = Object.values(guestList);
		console.log(values);
		for (let i = 0; i < values.length; i++) {
			list.innerHTML += '<li>' + (i + 1) + ': ' + values[i] + '</li>';
		}
	}
}