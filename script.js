function addInfo() {
	let country = prompt("Введите название страны");
	while (true) {
		if (!country || !isNaN(Number(country)) || (country.trim() === "")) {
			country = prompt("Вы ввели некорректное значение. Введите название страны:");
		}
		else {
			break;
		}
	}
	let capital = prompt("Введите название столицы этой страны");
	while (true) {
		if (!capital || !isNaN(Number(capital)) || (capital.trim() === "")) {
			capital = prompt("Вы ввели некорректное значение. Введите название cтолицы:");
		}
		else {
			break;
		}
	}
	addСountry(country, capital);
}


function getInfo() {
	let country = prompt("Введите название страны");
	if (!country || !isNaN(Number(country)) || (country.trim() === "")) {
		console.log("Вы не ввели название страны или название некорректно");
	}
	else {
		console.log(getcountryInfo(country));
	}
}
function getAllInfo() {
	console.log(listСountries());
}
function delInfo() {
	let country = prompt("Введите название страны");
	if (!country || !isNaN(Number(country)) || (country.trim() === "")) {
		console.log("Вы не ввели название страны или название некорректно");
	}
	else {
		if (country in countries) {
			deleteСountry(country);
			console.log(country + ' удалена');
		}
		else {
			console.log('Такой страны нет в списке');
		}
	}

}
