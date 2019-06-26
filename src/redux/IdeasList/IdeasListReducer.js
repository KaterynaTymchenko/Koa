import { handleActions } from 'redux-actions';
import { fetchIdeasSuccess, createIdea, deleteIdea } from './IdeasListAction';

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
    [deleteIdea]: (state, action) => ({
      ...state,
      ideas: state.ideas.filter(item => action.payload !== item.id),
    }),
  },
  defaultState,
);

export default ideasListReducer;
