import { combineReducers } from 'redux';
import ideasListReducer from './IdeasList/IdeasListReducer';
import ErrorHandlerReducer from './ErrorHandler/ErrorHandlerReducer';

export default combineReducers({
  ideas: ideasListReducer,
  error: ErrorHandlerReducer,
});
