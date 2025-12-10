import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { ListGroupMenu } from './components/list-group-menu/list-group-menu';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, ListGroupMenu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'example-3';

}
