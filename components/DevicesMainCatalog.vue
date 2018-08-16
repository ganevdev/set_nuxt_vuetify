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

    <v-btn-toggle v-model="mouse_form">
      <v-btn flat value="ergonomic">
        ergonomic
      </v-btn>
      <v-btn flat value="ambidextrous">
        ambidextrous
      </v-btn>
    </v-btn-toggle>
    <p>{{mouse_form}}</p>
    <p>&nbsp;</p>

    <!-- <transition-group name="fade" tag="section"> -->
    <div v-for="device in FilteredDevices" :key="device.ASIN">
      <!-- <div v-if="device.devices === 'mouse'"> -->
      <DeviceCard v-bind:device="device" />
      <!-- </div> -->
    </div>
    <!-- </transition-group> -->

    <!-- </div> -->
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
      devicesJSON: devicesJSON,
      search: "",
      mouse_form: ""
    };
  },
  components: {
    DeviceCard,
    DevicesTypesBar
  },
  computed: {
    FilteredDevices: function() {
      return this.devicesJSON.filter(device => {
        return device.title.toLowerCase().match(this.search.toLowerCase());
      });
    },
    FilteredDevices_mouse_form: function() {
      return this.devicesJSON.filter(device => {
        return device.mouse_form.match(this.mouse_form);
      });
    }
  }
};
</script>

<style scoped>
</style>