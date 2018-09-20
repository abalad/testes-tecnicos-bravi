import { ContactModel } from '../models/contact.model';

export class SelectContact {
  static readonly type = '[Contact] Select Contact';
  constructor( public payload: ContactModel ) {}
}

export class LoadContacts {
  static readonly type = '[Contact] Load Contacts';
}

export class LoadContactsSuccess {
  static readonly type = '[Contact] Load Contacts Success';
  constructor(public payload: ContactModel[]) {}
}

export class AddContact {
  static readonly type = '[Contact] Add Contact';
  constructor( public payload: ContactModel ) {}
}

export class AddContactSuccess {
  static readonly type = '[Contact] Contact INCLUIDO com sucesso';
  constructor( public payload: ContactModel ) {}
}

export class UpdateContact {
  static readonly type = '[Contact] Update Contact';
  constructor( public payload: ContactModel ) {}
}

export class UpdateContactSuccess {
  static readonly type = '[Contact] Contact ALTERADO com sucesso';
  constructor( public payload: ContactModel ) {}
}

export class RemoveContact {
  static readonly type = '[Contact] Delete Contact';
  constructor( public payload: ContactModel ) {}
}

export class RemoveContactSuccess {
  static readonly type = '[Contact] Contact Removido com sucesso';

  constructor( public payload: ContactModel) {}
}

export class ListenAddContact {
  static readonly type = '[Contact] Recebe Inclusao de Contact Realtime';
}

export class ListenRemoveContact {
  static readonly type = '[Contact] Recebe Alteração de Contact Realtime';
}

export class ListenUpdateContact {
  static readonly type = '[Contact] Recebe Exclusao de Contact Realtime';
}

export class SortContact {
  static readonly type = '[Contact] Sort Contact';
  constructor( public payload: any ) {}
}

export class SortContactSuccess {
  static readonly type = '[Contact] Sort Contact Success';
  constructor(public payload: ContactModel[]) {}
}


export class OnError {
  static readonly type = '[Contact] Erro na manutenção de contact';
  constructor(public payload: string) {}
}
