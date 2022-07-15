export default {
  jwt: {
    secret: process.env.APP_SECRET || "secret",
    expires_in_token: "1h",
    secret_refresh_token: process.env.APP_SECRET || "secretRefresh",
    expires_in_refresh_token: "8h",
  },
};
