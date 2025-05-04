module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'YMk3lgIHbhivaATFqVzuzg=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', '8JStm0GRl5qxWdhGhhBrag=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
