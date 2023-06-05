const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

const moduleFederationConfig = withModuleFederationPlugin({
  name: "mfPayment",

  exposes: {
    "./PaymentComponent":
      "./projects/mf-payment/src/app/payment/payment.component.ts",
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

moduleFederationConfig.output.publicPath = "http://localhost:4202/";

module.exports = moduleFederationConfig;
