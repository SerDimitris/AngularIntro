import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { PersonTable } from '../person-table/person-table';

@Component({
  selector: 'app-component-input-example',
  imports: [PersonTable],
  templateUrl: './component-input-example.html',
  styleUrl: './component-input-example.css',
})
export class ComponentInputExample {
  person1 : Person = {
    givenName: "name1",
    surName: "surname1",
    age: 1,
    email: "example1@gmail.com",
    address: "athens1"
  }

    person2 : Person = {
    givenName: "name2",
    surName: "surname2",
    age: 2,
    email: "example2@gmail.com",
    address: "athens2"
  }
}
