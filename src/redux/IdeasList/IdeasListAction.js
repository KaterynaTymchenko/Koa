import { createAction } from 'redux-actions';
import { FETCH_IDEAS_SUCCESS, CREATE_IDEA } from './actionTypes';
import { fetchStart, fetchFailure } from '../ErrorHandler/ErrorHandlerAction';
import httpServise from '../../services/HttpService';

const get = httpServise.get('ideasCards');

export const fetchIdeasSuccess = createAction(FETCH_IDEAS_SUCCESS);
export const createIdea = createAction(CREATE_IDEA);

export const getDataIdeas = () => (dispatch) => {
  dispatch(fetchStart());
  get.then(res => dispatch(fetchIdeasSuccess(res))).catch(() => dispatch(fetchFailure()));
};

export const postDataIdea = data => (dispatch) => {
  dispatch(fetchStart());
  httpServise
    .post('ideasCards', data)
    .then(res => dispatch(createIdea(res)))
    .catch(() => dispatch(fetchFailure()));
};

export default getDataIdeas;
