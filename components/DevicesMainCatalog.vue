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

    <!-- радио фильтры -->
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

    <v-btn-toggle v-model="mouse_sensor">
      <v-btn flat value="optical">
        optical
      </v-btn>
      <v-btn flat value="laser">
        laser
      </v-btn>
    </v-btn-toggle>
    <p>{{mouse_sensor}}</p>
    <p>&nbsp;</p>

    <!-- сортировка -->
    <!-- TODO - сделать компонент для сортировки что бы не повторять в каждом разделе девайсов -->

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
      text_search: null,
      mouse_form: null,
      mouse_sensor: null
    };
  },
  components: {
    DeviceCard,
    DevicesTypesBar
  },
  computed: {
    FilteredDevices() {
      return this.devicesJSON.filter(device => {
        let filter_matches = true;

        // из https://codepen.io/andreasremdt/pen/rvQJYR?editors=1010
        // freeCodeCamp Twitch Viewer

        // filter_matches определяет для каждого девайса по отдельности
        // пройдет ли он в лист FilteredDevices или нет
        // каждый следующий if это фильтр,
        // если девайс его не проходит то filter_matches = false

        // фильтр по поиску
        if (
          this.text_search !== null &&
          !device.title.toLowerCase().includes(this.text_search.toLowerCase())
        ) {
          filter_matches = false;
        }

        // фильтр по мышиным радио кнопкам
        if (this.mouse_form !== null && this.mouse_form !== device.mouse_form) {
          filter_matches = false;
        }
        if (
          this.mouse_sensor !== null &&
          this.mouse_sensor !== device.mouse_sensor
        ) {
          filter_matches = false;
        }

        if (filter_matches) return device;
      });
    }
  }
};
</script>

<style scoped>
</style>