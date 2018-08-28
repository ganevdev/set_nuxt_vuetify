import Vue from "vue";
import Vuetify from "vuetify";

// You can also specify those components you are going to use for "a la carte" build:
// https://github.com/vuetifyjs/nuxt/blob/master/template/plugins/vuetify.js
// https://github.com/vuetifyjs/a-la-carte/blob/master/template/src/main.js

// Helpers
import colors from "vuetify/es5/util/colors";

Vue.use(Vuetify, {
  theme: {
    primary: colors.blueGrey.darken3,
    warning: colors.orange.darken3,
    accent: colors.blueGrey.lighten2
  }
});
