const apiHost = 'https://comeon-backend.herokuapp.com';
const host = '';

export default {
  authenticateUserPath: () => [apiHost, 'authenticate'].join('/'),
  updateUserPath: () => [apiHost, 'player'].join('/'),
  terminateUserPath: () => [apiHost, 'logout'].join('/'),

  loginPage: () => [host, 'login'].join('/'),
};
