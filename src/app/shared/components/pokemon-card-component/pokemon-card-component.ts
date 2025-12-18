import { Component, input } from '@angular/core';
import { Pokemon } from '../../../core/class/pokemon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-card-component',
  imports: [CommonModule],
  templateUrl: './pokemon-card-component.html',
  styleUrl: './pokemon-card-component.css',
})
export class PokemonCardComponent {
  pokemon = input.required<Pokemon>();
}
