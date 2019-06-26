import { handleActions } from 'redux-actions';
import { fetchIdeasSuccess, createIdea } from './IdeasListAction';

const defaultState = {
  ideas: [],
  isLoading: false,
  haveError: false,
};

const ideasListReducer = handleActions(
  {
    [fetchIdeasSuccess]: (state, action) => ({
      ...state,
      isLoading: false,
      ideas: action.payload,
    }),
    [createIdea]: (state, action) => ({ ...state, ideas: [...state.ideas, action.payload] }),
  },
  defaultState,
);

export default ideasListReducer;
