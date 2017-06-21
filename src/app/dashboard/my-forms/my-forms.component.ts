import { Component, OnInit, AfterViewChecked, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';

import { User } from './user';
import { Address } from './address';
import { Contact } from './contact'

@Component({
  selector: 'app-my-forms',
  templateUrl: './my-forms.component.html',
  styleUrls: ['./my-forms.component.scss']
})
export class MyFormsComponent implements OnInit, AfterViewChecked {

  userForm: FormGroup;

  contact: Contact;

  @ViewChild('contactForm')
  contactForm: NgForm;

  theContactForm: NgForm;

  contactFormErrors = {
    tel: '',
    add: ''
  }
  validationMessages = {
    tel: {
      required: 'required',
      minlength: 'at least 3 characters',
      maxlength: 'at most 12'
    },
    add: {
      required: 'required'
    }
  }

  get secretLairs(): FormArray {
    return (this.userForm.get('secretLairs') as FormArray);
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      secretLairs: this.fb.array([this.fb.group({ ...new Address() })])
    })

    this.userForm.get('name').valueChanges.subscribe(e => {
      console.log(e);
    });

    this.userForm.get('secretLairs').valueChanges.subscribe(e => {
      console.log(e);
    });

    this.contact = new Contact();
  }

  ngAfterViewChecked() {
    debugger;
    if (this.theContactForm === this.contactForm) { return; }
    this.theContactForm = this.contactForm;
    this.theContactForm.valueChanges.subscribe(data => this.contactFormChanged(data))
  }

  contactFormChanged(data) {
    debugger
    const form = this.theContactForm.form;
    for (let key in this.contactFormErrors) {
      this.contactFormErrors[key] = '';
      let control = form.get(key);
      if (control && control.dirty && control.invalid) {
        const messages = this.validationMessages[key];
        let messageItems = [];
        for (let k in control.errors) {
          messageItems.push(messages[k]);
        }
        this.contactFormErrors[key] = messageItems.join(',');
      }
    }

  }

  submit() {
    console.log(this.userForm.value);

    const user = new User(
      0,
      this.userForm.get('name').value as string,
      this.userForm.get('secretLairs').value as Address[]
    )

    console.log(user);
    return user;
  }

  addAdress() {
    this.secretLairs.push(this.fb.group({ ...new Address() }));
  }

  removeAdress(i) {
    this.secretLairs.removeAt(i);
  }


}
