import { PokemonService } from './../pokemon.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.page.html',
  styleUrls: ['./pokemon-details.page.scss'],
})
export class PokemonDetailsPage implements OnInit {

  name: string;
  pokemonInfo: any;

  constructor( public route: ActivatedRoute, public pokemon: PokemonService ) { 
    this.loadPokemon();
  }

  capitalize( name ){
    return name.substring(0,1).toUpperCase() + name.substring(1);
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.loadPokemon();
  }

  loadPokemon(){
    this.name = this.route.snapshot.paramMap.get("name");
    this.pokemon.getPokemon(this.name).then(data => {
      this.pokemonInfo = data;
    });
  }

}
