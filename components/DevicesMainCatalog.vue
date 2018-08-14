<template>
  <div>

    <!-- <DevicesTypesBar /> -->
    <p>&nbsp;</p>

    <v-flex xs12 sm6>
      <v-text-field label="Search" v-model="search" outline></v-text-field>
    </v-flex>
    <p>{{search}}</p>
    <p>&nbsp;</p>

    <!-- Каталог МЫШЕК -->
    <!-- <div v-if="this.$route.name ==='devices-mouse' "> -->

    <!-- <transition-group name="fade" tag="section"> -->
    <div v-for="device in FilteredDevices" :key="device.ASIN">
      <!-- <div v-if="device.devices === 'mouse'"> -->
      <DeviceCard v-bind:device="device" />
      <!-- </div> -->
    </div>
    <!-- </transition-group> -->

    <!-- /Каталог МЫШЕК -->

  </div>
</template>

<script>
import devicesJSON from "../assets/devices.json";
//
import DeviceCard from "~/components/DeviceCard.vue";
import DevicesTypesBar from "~/components/DevicesTypesBar.vue";

export default {
  data: function() {
    return {
      devices: devicesJSON,
      search: ""
    };
  },
  components: {
    DeviceCard,
    DevicesTypesBar
  },
  computed: {
    FilteredDevices: function() {
      return this.devices.filter(device => {
        return device.title.match(this.search);
      });
    }
  }
};
</script>

<style scoped>
</style>