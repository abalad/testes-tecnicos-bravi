import { Injectable } from '@angular/core';
import {
  AddContact,
  LoadContacts,
  RemoveContact,
  SortContact,
  UpdateContact
} from './state/contact.actions';
import { ContactModel } from './models/contact.model';
import { ContactSelectors } from './state/contact.selectors';
import { Observable } from 'rxjs/index';
import { Select, Store } from '@ngxs/store';

@Injectable()
export class ContactSandbox {
  @Select( ContactSelectors.entities ) contactsCollection$: Observable<ContactModel[]>;

  constructor( private store: Store ) {}

  loadContacts() {
    this.store.dispatch( new LoadContacts() );
  }

  addContact( contact: ContactModel ) {
    this.store.dispatch( new AddContact(contact) );
  }

  updateContact( contact: ContactModel ) {
    this.store.dispatch( new UpdateContact( contact ) );
  }

  removeContact( contact: ContactModel ) {
    this.store.dispatch( new RemoveContact( contact ) );
  }

  sortContact( sort ) {
    this.store.dispatch( new SortContact( sort ));
  }
}
