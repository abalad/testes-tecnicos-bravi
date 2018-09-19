export class NgxsEntityStateModel<T> {
  public ids: string[];
  public entities: { [id: string]: T };
  public selected: T | null;

  static InitialState() {
    return {
      ids: [],
      entities: {},
      selected: null
    };
  }
}
