export class ContactModel {
  name: string;
  lastName: string;
  age: number;
  contacts: ContactsModel
}

export class ContactsModel {
  phone: string;
  email: string;
  whatsapp:string;
}

