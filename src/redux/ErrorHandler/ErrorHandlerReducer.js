import { handleActions } from 'redux-actions';
import { fetchStart, fetchFailure } from './ErrorHandlerAction';

const defaultState = {
  haveError: false,
};

const ideasListReducer = handleActions(
  {
    [fetchStart]: state => ({ ...state, haveError: false }),
    [fetchFailure]: state => ({ ...state, haveError: true }),
  },
  defaultState,
);

export default ideasListReducer;
