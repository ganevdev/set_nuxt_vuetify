<template>
  <div>

    <!-- <DevicesTypesBar /> -->
    <p>&nbsp;</p>

    <v-flex xs12 md6>
      <v-text-field label="Search" v-model="text_search" outline></v-text-field>
    </v-flex>

    <!-- Каталог МЫШЕК -->
    <!-- <div v-if="this.$route.name ==='devices-mouse' "> -->

    <!-- радио фильтры -->
    <v-btn-toggle v-model="mouse_form">
      <v-btn large value="ergonomic">ergonomic</v-btn>
      <v-btn large value="ambidextrous">ambidextrous</v-btn>
    </v-btn-toggle>
    &nbsp;
    <v-btn-toggle v-model="mouse_sensor">
      <v-btn large value="optical">optical</v-btn>
      <v-btn large value="laser">laser</v-btn>
    </v-btn-toggle>

    <p>&nbsp;</p>

    <!-- сортировка -->
    <!-- TODO - сделать компонент для сортировки что бы не повторять в каждом разделе девайсов -->
    <v-flex md9>
      <v-toolbar dense>
        <v-btn-toggle class="transparent">
          <v-btn @click="names" flat>names</v-btn>
          <v-btn @click="ASIN" flat>ASIN</v-btn>
        </v-btn-toggle>
      </v-toolbar>
    </v-flex>

    <transition-group name="fade" tag="section">
      <div v-for="device in FilteredDevices" :key="device.ASIN">
        <!-- <div v-if="device.devices === 'mouse'"> -->
        <DeviceCard v-bind:device="device" />
        <!-- </div> -->
      </div>
    </transition-group>

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
      // фильтры
      mouse_form: null,
      mouse_sensor: null
      // сортировка
    };
  },
  components: {
    DeviceCard,
    DevicesTypesBar
  },
  computed: {
    FilteredDevices: function() {
      let devices = this.devicesJSON.filter(device => {
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

        // фильтр по мышиным фильтрам-радио кнопкам
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
      // return _.orderBy(this.devicesJSON, 'title')
      // return _.orderBy(this.devices, "id");
      return devices;
      // return devices.slice().reverse();
    }
    // SortedDevices: function() {
    // return this.FilteredDevices.slice().reverse();
    // return this.FilteredDevices.orderBy(this.FilteredDevices, "title");
    // return orderBy(this.FilteredDevices, "title");
    // }
  }
};
</script>

<style scoped>
</style>