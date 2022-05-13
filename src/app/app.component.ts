import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	input = '';
	inputName = '';
	name = 'Jorge';
	age = 23;
	img =
		'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Platzi.jpg/800px-Platzi.jpg';
	btnDisabled = true;
	person = {
		name: 'Jesús',
		age: 23,
		avatar:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Platzi.jpg/800px-Platzi.jpg',
	};

	names: string[] = [
		'Jorge',
		'Juan',
		'Pedro',
		'Pablo',
		'Ricardo',
		'Raul',
		'Sergio',
	];

	btnToggle() {
		this.btnDisabled = !this.btnDisabled;
	}

	agePlus() {
		this.age++;
	}

	onScroll(e: Event) {
		const element = e.target as HTMLElement;
		console.log(element.scrollTop);
	}

	onChange(e: Event) {
		this.input = (e.target as HTMLInputElement).value;
	}

	addNameToArray(e: Event) {
		if (this.inputName !== '') {
			this.names.push(this.inputName);
			this.inputName = '';
		} else {
			alert('El nombre no puede estar vacío');
		}
	}

	onDeleteName(index: number) {
		this.names.splice(index, 1);
	}
}
