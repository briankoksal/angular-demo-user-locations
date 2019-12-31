import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contacts-list/contacts-list.component';
import { ContactRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsCreateComponent } from './contacts-create/contacts-create.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContactListComponent, ContactsComponent, ContactsCreateComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContactModule { }
