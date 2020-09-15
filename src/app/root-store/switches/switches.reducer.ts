import {ActionEx, SwitchesActionTypes} from './switches.actions';
export const initialState =false
export function SwitchesReducer(state = initialState, action: ActionEx) {
  switch (action.type) {
    case SwitchesActionTypes.changeDegree:
      return !state
    default:
      return state;
  }
}