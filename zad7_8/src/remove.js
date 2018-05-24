import readLocalStorage from './readLocalStorage';

export default function removeCity(button) {
	const removeCity = button.parentNode.firstChild.textContent;
	const sure = confirm('Are you sure you want to delete: "' + removeCity + '" ?');
	if (sure) {
		button.parentNode.remove();
		if (readLocalStorage() != null) {
			const array = readLocalStorage();
			const idDeletingCity = array.indexOf(removeCity);
			if (idDeletingCity != -1) {
				array.splice(idDeletingCity, 1);
				localStorage.setItem('cityTemperature', JSON.stringify(array));
			}
		}
	}
}
