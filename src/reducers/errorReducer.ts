import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types';
import { IAction } from './IAction';

const initialState = {};

export default function(state = initialState, action: IAction) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    case CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
}
