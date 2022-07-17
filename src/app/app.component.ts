import { Component } from '@angular/core';
import { Product } from './product.model';
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
	color = 'rojo';
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

	products: Product[] = [
		{
			name: 'El mejor juguete',
			price: 565,
			image: './assets/images/toy.jpg',
			category: 'all',
		},
		{
			name: 'Bicicleta casi nueva',
			price: 356,
			image: './assets/images/bike.jpg',
		},
		{
			name: 'Colleción de albumnes',
			price: 34,
			image: './assets/images/album.jpg',
		},
		{
			name: 'Mis libros',
			price: 23,
			image: './assets/images/books.jpg',
		},
		{
			name: 'Casa para perro',
			price: 34,
			image: './assets/images/house.jpg',
		},
		{
			name: 'Gafas',
			price: 3434,
			image: './assets/images/glasses.jpg',
		},
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
