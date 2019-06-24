import { createAction } from 'redux-actions';
import { FETCH_IDEAS_START, FETCH_IDEAS_SUCCESS, FETCH_IDEAS_FAILURE } from './actionTypes';
import httpServise from '../../services/HttpService';

const get = httpServise.get('http://localhost:3001/ideasCards');

export const fetchIdeasStart = createAction(FETCH_IDEAS_START);
export const fetchIdeasFailure = createAction(FETCH_IDEAS_FAILURE);
export const fetchIdeasSuccess = createAction(FETCH_IDEAS_SUCCESS);

const getDataIdeas = () => (dispatch) => {
  dispatch(fetchIdeasStart());
  get.then(res => dispatch(fetchIdeasSuccess(res))).catch(() => dispatch(fetchIdeasFailure()));
};

export default getDataIdeas;
