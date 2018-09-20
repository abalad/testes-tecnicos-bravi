import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { SocketService } from '../plugins/feathers/services/socket.service';
import { ContactModel } from '../../contact/models/contact.model';

@Injectable()
export class ContactResource {

  constructor( private _socket: SocketService ) {}

  getAll() {
    return from(this._socket.getService('people').find());
  }

  sort(sort) {
    return from(this._socket.getService('people').find({ query:{ $sort: sort } }) );
  }

  update(people) {
    return from(this._socket.getService('people').patch(people._id, people));
  }

  remove(people) {
    return from(this._socket.getService('people').remove(people._id));
  }

  add(people) {
    return from(this._socket.getService('people').create(people));
  }

  observe(trigger): Observable<any> {
    return new Observable<any>((observer) => {
      this._socket.getService('people').on(trigger, (data: ContactModel) => {
        observer.next(data);
      });
    });
  }
}
