module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ["975653a8e6b651ab83b0778aa18165656d8dd2cbab6abc9a36f79d675d9842a9423fbded6c835db5", "4b98f2e1f97acdabe2377839554423c231262d6933e049fd"]),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
