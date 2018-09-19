import { Injectable } from '@angular/core';
import { AddContact, LoadContacts, RemoveContact, SelectContact, UpdateContact } from './state/contact.actions';
import { ContactModel } from './models/contact.model';
import { ContactSelectors } from './state/contact.selectors';
import { Observable } from 'rxjs/index';
import { Select, Store } from '@ngxs/store';

@Injectable()
export class ContactSandbox {
  @Select( ContactSelectors.selected ) contactSelected$: Observable<ContactModel>;

  @Select( ContactSelectors.entities ) contactsCollection$: Observable<ContactModel[]>;

  @Select( ContactSelectors.isLoading ) isLoading$: Observable<boolean>;

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

  selectContact( contact: ContactModel ) {
    this.store.dispatch( new SelectContact( contact ));
  }

  snapshot() {
    return this.store.snapshot().contact.selected;
  }
}
