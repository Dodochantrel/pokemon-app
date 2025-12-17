import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from '../navigation/navigation-component/navigation-component';

@Component({
  selector: 'app-template',
  imports: [RouterOutlet, NavigationComponent],
  templateUrl: './template.html',
  styleUrl: './template.css',
})
export class Template {

}
