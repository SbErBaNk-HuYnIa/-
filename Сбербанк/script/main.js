function number() {
	let numer = document.getElementById('phone-number').value
	document.getElementById('money-number').innerHTML = numer;
	document.getElementById('money-number-user').innerHTML = numer;
	document.getElementById('place_1').innerHTML = numer;
}

function money() {
	let money = document.getElementById('money-phone').value
	document.getElementById('money-confirm').innerHTML = money;
	document.getElementById('place_2').innerHTML = money + ' ₽';
}

let clickButton1 = document.getElementById('click-button1');
clickButton1.onclick = function () {
	let sec2 = document.getElementsByClassName('sec2');
	style = sec2[0].style;
	style.zIndex = '10';
}

let clickButton2 = document.getElementById('click-button2');
clickButton2.onclick = function () {
	let sec3 = document.getElementsByClassName('sec3');
	style = sec3[0].style;
	style.zIndex = '15';
}

let clickButton3 = document.getElementById('click-button3');
clickButton3.onclick = function () {
	let sec4 = document.getElementsByClassName('sec4');
	style = sec4[0].style;
	style.zIndex = '20';
}

let operation = document.getElementById('operation');
operation.onclick = function () {
	let operationImage = document.getElementsByClassName('operation-image');
	style = operationImage[0].style;
	style.display = 'block';
}