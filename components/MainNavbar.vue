<template>
  <v-toolbar class="navbar" height="70px" dark color="primary" app>
    <v-tabs height="70px" color="primary">
      <v-tab flat class="hidden-sm-and-down pa-4" to="/" nuxt><img class="logo" src="../assets/logo.png" alt="logo"></v-tab>
      <v-tab to="/" nuxt>Title</v-tab>
      <v-tab to="/blog" nuxt>Blog</v-tab>
      <v-tab to="/devices" nuxt>Devices</v-tab>
      <v-tab to="/proplayers" nuxt>ProPlayers</v-tab>
    </v-tabs>
  </v-toolbar>
</template>

<style scoped>
.navbar,
.v-btn,
.v-tabs__div {
  font-family: "Russo One", sans-serif;
  font-size: 20px !important;
}
</style>