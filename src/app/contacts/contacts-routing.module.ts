import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contacts-list/contacts-list.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsCreateComponent } from './contacts-create/contacts-create.component';

const routes: Routes = [
  { path: '',
    component: ContactsComponent,
    children: [
      { path: '',    component: ContactListComponent },
      { path: 'create',    component: ContactsCreateComponent }
     // { path: ':id', component: CustomersDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ContactRoutingModule { }
