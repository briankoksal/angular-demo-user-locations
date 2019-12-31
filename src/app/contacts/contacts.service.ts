import { Injectable, OnDestroy } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


export class Contact {
  constructor(public id: number, public name: string) { }
}

const CONTACTS: Contact[] = [
  new Contact(11, 'Julian'),
  new Contact(12, 'Eric'),
  new Contact(13, 'Momi'),
  new Contact(14, 'Madeleine'),
  new Contact(15, 'Seth'),
  new Contact(16, 'Teresa')
];

const FETCH_LATENCY = 500;

/** Simulate a data service that retrieves heroes from a server */
@Injectable({
  providedIn: 'root'
})
export class ContactsService implements OnDestroy {

  constructor() { console.log('CustomersService instance created.'); }
  ngOnDestroy() { console.log('CustomersService instance destroyed.'); }

  getContacts(): Observable<Contact[]>  {
    return of(CONTACTS).pipe(delay(FETCH_LATENCY));
  }

  getContact(id: number | string): Observable<Contact> {
    const customer$ = of(CONTACTS.find(contact => contact.id === +id));
    return customer$.pipe(delay(FETCH_LATENCY));
  }
}
