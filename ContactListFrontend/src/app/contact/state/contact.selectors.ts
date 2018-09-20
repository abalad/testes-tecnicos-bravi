import { ContactState, ContactStateModel } from './contact.state';
import { Selector } from '@ngxs/store';
import { NgxsEntitySelector } from '../../shared/plugins/ngrx-entity/ngxs-entity.selector';

export class ContactSelectors {
  @Selector([ContactState.entities])
  static entities(entities: ContactStateModel['entities']) {
    return new NgxsEntitySelector().getEntities( entities );
  }

}
