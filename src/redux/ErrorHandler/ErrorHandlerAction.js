import { createAction } from 'redux-actions';
import { FETCH_START, FETCH_FAILURE } from './actionTypes';

export const fetchStart = createAction(FETCH_START);
export const fetchFailure = createAction(FETCH_FAILURE);
