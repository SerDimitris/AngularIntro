import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Person } from './shared/interfaces/person';
import { PersonTable } from './components/person-table/person-table';
import { EventBindExample } from './components/event-bind-example/event-bind-example';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PersonTable, EventBindExample],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'example-3';

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

  users:Person[] =
  [
    {
      "givenName": "Samuel",
      "surName": "Rivera",
      "email": "samuel_rivera@yahoo.com",
      "age": 54,
      "address": "94641 High Street"
    },
    {
      "givenName": "Aiden",
      "surName": "Reed",
      "email": "aidenanthonyreed90@yahoo.com",
      "age": 26,
      "address": "68145 Madison Avenue"
    },
    {
      "givenName": "Alexis",
      "surName": "Martinez",
      "email": "alexis.martinez@live.com",
      "age": 72,
      "address": "5724 Maple Street"
    },
    {
      "givenName": "Amber",
      "surName": "Phillips",
      "email": "a_phillips@outlook.com",
      "age": 75,
      "address": "90003 River Road"
    },
    {
      "givenName": "Lillian",
      "surName": "White",
      "email": "lrwhite@yahoo.com",
      "age": 64,
      "address": "35527 George Street"
    },
    {
      "givenName": "Lillian",
      "surName": "Hill",
      "email": "l_hill@live.com",
      "age": 45,
      "address": "938 North Street"
    },
    {
      "givenName": "Abigail",
      "surName": "Patterson",
      "email": "ampatterson@live.com",
      "age": 67,
      "address": "107 Virginia Avenue"
    },
    {
      "givenName": "Evelyn",
      "surName": "Kelly",
      "email": "e_l_kelly@ymail.com",
      "age": 37,
      "address": "41 Main Street South"
    },
    {
      "givenName": "Sebastian",
      "surName": "Moore",
      "email": "sebastiandavidmoore@yahoo.com",
      "age": 43,
      "address": "5065 Broad Street"
    },
    {
      "givenName": "Erin",
      "surName": "James",
      "email": "erin_margaret@hotmail.com",
      "age": 26,
      "address": "8450 7th Street"
    }
  ]
}
