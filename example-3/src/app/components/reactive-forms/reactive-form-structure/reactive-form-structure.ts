import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'

@Component({
  selector: 'app-reactive-form-structure',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form-structure.html',
  styleUrl: './reactive-form-structure.css',
})
export class ReactiveFormStructure {

  userForm = new FormGroup({ 
    givenName: new FormControl('', Validators.required),
    surName: new FormControl('', Validators.required),
    age: new FormControl(18, [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.min(18),
      Validators.max(100)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    address: new FormControl('', Validators.required)
  })

  onSubmit(value: any) {
    console.log(value);
  }
}
