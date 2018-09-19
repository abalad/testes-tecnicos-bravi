import { Component, OnInit } from '@angular/core';
import { ContactSandbox } from '../../contact.sandbox';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactsCollection$ = this.contactSandbox.contactsCollection$;

  constructor( private contactSandbox: ContactSandbox ){}

  ngOnInit() {
  this.contactSandbox.loadContacts();
}

}
