<template>
  <v-app>

    <MainNav />

    <v-content>
      <v-container fluid>
        <router-view>
          <nuxt/>
        </router-view>
      </v-container>
    </v-content>

    <MainFooter />

  </v-app>
</template>

<script>
import MainNav from "~/components/MainNav.vue";
import MainFooter from "~/components/MainFooter.vue";

export default {
  data() {},
  components: {
    MainNav,
    MainFooter
  }
};
</script>

<style lang="stylus">
/* все общие изменения стиля делать тут:
assets/app.styl */
</style>
