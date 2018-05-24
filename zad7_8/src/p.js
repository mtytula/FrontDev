export default class P {
	constructor() {
		this.type = 'p';
	}

	create(text) {
		const p = document.createElement(this.type);
		p.innerText = text;
		return p;
	}
}
