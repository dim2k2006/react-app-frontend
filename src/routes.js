const host = 'https://comeon-backend.herokuapp.com';

export default {
  authenticateUserPath: () => [host, 'authenticate'].join('/'),
  updateUserPath: () => [host, 'player'].join('/'),
};
