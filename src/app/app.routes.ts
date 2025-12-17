import { Routes } from '@angular/router';
import { Template } from './core/template/template';

export const routes: Routes = [
    {
        path: '',
        component: Template,
        children: [
            {
                path: '',
                title: 'Pokemons',
                loadComponent: () => import('./features/pokemons/pokemons-page/pokemons-page').then(m => m.PokemonsPage)
            }
        ]
    }
];
