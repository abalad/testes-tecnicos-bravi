// import { TestBed, async } from '@angular/core/testing';
// import { NgxsModule, Store } from '@ngxs/store';
// import { UsuarioState } from './usuario.state';
// import { UsuarioAction } from './usuario.actions';
//
// describe('Usuario actions', () => {
//   let store: Store;
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [NgxsModule.forRoot([UsuarioState])]
//     }).compileComponents();
//     store = TestBed.get(Store);
//   }));
//
//   it('should create an action and add an item', () => {
//     store.dispatch(new UsuarioAction('item-1'));
//     store.select(state => state.usuario.items).subscribe((items: string[]) => {
//       expect(items).toEqual(jasmine.objectContaining([ 'item-1' ]));
//     });
//   });
//
// });
