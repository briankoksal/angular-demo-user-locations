import { Component, OnInit } from '@angular/core';
import { Contact, ContactsService } from '../contacts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts: Observable<Contact[]>;

  constructor(private contactService: ContactsService){
    this.contacts = this.contactService.getContacts();
  }

  ngOnInit() {
  }

}
