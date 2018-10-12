import axios from 'axios';

export function getProfile(handle: string): Promise<any> {
  return axios
    .get(`http://localhost:3000/profile/${handle}`)
    .then(response => response.data)
    .catch(error => Promise.reject(error));
}

export function unfollowProfile(handle: string) {
  return axios
    .post(`http://localhost:3000/profile/unfollow?handle=${handle}`)
    .then(response => response.data)
    .catch(error => Promise.reject(error));
}

export function followProfile(handle: string) {
  return axios
    .post(`http://localhost:3000/profile/follow?handle=${handle}`)
    .then(response => response.data)
    .catch(error => Promise.reject(error));
}

export function getFollowing() {
  return axios
    .get('http://localhost:3000/profile/following')
    .then(response => response.data)
    .catch(error => Promise.reject(error));
}
