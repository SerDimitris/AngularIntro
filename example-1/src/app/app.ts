import { Component, signal } from '@angular/core';
import { PersonTable } from './components/person-table/person-table';


@Component({
  selector: 'app-root',
  imports: [PersonTable],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('1st Example of Angular');

  person = signal({
    givenName: "Dimitris",
    surName: "Serafeimidis",
    age: 38,
    email: "d.serafeimidis@gmail.com"
  });
}
