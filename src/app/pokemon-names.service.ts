import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class PokemonNamesService {

  data : any = null;

  constructor( public http: Http ) { }

  load () {
    if( this.data ){
      return Promise.resolve(this.data);
    }

    return new Promise( resolve => {
      this.http.get("/assets/data/pokedex.json")
        .map( res => res.json() )
        .subscribe( data => {
          this.data = data;
          resolve(this.data);
        })

    });
  }

  getPokemonNames(){
    return this.load().then( data => {
      return data;
    })
  }

  getFilteredPokemonNames(q){
    return this.load().then(thePokemonNames=>{
      let filteredPokemonNames = [];
      for( let p of thePokemonNames ){
        if( p.name.english.toLowerCase().indexOf(q.toLowerCase()) > -1 ){
          filteredPokemonNames.push(p);
        }
      }
      return filteredPokemonNames;
    })
  }
}
