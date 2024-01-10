function addInfo() {
	let country = prompt("Введите название страны");
	while (true) {
		if (!country || !Number.isNaN(country)) {
			country = prompt("Вы ввели некорректное значение. Введите название страны:");
		}
		else {
			break;
		}
	}
	let capital = prompt("Введите название столицы этой страны");
	while (true) {
		if (!capital || !Number.isNaN(capital)) {
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
	if (!country) {
		console.log("Вы не ввели название страны");
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
	if (!country) {
		console.log("Вы не ввели название страны");
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
