import { Component, input } from '@angular/core';
import { Pokemon } from '../../../core/class/pokemon';
import { CommonModule } from '@angular/common';
import { BlocStyleComponent } from '../bloc-style-component/bloc-style-component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-card-component',
  imports: [CommonModule, BlocStyleComponent],
  templateUrl: './pokemon-card-component.html',
  styleUrl: './pokemon-card-component.css',
})
export class PokemonCardComponent {
  pokemon = input.required<Pokemon>();

  constructor(
    private readonly router: Router
  ) {}

  navigateToDetails() {
    this.router.navigate(['/pokemons', this.pokemon().name]);
  }
}
