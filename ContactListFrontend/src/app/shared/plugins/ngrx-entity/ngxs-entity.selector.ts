export class NgxsEntitySelector {
  getEntities( entities ) {
    const ids =  Object.keys(entities);
    return ids.map((id: any) => (entities as any)[id]);
  }
}
