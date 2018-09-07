import message from 'antd/lib/message';
import { Dispatch } from 'redux';
import { History } from 'history';
import Cookies from 'universal-cookie';
import * as jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER } from './types';
import { clearErrors } from './errorActions';
import { login, ILoginRequest, IRegisterRequest, register } from '../services/AccountsService';
import setAuthToken from '../lib/setAuthToken';

// Login User Action
export const loginUser = (payload: ILoginRequest, history: History) => (dispatch: Dispatch) => {
  login(payload)
    .then(response => {
      const token = response.headers.authorization;

      // Set cookie with Token
      const cookies = new Cookies();
      cookies.set('Authorization', token);

      // Set Auth header for upcoming requests
      setAuthToken(token);

      // Decode the token
      const decodedToken = jwt_decode(token);
      dispatch(setCurrentUser(decodedToken));

      // Clear Errors State
      dispatch(clearErrors());

      // Success message and redirection to dashboard
      message.success('Welcome back');
      history.push('/dashboard');
    })
    .catch(error =>
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data
      })
    );
};

// Register User Action
export const registerUser = (payload: IRegisterRequest, history: History) => (
  dispath: Dispatch
) => {
  register(payload)
    .then(response => {
      dispath(clearErrors());
      message.success('The account is successfully created.');
      history.push('/login');
    })
    .catch(error => {
      dispath({
        type: GET_ERRORS,
        payload: error.response.data
      });
    });
};

// Set the Current User with the decoded value from JWT Token
export const setCurrentUser = (decodedUser: any) => {
  return {
    type: SET_CURRENT_USER,
    payload: decodedUser
  };
};

// Logout User Ation
export const logoutUser = () => (dispatch: Dispatch) => {
  // Remove from Cookies
  const cookies = new Cookies();
  cookies.remove('Authorization');

  // Remove default header
  setAuthToken(false);

  // Reset User in State
  dispatch(setCurrentUser({}));
};
