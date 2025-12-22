import { Component, input } from '@angular/core';

@Component({
  selector: 'app-bloc-style-component',
  imports: [],
  templateUrl: './bloc-style-component.html',
  styleUrl: './bloc-style-component.css',
})
export class BlocStyleComponent {
  isFullHeight = input<boolean>(false);
}
