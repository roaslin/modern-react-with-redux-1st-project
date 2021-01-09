import { SIGN_IN, SIGN_OUT } from './types';
import streams from '../apis/streams';
import { formValues } from 'redux-form';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => async (dispatch) => {
  console.log('createStream call');
  streams.post('/streams', formValues);
};
