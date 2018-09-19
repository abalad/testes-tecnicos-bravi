import { Injectable, OnDestroy } from '@angular/core';
import { FeathersService } from './feathers.service';

import * as io from 'socket.io-client';
// import * as feathers from '@feathersjs/client';
// import * as socketio from '@feathersjs/socketio-client';
import { Subject, Subscription } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class SocketService extends FeathersService implements OnDestroy {

  public socket;

  private subscriptions: Subscription = new Subscription();

  constructor( ) {
    super();

    this.socket = io(environment.serverHost, {
      transports: ['websocket'],
      reconnectionAttempts: 5,
      timeout: 50000,
      reconnectionDelay: 10000
    });

    // this._app = feathers()
    //   .configure(socketio(this.socket, { timeout: 50000}));
  }

  on( event ) {
    const subject: Subject<any> = new Subject<any>();
    this.subscriptions.add(subject);

    this.socket.io.on( event , ( values ) => {
       subject.next( values );
    });
    return subject;
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
