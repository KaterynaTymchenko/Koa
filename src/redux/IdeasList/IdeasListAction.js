import { createAction } from 'redux-actions';
import {
  FETCH_IDEAS_SUCCESS, CREATE_IDEA, DELETE_IDEA, UPDATE_IDEA,
} from './actionTypes';
import { fetchStart, fetchFailure } from '../ErrorHandler/ErrorHandlerAction';
import httpServise from '../../services/HttpService';

const get = httpServise.get('ideasCards');

export const fetchIdeasSuccess = createAction(FETCH_IDEAS_SUCCESS);
export const createIdea = createAction(CREATE_IDEA);
export const deleteIdea = createAction(DELETE_IDEA);
export const updateIdea = createAction(UPDATE_IDEA);

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

export const deleteDataIdea = id => (dispatch) => {
  dispatch(fetchStart());
  httpServise
    .delete('ideasCards', id)
    .then(() => dispatch(deleteIdea(id)))
    .catch(() => dispatch(fetchFailure()));
};

export const updateDataIdea = (id, data) => (dispatch) => {
  dispatch(fetchStart());
  httpServise
    .put('ideasCards', id, data)
    .then(res => dispatch(updateIdea(res)))
    .catch(() => dispatch(fetchFailure()));
};
