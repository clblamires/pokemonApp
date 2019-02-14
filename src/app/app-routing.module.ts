import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'pokemon-list', loadChildren: './pokemon-list/pokemon-list.module#PokemonListPageModule' },
  { path: 'pokemon-details', loadChildren: './pokemon-details/pokemon-details.module#PokemonDetailsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
