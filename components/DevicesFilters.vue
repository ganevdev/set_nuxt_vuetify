<template>
  <div>

    <v-container fluid>
      <h3 class="title">Фильтры:</h3>
      <v-radio-group v-model="DeviceType" row>
        <v-radio label="All" value="all"></v-radio>
        <v-radio label="Mice" value="mouse"></v-radio>
        <v-radio label="Keyboards" value="keyboard"></v-radio>
        <v-radio label="Mousepads" value="mousepad"></v-radio>
        <v-radio label="Headsets" value="headset"></v-radio>
        <v-radio label="Monitors" value="monitor"></v-radio>
      </v-radio-group>
    </v-container>

    <div v-for="device in devices" :key="device.id">

      <div v-if="'all' !== DeviceType">

        <div v-if="device.devices === DeviceType">
          <DeviceCard v-bind:device="device" />
        </div>

      </div>

      <div v-else>
        <DeviceCard v-bind:device="device" />
      </div>

    </div>
    <p>&nbsp;</p>
  </div>
</template>

<script>
import devicesJSON from "../assets/devices.json";
//
import DeviceCard from "~/components/DeviceCard.vue";

export default {
  data: function() {
    return {
      devices: devicesJSON,
      DeviceType: "all",
      activeTab: 0
    };
  },
  components: {
    DeviceCard
  }
};
</script>

<style scoped>
</style>