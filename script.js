function addInfo() {
	let country = prompt("Введите название страны");
	let capital = prompt("Введите название столицы этой страны");
	addСountry(country, capital);
}
function getInfo () {
	let country = prompt("Введите название страны");
	console.log(getcountryInfo(country));
}
function getAllInfo () {
	console.log(listСountries());
}
function delInfo () {
	let country = prompt("Введите название страны");
	if (country in countries ) {
		deleteСountry(country);
		console.log(country + ' удалена');
	}
	else {
		console.log('Такой страны нет в списке');
	}
}