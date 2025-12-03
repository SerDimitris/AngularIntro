import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'example-3';

}
