const host = 'https://comeon-backend.herokuapp.com';

export default {
  authenticatePath: () => [host, 'authenticate'].join('/'),
  channelPath: (id) => [host, 'channels', id].join('/'),
  channelMessagesPath: (id) => [host, 'channels', id, 'messages'].join('/'),
};
