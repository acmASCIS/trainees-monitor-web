import { SET_CURRENT_USER } from '../actions/types';
import { IAction } from './IAction';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action: IAction) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: Object.keys(action.payload).length !== 0,
        user: action.payload
      };
    default:
      return state;
  }
}
