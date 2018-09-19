import { ModuleWithProviders, NgModule } from '@angular/core';
import { SocketService } from './services/socket.service';
import { NgxsModule } from '@ngxs/store';
import { MessagesState } from './state/messages.state';

@NgModule({
  imports: [
    NgxsModule.forFeature( [
      MessagesState
    ])
  ]
})
export class FeathersModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FeathersModule,
      providers: [ SocketService ]
    };
  }
}
