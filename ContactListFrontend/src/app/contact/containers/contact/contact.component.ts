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

  constructor( private contactSandbox: ContactSandbox, public dialog: MatDialog){}

  ngOnInit() {
    this.contactSandbox.loadContacts();
    this.contactsCollection$.subscribe((values)=>{
      console.log(values)
    })
  }

  addContact(){
    const dialogRef = this.dialog.open(ContactDialogComponent,{
      height: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if( typeof result !== 'boolean'){
        this.contactSandbox.addContact( result )
      }
    });
  }

}
