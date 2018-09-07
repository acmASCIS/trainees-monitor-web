import axios from 'axios';

const setAuthToken = (token: string | boolean) => {
  if (token) {
    // Applies the token in every request
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

export default setAuthToken;
