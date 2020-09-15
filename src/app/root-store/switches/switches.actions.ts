import {Action} from '@ngrx/store';
export enum SwitchesActionTypes {
  changeDegree = '[Degree Component] change'
}
export class ActionEx implements Action {
  readonly type;
  payload: any;
}
export class ChangeDegree implements ActionEx {
  readonly type = SwitchesActionTypes.changeDegree;
  constructor(public payload: any) {
  }
}