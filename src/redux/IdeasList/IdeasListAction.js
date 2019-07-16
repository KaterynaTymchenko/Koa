import { createAction } from 'redux-actions';
import {
  FETCH_IDEAS_SUCCESS,
  CREATE_IDEA,
  DELETE_IDEA,
  UPDATE_IDEA,
  GET_IDEA,
  LOGIN,
} from './actionTypes';
import { fetchStart, fetchFailure } from '../ErrorHandler/ErrorHandlerAction';
import httpServise from '../../services/HttpService';

const get = httpServise.get('');

export const fetchIdeasSuccess = createAction(FETCH_IDEAS_SUCCESS);
export const createIdea = createAction(CREATE_IDEA);
export const deleteIdea = createAction(DELETE_IDEA);
export const updateIdea = createAction(UPDATE_IDEA);
export const getIdea = createAction(GET_IDEA);
export const login = createAction(LOGIN);

export const getDataIdeas = () => (dispatch) => {
  dispatch(fetchStart());
  get.then(res => dispatch(fetchIdeasSuccess(res))).catch(() => dispatch(fetchFailure()));
};

export const postDataIdea = data => (dispatch) => {
  dispatch(fetchStart());
  httpServise
    .post('idea', data)
    .then(res => dispatch(createIdea(res)))
    .catch(() => dispatch(fetchFailure()));
};

export const deleteDataIdea = id => (dispatch) => {
  dispatch(fetchStart());
  httpServise
    .delete('idea', id)
    .then(() => dispatch(deleteIdea(id)))
    .catch(() => dispatch(fetchFailure()));
};

export const updateDataIdea = (id, data) => (dispatch) => {
  dispatch(fetchStart());
  httpServise
    .put('idea', id, data)
    .then(res => dispatch(updateIdea(res)))
    .catch(() => dispatch(fetchFailure()));
};

export const getDataIdea = id => (dispatch) => {
  dispatch(fetchStart());
  httpServise
    .getById('idea', id)
    .then(res => dispatch(getIdea(res)))
    .catch(() => dispatch(fetchFailure()));
};

export const loginUser = () => (dispatch) => {
  const data = { username: 'Kate', password: '12345' };
  httpServise
    .post('login', data)
    .then(res => dispatch(login(res)))
    .catch(() => dispatch(fetchFailure()));
};
