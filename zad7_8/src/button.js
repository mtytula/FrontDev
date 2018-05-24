export default class Button {
	constructor(text, action) {
		this.text = text;
		this.type = 'button';
		this.action = action;
	}

	create(className) {
		const button = document.createElement(this.type);
		button.innerText = this.text;
		button.setAttribute('class', className);
		button.addEventListener('click', this.action);
		return button;
	}
}
