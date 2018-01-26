import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	name: string;
	lastname: string;
	email: string;
	website: string;
	hobbies: string[];
	stateHobbies: boolean;

	constructor()
	{
		this.name = 'Abelito';
		this.hobbies = ['first', 'second', 'third', 'fourth'];
		this.email= 'abellimac@gmail.com';
		this.website = 'http://www.roonbo.com';
		this.stateHobbies = true;
	}

	showHobbies()
	{
		return this.stateHobbies;
	}

	toogleHobbies()
	{
		this.stateHobbies = !this.stateHobbies
		return !this.stateHobbies;
	}

	newHobby(newHobby)
	{
		console.log(newHobby.value);
		this.hobbies.push(newHobby.value);
		newHobby.value = '';
		return false;
	}
}