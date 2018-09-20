import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactModel } from '../../models/contact.model';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.scss']
})
export class ContactDialogComponent implements OnInit {

  form: FormGroup;

  constructor( private fb: FormBuilder ) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: [ '', [ Validators.required ] ],
      lastName: [ '', [ Validators.required ] ],
      contacts: this.fb.group({
        email: [ '', [ Validators.required ] ],
        phone: [ '', [] ],
        whatsapp: [ '', [] ],
      })
    });
  }


  onSubmit( contact: ContactModel ){
    console.log(contact)
  }

}
