export default class Div {
	constructor() {
		this.type = 'div';
	}

	create(className) {
		const div = document.createElement(this.type);
		div.setAttribute('class', className);
		return div;
	}
}
