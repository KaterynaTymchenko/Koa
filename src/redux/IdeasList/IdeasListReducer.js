import { handleActions } from 'redux-actions';
import {
  fetchIdeasFailure,
  fetchIdeasSuccess,
  fetchIdeasStart,
  createIdea,
} from './IdeasListAction';

const defaultState = {
  ideas: [],
  isLoading: false,
  haveError: false,
};

const ideasListReducer = handleActions(
  {
    [fetchIdeasStart]: state => ({ ...state, isLoading: true, haveError: false }),
    [fetchIdeasSuccess]: (state, action) => ({
      ...state,
      isLoading: false,
      ideas: action.payload,
    }),
    [fetchIdeasFailure]: state => ({ ...state, isLoading: false, haveError: true }),
    [createIdea]: (state, action) => ({ ...state, ideas: [...state.ideas, action.payload] }),
  },
  defaultState,
);

export default ideasListReducer;
