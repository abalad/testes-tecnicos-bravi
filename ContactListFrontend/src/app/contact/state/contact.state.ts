import { State, StateContext, Action, Selector, Store } from '@ngxs/store';
import { ContactModel } from '../models/contact.model';
import {
  AddContact,
  AddContactSuccess, ListenAddContact, ListenRemoveContact, ListenUpdateContact,
  LoadContacts,
  LoadContactsSuccess,
  OnError,
  RemoveContact,
  RemoveContactSuccess, SelectContact, SortContact, SortContactSuccess,
  UpdateContact,
  UpdateContactSuccess
} from './contact.actions';
import { catchError, map } from 'rxjs/internal/operators';
import { NgxsEntityStateModel } from '../../shared/plugins/ngrx-entity/ngxs-entity.state.model';
import { NgxsEntityAdapter } from '../../shared/plugins/ngrx-entity/ngxs-entity.adapter';
import { ContactResource } from '../../shared/resources/contact.resource';

export class ContactStateModel extends NgxsEntityStateModel<ContactModel> {}

@State<ContactStateModel>({
  name: 'contact',
  defaults: {
    ids: [],
    entities: {},
    selected: null
  }
})
export class ContactState {

  @Selector()
  static entities(state: ContactStateModel) {
    return state.entities;
  }

  constructor( private contactResource: ContactResource, private store: Store ) {
    this.contactResource.observe('created').subscribe(( contact: ContactModel ) => {
      this.store.dispatch( new AddContactSuccess( contact ) );
    });
    this.contactResource.observe('patched').subscribe(( contact: ContactModel ) => {
      this.store.dispatch( new UpdateContactSuccess( contact ) );
    });
    this.contactResource.observe('removed').subscribe(( contact: ContactModel ) => {
      this.store.dispatch( new RemoveContactSuccess( contact ) );
    });
  }

  @Action(SelectContact)
  selectContact( { patchState, getState }: StateContext<ContactStateModel>, { payload }: SelectContact ) {
    patchState( {
      ...getState,
      selected: payload
    });
  }

  @Action(LoadContacts)
  loadContact( ctx: StateContext<ContactStateModel> ) {
    return this.contactResource.getAll().pipe(
      map( ( contact: ContactModel[] ) => ctx.dispatch( new LoadContactsSuccess( contact['data']) ) ),
      catchError( ( error ) => ctx.dispatch( new OnError( error ) ) )
    );
  }

  @Action(LoadContactsSuccess)
  loadContactSuccess( ctx: StateContext<ContactStateModel>, { payload }: LoadContactsSuccess ) {
    NgxsEntityAdapter.addAll( payload, ctx );
  }

  @Action(AddContact)
  addContact( ctx: StateContext<ContactStateModel>, action: AddContact ) {
    return this.contactResource.add(action.payload).pipe(
      map( ( contact: ContactModel ) => ctx.dispatch( new AddContactSuccess( contact ) ) ),
      catchError( ( error ) => ctx.dispatch( new OnError( error ) ) )
    );
  }

  @Action(AddContactSuccess)
  addContactSuccess( ctx: StateContext<ContactStateModel>, { payload }: AddContactSuccess ) {
    NgxsEntityAdapter.addOne( payload, ctx );
  }

  @Action(UpdateContact)
  updateContact( ctx: StateContext<ContactStateModel>, action: UpdateContact ) {
    return this.contactResource.update(action.payload).pipe(
      map( ( contact: ContactModel ) => ctx.dispatch( new UpdateContactSuccess( contact ) ) ),
      catchError( ( error ) => { console.log(error); return ctx.dispatch( new OnError( error ) ); } )
    );
  }

  @Action(UpdateContactSuccess)
  updateContactSuccess( ctx: StateContext<ContactStateModel>, { payload }: UpdateContactSuccess ) {
    NgxsEntityAdapter.updateOne( payload, ctx );
  }

  @Action(RemoveContact)
  removeContact( ctx: StateContext<ContactStateModel>, action: RemoveContact ) {
    return this.contactResource.remove(action.payload).pipe(
      map( ( contact: ContactModel ) => ctx.dispatch( new RemoveContactSuccess( contact ) ) ),
      catchError( ( error ) => ctx.dispatch( new OnError( error ) ) )
    );
  }

  @Action(RemoveContactSuccess)
  removeContactSuccess( ctx: StateContext<ContactStateModel>, { payload }: RemoveContactSuccess ) {
    NgxsEntityAdapter.removeOne( payload, ctx );
  }

  @Action(SortContact)
  sortContact( ctx: StateContext<ContactStateModel>, action: SortContact ) {
    return this.contactResource.sort(action.payload).pipe(
      map( ( contact: ContactModel[] ) => ctx.dispatch( new SortContactSuccess( contact['data'] ) ) ),
      catchError( ( error ) => ctx.dispatch( new OnError( error ) ) )
    );
  }

  @Action(SortContactSuccess)
  sortContactSuccess( ctx: StateContext<ContactStateModel>, { payload }: SortContactSuccess ) {
    NgxsEntityAdapter.addAll( payload, ctx );
  }

  @Action(ListenAddContact)
  listenAddContact( ctx: StateContext<ContactStateModel> ) {
    return this.contactResource.observe('created').subscribe(( contact: ContactModel ) => {
      NgxsEntityAdapter.addOne( contact, ctx );
    });
  }

  @Action(ListenUpdateContact)
  listenUpdateContact( ctx: StateContext<ContactStateModel> ) {
    return this.contactResource.observe('patched').subscribe(( contact: ContactModel ) => {
      NgxsEntityAdapter.updateOne( contact, ctx );
    });
  }

  @Action(ListenRemoveContact)
  listenRemoveContact( ctx: StateContext<ContactStateModel> ) {
    return this.contactResource.observe('removed').subscribe(( contact: ContactModel ) => {
      NgxsEntityAdapter.removeOne( contact, ctx );
    });
  }

  @Action(OnError)
  onErrorContact( ctx: StateContext<ContactStateModel>, { payload }: OnError ) {
    console.log( payload )
  }

}
