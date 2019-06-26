import { createAction } from 'redux-actions';
import {
  FETCH_IDEAS_START,
  FETCH_IDEAS_SUCCESS,
  FETCH_IDEAS_FAILURE,
  CREATE_IDEA,
} from './actionTypes';
import httpServise from '../../services/HttpService';

const get = httpServise.get('ideasCards');

export const fetchIdeasStart = createAction(FETCH_IDEAS_START);
export const fetchIdeasFailure = createAction(FETCH_IDEAS_FAILURE);
export const fetchIdeasSuccess = createAction(FETCH_IDEAS_SUCCESS);
export const createIdea = createAction(CREATE_IDEA);

export const getDataIdeas = () => (dispatch) => {
  dispatch(fetchIdeasStart());
  get.then(res => dispatch(fetchIdeasSuccess(res))).catch(() => dispatch(fetchIdeasFailure()));
};

export const postDataIdea = data => (dispatch) => {
  dispatch(fetchIdeasStart());
  httpServise
    .post('ideasCards', data)
    .then(res => dispatch(createIdea(res)))
    .catch(() => dispatch(fetchIdeasFailure()));
};

export default getDataIdeas;
