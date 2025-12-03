import { Component, Input } from '@angular/core';
import { Person } from '../../shared/interfaces/person';

@Component({
  selector: 'app-person-table',
  imports: [],
  templateUrl: './person-table.html',
  styleUrl: './person-table.css',
})
export class PersonTable {
  @Input() person: Person | undefined
}
