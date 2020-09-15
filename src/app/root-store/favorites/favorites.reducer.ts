import {ActionEx, FavoritesActionTypes} from './favorites.actions';
export const initialState = new Map();
export function FavoritesReducer(state = initialState, action: ActionEx) {
  switch (action.type) {
    case FavoritesActionTypes.Add:
      return state.set(action.payload.key,action.payload.name);
    case FavoritesActionTypes.Remove:
        state.delete(action.payload)
        return state
    default:
      return state;
  }
}