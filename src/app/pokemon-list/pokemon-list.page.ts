import { PokemonNamesService } from './../pokemon-names.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
})
export class PokemonListPage implements OnInit {

  pokemon: string[] = [];
  searchQuery: string = '';

  constructor( public pokemonNames: PokemonNamesService) {
    pokemonNames.getPokemonNames().then(data =>{
      this.pokemon = data;
    })
  }

  // outputs the pokemon's pokedex number
  getNumber( num ): string {
    if( num < 10 ){
      return "00" + num;
    } else if ( num < 100 ){
      return "0" + num;
    } else {
      return num;
    }
  }

  // getPokemonNames - the filter function for the search bar
  getPokemonNames( event ){
    this.pokemonNames.getPokemonNames().then(data=>{
      let queryString = event.target.value;
      if( queryString !== undefined ){
        if( queryString.trim() == '') return;
        this.pokemonNames.getFilteredPokemonNames(queryString).then(data=>{
          this.pokemon = data;
        })
      }
    })
  }

  // resets the list after the search bar is cleared
  resetList( event ){
    this.pokemonNames.getPokemonNames().then( data =>{
      this.pokemon = data;
    })
  }

  // gotoPokemon - go to the pokemon's details page
  gotoPokemon( i ){
    console.log(i);
  }

  ngOnInit() {
  }

}
