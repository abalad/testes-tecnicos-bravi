import { Injectable } from '@angular/core';

@Injectable()
export class FeathersService {
  protected _app: any;

  getService(service: string) {
    return this.getApp().service(service);
  }

  getApp() {
    return this._app;
  }
}
