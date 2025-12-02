import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-person-table',
  imports: [],
  templateUrl: './person-table.html',
  styleUrl: './person-table.css',
})
export class PersonTable {
    person2 = signal ({
      givenName: "Maria",
      surName: "Zaxaropoulou",
      age: 20,
      email: "example@gmail.com"
    });
}
