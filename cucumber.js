module.exports = {
  default: {
    require: ["support/timeout.ts","stepdefs/**/*.steps.ts", "hooks/**/*.ts", "support/**/*.ts"],
    format: ["progress"],
    requireModule: ["ts-node/register", "dotenv/config"],
    paths: ["features/**/*.feature"],
    formatOptions: {
      snippetInterface: "async-await"
    },
    timeout: 20000,
  },
};
