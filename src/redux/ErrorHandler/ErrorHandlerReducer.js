import { handleActions } from 'redux-actions';
import { fetchIdeasFailure, fetchIdeasStart } from './ErrorHandlerAction';

const defaultState = {
  isLoading: false,
  haveError: false,
};

const ideasListReducer = handleActions(
  {
    [fetchIdeasStart]: state => ({ ...state, isLoading: true, haveError: false }),
    [fetchIdeasFailure]: state => ({ ...state, isLoading: false, haveError: true }),
  },
  defaultState,
);

export default ideasListReducer;
