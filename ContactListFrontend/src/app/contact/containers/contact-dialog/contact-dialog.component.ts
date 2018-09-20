import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactModel } from '../../models/contact.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.scss']
})
export class ContactDialogComponent implements OnInit {

  form = this.fb.group({
    _id: [ null, [] ],
    name: [ '', [ Validators.required ] ],
    lastName: [ '', [ Validators.required ] ],
    contacts: this.fb.group({
      email: [ '', [ Validators.required ] ],
      phone: [ '', [] ],
      whatsapp: [ '', [] ],
    })
  });

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ContactDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  ngOnInit() {
    if(this.data){
      this.form.patchValue(this.data);
    }
  }

  onSubmit( contact: ContactModel ){
    this.dialogRef.close( contact );
  }

}
