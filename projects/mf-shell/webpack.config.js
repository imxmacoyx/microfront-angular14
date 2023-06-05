const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

const moduleFederationConfig = withModuleFederationPlugin({
  remotes: {
    mfShopping: "http://localhost:4201/remoteEntry.js",
    mfPayment: "http://localhost:4202/remoteEntry.js",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
  sharedMappings: ["@commons-lib"],
});

moduleFederationConfig.output.publicPath = "http://localhost:4200/";

module.exports = moduleFederationConfig;
