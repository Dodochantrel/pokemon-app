import { Component, OnInit } from '@angular/core';
import { PokemonDetailsService } from '../pokemon-details-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-details-page',
  imports: [],
  templateUrl: './pokemon-details-page.html',
  styleUrl: './pokemon-details-page.css',
})
export class PokemonDetailsPage implements OnInit {
  constructor(protected readonly pokemonDetailsService: PokemonDetailsService, private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const name = this.activatedRoute.snapshot.paramMap.get('name');
    if (name) {
      this.pokemonDetailsService.name.set(name);
    }
  }
}
