import { State, StateContext, NgxsOnInit, Action } from '@ngxs/store';
import { MatSnackBar } from '@angular/material';

import { SocketService } from '../services/socket.service';
import {
  ConnectTimeout,
  Disconnect,
  Error,
  ReconnectAttempt,
  ReconnectFailed,
  ReconnectMessage
} from './messages.actions';

@State({
  name: 'messages'
})
export class MessagesState implements NgxsOnInit {

  constructor( private socketService: SocketService, private snackBar: MatSnackBar ) {}

  ngxsOnInit( ctx?: StateContext<any> ): void | any {
    ctx.dispatch([
      new ReconnectMessage(),
      new ReconnectAttempt(),
      new ReconnectFailed(),
      new Error(),
      new Disconnect(),
      new ConnectTimeout(),
    ]);
  }

  @Action(ReconnectMessage)
  reconnectMessage( ctx: StateContext<any>) {
    return this.socketService.on('reconnect').subscribe(( ) => {
      this.snackBar.open(
        'Conexão com o servidor restabelecida com sucesso !',
        '',
        { duration: 4000, verticalPosition: 'top', panelClass: 'snack-success'}
      );
    });
  }

  @Action(ReconnectAttempt)
  reconnectAttempt( ctx: StateContext<any>) {
    return this.socketService.on('reconnect_attempt').subscribe((  attemptNumber: any) => {
      this.snackBar.open(
        'A conexão com o servidor foi perdida, estamos tentando se reconectar. ' + attemptNumber + '° tentativa',
        '',
        { verticalPosition: 'top', panelClass: 'snack-error'}
      );
    });
  }

  @Action(ReconnectFailed)
  reconnectFailed( ctx: StateContext<any>) {
    return this.socketService.on('reconnect_failed').subscribe(( ) => {
      this.snackBar.open(
        'As tentantivas de reconexão se esgotaram, por favor atualize a página.',
        'Atualizar',
        { verticalPosition: 'top', panelClass: 'snack-info'}
      ).onAction().subscribe( () => { location.reload(true); } );
    });
  }

  @Action(Error)
  error( ctx: StateContext<any>) {
    return this.socketService.on('error').subscribe(( error ) => {
      this.snackBar.open(
        'Erro ao conectar com o servidor remoto: ' + error,
        '',
        { duration: 4000, verticalPosition: 'top', panelClass: 'snack-error'}
      );
    });
  }

  @Action(Disconnect)
  disconnect( ctx: StateContext<any>) {
    return this.socketService.on('disconnect').subscribe(( reason ) => {
      this.snackBar.open(
        'Conexão com servidor foi perdida: ' + reason,
        '',
        { duration: 3000, verticalPosition: 'top', panelClass: 'snack-info'}
      );
    });
  }

  @Action(ConnectTimeout)
  connectTimeout( ctx: StateContext<any>) {
    return this.socketService.on('connect_timeout').subscribe(( timeout ) => {
      this.snackBar.open(
        'Tempo Limite de conexão excedido. ' + timeout + 'ms',
        '',
        { duration: 3500, verticalPosition: 'top', panelClass: 'snack-error'}
      );
    });
  }
}
