import {Action} from '@ngrx/store';
export enum FavoritesActionTypes {
  Add = '[Favorites Component] Add',
  Remove = '[Favorites Component] Remove'
}
export class ActionEx implements Action {
  readonly type;
  payload: any;
}
export class FavoritesAdd implements ActionEx {
  readonly type = FavoritesActionTypes.Add;
  constructor(public payload: any) {
  }
}
export class FavoritesRemove implements ActionEx {
  readonly type = FavoritesActionTypes.Remove;
  constructor(public payload: any) {
  }
}