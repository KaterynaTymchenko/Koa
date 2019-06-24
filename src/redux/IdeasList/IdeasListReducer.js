import { handleActions } from 'redux-actions';
import { fetchIdeasFailure, fetchIdeasSuccess, fetchIdeasStart } from './IdeasListAction';

const defaultState = {
  ideas: [],
  isLoading: false,
  haveError: false,
};

const ideasListReducer = handleActions(
  {
    [fetchIdeasStart]: state => ({ ...state, isLoading: true }),
    [fetchIdeasSuccess]: (state, action) => ({
      ...state,
      isLoading: false,
      ideas: action.payload,
    }),
    [fetchIdeasFailure]: state => ({ ...state, isLoading: false, haveError: true }),
  },
  defaultState,
);

export default ideasListReducer;
