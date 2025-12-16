import { Component } from '@angular/core';
import { SimpleDatatable } from '../simple-datatable/simple-datatable';
import { EPerson } from '../../shared/interfaces/person';
import { DefaultTitleStrategy } from '@angular/router';

@Component({
  selector: 'app-component-output-example',
  imports: [SimpleDatatable],
  templateUrl: './component-output-example.html',
  styleUrl: './component-output-example.css',
})
export class ComponentOutputExample {
  showPersonClicked(person: EPerson) {
    alert(this.personTemplate(person));
  }

  personTemplate(person: EPerson){
    return `
    Person Details

    First name: ${person.givenName}
    Last Name: ${person.surName}
    Age: ${person.age}
    Email: ${person.email}
    Address: ${person.address}
    `
  }
}
