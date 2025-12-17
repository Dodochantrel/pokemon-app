import { Component } from '@angular/core';
import { PokemonsService } from '../pokemons-service';
import { PokemonCardComponent } from '../../../shared/components/pokemon-card-component/pokemon-card-component';

@Component({
  selector: 'app-pokemons-page',
  imports: [PokemonCardComponent],
  templateUrl: './pokemons-page.html',
  styleUrl: './pokemons-page.css',
})
export class PokemonsPage {
  constructor(protected readonly pokemonsService: PokemonsService) {}
}
