import { handleActions } from 'redux-actions';
import { fetchIdeasSuccess, createIdea } from './IdeasListAction';

const defaultState = {
  ideas: [],
};

const ideasListReducer = handleActions(
  {
    [fetchIdeasSuccess]: (state, action) => ({
      ...state,
      ideas: action.payload,
    }),
    [createIdea]: (state, action) => ({ ...state, ideas: [...state.ideas, action.payload] }),
  },
  defaultState,
);

export default ideasListReducer;
