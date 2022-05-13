// Copyright (c) 2022 Jorge de Jesus Perez Lopez
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const username: string = 'Jorge';
const sum = (a: number, b: number) => {
	return a + b;
};

sum(1, 2);

class Person {
	age: number;
	lastName: string;
	constructor(age: number, lastName: string) {
		this.age = age;
		this.lastName = lastName;
	}
}

const jorge = new Person(23, 'Perez');

jorge.lastName;
