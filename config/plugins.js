module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET', 'hY3QG58T1x4J7DYmszNv4Q=='),
    },
  },
}); 