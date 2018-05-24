export default function readLocalStorage() {
	return JSON.parse(localStorage.getItem('cityTemperature'));
}
