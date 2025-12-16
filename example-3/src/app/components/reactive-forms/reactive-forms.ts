import { Component } from '@angular/core';
import { ReactiveFormStructure } from './reactive-form-structure/reactive-form-structure';
import { PersonTable } from '../person-table/person-table';
import { SimpleDatatable } from '../simple-datatable/simple-datatable';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormStructure, PersonTable, SimpleDatatable],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.css',
})
export class ReactiveForms {

}
