import api from './api';

const auth = {
  getUser: () => api.get('users?page=2'),
};

export default {
  ...auth,
};
