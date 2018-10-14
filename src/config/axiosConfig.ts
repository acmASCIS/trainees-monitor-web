import axios from 'axios';
import notification from 'antd/lib/notification';
import { logoutUser } from '../actions/authActions';
import store from '../store';
import config from '.';

// Setting base URL
axios.defaults.baseURL = config.API_URL;

// Setting up interceptors
axios.interceptors.response.use(
  response => {
    // response interceptor
    return response;
  },
  error => {
    // error interceptor
    switch (error.response.status) {
      case 401:
        logoutUser()(store.dispatch);
        break;
      case 403:
        notification.error({
          message: 'Unauthorized Access',
          description: 'You are not allowed to use this feature.'
        });
        break;
      case 500:
        notification.error({
          message: 'An error occured',
          description: 'Please try again later.'
        });
      default:
    }
    return Promise.reject(error);
  }
);
