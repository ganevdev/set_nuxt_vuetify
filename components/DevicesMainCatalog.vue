<template>
  <div>

    <!-- <DevicesTypesBar /> -->
    <p>&nbsp;</p>

    <v-flex xs12 sm6>
      <v-text-field label="Search" v-model="text_search" outline></v-text-field>
    </v-flex>
    <p>{{text_search}}</p>
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
      text_search: "",
      mouse_form: ""
    };
  },
  components: {
    DeviceCard,
    DevicesTypesBar
  },
  computed: {
    FilteredDevices() {
      return this.devicesJSON.filter(device => {
        let matches = true;

        // из https://codepen.io/andreasremdt/pen/rvQJYR?editors=1010
        // freeCodeCamp Twitch Viewer

        // matches определяет для каждого девайса по отдельности
        // пройдет ли он в лист FilteredDevices или нет
        // каждый следующий if это фильтр,
        // если девайс его не проходит то matches = false

        if (
          this.text_search !== "" &&
          !device.title.toLowerCase().includes(this.text_search.toLowerCase())
        ) {
          matches = false;
        }

        if (this.mouse_form !== "" && this.mouse_form !== device.mouse_form) {
          matches = false;
        }

        if (matches) return device;
      });
    }
  }
};
</script>

<style scoped>
</style>