module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['K1EUjKZUb5ER9tlO3m9EAQ==', 'Q2nVa93TTOvLwcnGxW5sJA==', 'EPacmeXIfYn73BuUdMBhJg==', 'dCKx/xJuVxc/HCEdeHBArA==']),
  },
});
