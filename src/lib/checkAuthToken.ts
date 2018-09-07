import { setCurrentUser } from './../actions/authActions';
import * as jwt_decode from 'jwt-decode';
import Cookies from 'universal-cookie';
import setAuthToken from './setAuthToken';
import store from '../store';

// Checking Auth Token if Exists in Cookies
const checkAuthToken = () => {
  const cookies = new Cookies();
  const token = cookies.get('Authorization');

  if (token) {
    setAuthToken(token);
    const decodedUser = jwt_decode(token);
    store.dispatch(setCurrentUser(decodedUser));
  }
};

export default checkAuthToken;
