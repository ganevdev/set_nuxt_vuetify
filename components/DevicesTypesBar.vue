<template>
  <div>
    <v-toolbar class="" color="" flat tabs>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="/devices" flat nuxt>All Devices</v-btn>
        <v-btn to="/devices/mouse" flat nuxt>Mice</v-btn>
        <v-btn to="/devices/keyboards" flat nuxt>Keyboards</v-btn>
        <v-btn to="/devices/mousepad" flat nuxt>Mousepads</v-btn>
        <v-btn to="/devices/headset" flat nuxt>Headsets</v-btn>
        <v-btn to="/devices/monitor" flat nuxt>Monitors</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>