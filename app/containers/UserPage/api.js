import request from 'utils/request';

export const createUser = payload =>
  request('/users', {
    method: 'POST',
    body: JSON.stringify(payload),
  });

export const updateUser = (userId, payload) =>
  request(`/users/${userId}`, {
    method: 'PUT',
    body: JSON.stringify(payload),
  });

export const deleteUser = userId =>
  request(`/users/${userId}`, {
    method: 'DELETE',
  });
