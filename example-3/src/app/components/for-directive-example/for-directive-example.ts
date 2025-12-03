import { Component } from '@angular/core';
import { Person } from '../../shared/interfaces/person';
import { PersonTable } from '../person-table/person-table';

@Component({
  selector: 'app-for-directive-example',
  imports: [PersonTable],
  templateUrl: './for-directive-example.html',
  styleUrl: './for-directive-example.css',
})
export class ForDirectiveExample {
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
