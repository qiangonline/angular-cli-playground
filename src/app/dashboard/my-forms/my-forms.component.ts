import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Address } from './address';

@Component({
  selector: 'app-my-forms',
  templateUrl: './my-forms.component.html',
  styleUrls: ['./my-forms.component.scss']
})
export class MyFormsComponent implements OnInit {

  userForm: FormGroup;

  get secretLairs(): FormArray {
    return (this.userForm.get('secretLairs') as FormArray);
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      secretLairs: this.fb.array([this.fb.group(new Address())])
    })

    this.userForm.get('name').valueChanges.subscribe(e => {
      console.log(e);
    });

    this.userForm.get('secretLairs').valueChanges.subscribe(e => {
      console.log(e);
    });
  }

  submit() {
    console.log(this.userForm.value);
  }

  addAdress() {
    this.secretLairs.push(this.fb.group(new Address()));
  }

  removeAdress(i) {
    this.secretLairs.removeAt(i);
  }


}
