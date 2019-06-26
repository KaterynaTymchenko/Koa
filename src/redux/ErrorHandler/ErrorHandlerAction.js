import { createAction } from 'redux-actions';
import { FETCH_IDEAS_START, FETCH_IDEAS_FAILURE } from './actionTypes';

export const fetchIdeasStart = createAction(FETCH_IDEAS_START);
export const fetchIdeasFailure = createAction(FETCH_IDEAS_FAILURE);
