import { handleActions } from 'redux-actions';
import {
  fetchIdeasSuccess, createIdea, deleteIdea, updateIdea,
} from './IdeasListAction';

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
    [updateIdea]: (state, action) => {
      const newIdeas = state.ideas.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
      return { ...state, ideas: newIdeas };
    },
  },
  defaultState,
);

export default ideasListReducer;
