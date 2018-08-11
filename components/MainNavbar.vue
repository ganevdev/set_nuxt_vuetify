<template>
  <v-toolbar class="navbar" dark color="grey darken-3" app>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn active-class="none" to="/" large flat nuxt>
        <img class="logo" src="../assets/logo.png" alt="logo"> &nbsp;&nbsp;&nbsp;&nbsp;Title&nbsp;&nbsp;
      </v-btn>
      <v-btn to="/blog" flat nuxt>Blog</v-btn>
      <v-btn to="/devices" flat nuxt>Devices</v-btn>
      <v-btn to="/proplayers" flat nuxt>ProPlayers</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<style scoped>
.logo {
  max-height: 64px;
}
.navbar,
.v-btn {
  font-family: "Russo One", sans-serif;
  font-size: 22px;
}
</style>
