import axios from 'axios';

export function getProfile(handle: string): Promise<any> {
  return axios
    .get(`/profile/${handle}`)
    .then(response => response.data)
    .catch(error => Promise.reject(error));
}

export function unfollowProfile(handle: string) {
  return axios
    .post(`/profile/unfollow?handle=${handle}`)
    .then(response => response.data)
    .catch(error => Promise.reject(error));
}

export function followProfile(handle: string) {
  return axios
    .post(`/profile/follow?handle=${handle}`)
    .then(response => response.data)
    .catch(error => Promise.reject(error));
}

export function getFollowing() {
  return axios
    .get('/profile/following')
    .then(response => response.data)
    .catch(error => Promise.reject(error));
}
