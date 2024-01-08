const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'contactdonaldnash',
        mongodb_password: 'iBtbkhCOrJiCHWiQ',
        mongodb_clustername: 'nextjs-course',
        mongodb_database: 'my-site-dev',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'contactdonaldnash',
      mongodb_password: 'iBtbkhCOrJiCHWiQ',
      mongodb_clustername: 'nextjs-course',
      mongodb_database: 'my-site',
    },
  };
};
