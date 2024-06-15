import { Routes } from '@angular/router';
import { PokemonFormComponent } from './components/pokemon-form/pokemon-form.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

export const routes: Routes = [
    {
        path:'Formulario',
        component: PokemonFormComponent
    },
    {
        path:'Listado',
        component: PokemonListComponent
    }

];
