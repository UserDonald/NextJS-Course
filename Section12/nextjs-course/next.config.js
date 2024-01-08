const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'donald_nash',
        mongodb_password: 'dX1v0sAOuGREChq5',
        mongodb_clustername: 'nextjs-course',
        mongodb_database: 'my-site-dev',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'donald_nash',
      mongodb_password: 'dX1v0sAOuGREChq5',
      mongodb_clustername: 'nextjs-course',
      mongodb_database: 'my-site',
    },
  };
};
