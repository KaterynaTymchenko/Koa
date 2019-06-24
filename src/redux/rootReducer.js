import { combineReducers } from 'redux';
import ideasListReducer from './IdeasList/IdeasListReducer';

export default combineReducers({
  ideas: ideasListReducer,
});
