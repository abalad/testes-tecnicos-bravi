import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ContactSandbox } from '../../contact.sandbox';
import { ContactDialogComponent } from '../contact-dialog/contact-dialog.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactsCollection$ = this.contactSandbox.contactsCollection$;

  private descSort = false;

  constructor(
    private contactSandbox: ContactSandbox,
    public dialog: MatDialog
  ){}

  ngOnInit() {
    this.contactSandbox.loadContacts();
  }

  updateContact( contact ){
    const dialogRef = this.dialog.open(ContactDialogComponent,{
      height: '500px',
      data: contact,
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if( this.isValidResult(result) ){
        this.contactSandbox.updateContact( result )
      }
    });
  }

  removeContact( contact ){
    this.contactSandbox.removeContact( contact );
  }

  addContact(){
    const dialogRef = this.dialog.open(ContactDialogComponent,{
      height: '500px',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if( this.isValidResult(result) ){
        this.contactSandbox.addContact( result )
      }
    });
  }

  sortContact(){
    this.descSort = !this.descSort;
    this.contactSandbox.sortContact( {  name: this.descSort ? - 1 : 1  } );
  }

  isValidResult( result ){
    return typeof result !== 'boolean' && result;
  }

}
