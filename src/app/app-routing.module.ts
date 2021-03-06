import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'pokemon-list', pathMatch: 'full' },
  { path: 'home', redirectTo: 'pokemon-list', pathMatch: 'full' },
  { path: 'pokemon-list', loadChildren: './pokemon-list/pokemon-list.module#PokemonListPageModule' },
  { path: 'pokemon-details/:name', loadChildren: './pokemon-details/pokemon-details.module#PokemonDetailsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
