const webpack = require("webpack");

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "set_nuxt_v",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Material+Icons"
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    },
    plugins: [
      // https://nuxtjs.org/faq/webpack-plugins/
      new webpack.ProvidePlugin({
        _: "lodash"
        // ...etc.
      })
    ]
  },
  /*
  ** Load Vuetify into the app
  */
  plugins: ["~/plugins/vuetify"],
  /*
  ** Load Vuetify CSS globally
  */
  css: ["~/assets/app.styl"],

  // от сюда https://medium.com/a-man-with-no-server/static-site-generators-nuxt-js-2fa9782d27c8
  // https://nuxtjs.org/api/configuration-generate#routes
  // генерация путей для SSG
  generate: {
    routes: function() {
      import devicesJSON from "~/assets/devices.json";
      return devicesJSON.map(device => {
        return "/devices/" + device.ASIN;
      });
    }
  }
};
