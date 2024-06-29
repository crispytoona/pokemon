import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private title: string = "Pokemon App";

  constructor() { }

  ngOnInit(): void {
    // Initialization code goes here, such as fetching initial data
  }
/*
  async fetchData() {
    try {
      const pokemonNameInput = document.getElementById("pokemonName") as HTMLInputElement;
      if (!pokemonNameInput) {
        throw new Error("Pokemon name input element not found");
      }

      const pokemonName = pokemonNameInput.value.toLowerCase();
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

      if (!response.ok) {
        throw new Error("Could not find resource");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
*/
}