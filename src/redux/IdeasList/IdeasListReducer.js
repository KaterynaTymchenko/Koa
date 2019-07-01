import { handleActions } from 'redux-actions';
import {
  fetchIdeasSuccess, createIdea, deleteIdea, updateIdea, getIdea,
} from './IdeasListAction';

const defaultState = {
  ideas: [],
  idea: {},
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
    [getIdea]: (state, action) => ({ ...state, idea: action.payload }),
  },
  defaultState,
);

export default ideasListReducer;
