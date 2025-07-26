export default {
  origin: [
    new RegExp(<string>process.env.CORS_ALLOWED_ORIGIN),
  ],

  maxAge: parseInt(<string>process.env.CORS_MAX_AGE) || 0,
};
