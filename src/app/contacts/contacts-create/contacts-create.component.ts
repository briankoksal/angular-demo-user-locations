import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-contacts-create',
  templateUrl: './contacts-create.component.html',
  styleUrls: ['./contacts-create.component.scss']
})


export class ContactsCreateComponent implements OnInit {


  name = new FormControl('');

  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // });

  items: FormArray;

  profileForm = this.fb.group({
    firstName: ['sdfsdf'],
    lastName: ['', [Validators.required, Validators.minLength(4)]],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['', Validators.minLength(5)]
    }),
    items: this.fb.array([
      this.createItem()
    ])
  });

  constructor(private fb: FormBuilder) { }


  ngOnInit() {
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  addItems() {
    //this.aliases.push(this.fb.control(''));
    this.items = this.profileForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }
  createItem(): FormGroup {
    return this.fb.group({
      name: '',
      description: '',
      price: ''
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  printFormsArrayValues(){

  }

}
