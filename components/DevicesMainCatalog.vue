<template>
  <div>

    <DevicesTypesBar />

    <div v-if="this.$route.name ==='devices-mouse' ">
      <div v-for="device in devices" :key="device.id">
        <div v-if="device.devices === 'mouse'">
          <DeviceCard v-bind:device="device" />
        </div>
      </div>
    </div>

    <div v-if="this.$route.name ==='devices-keyboard' ">
      <div v-for="device in devices" :key="device.id">
        <div v-if="device.devices === 'keyboard'">
          <DeviceCard v-bind:device="device" />
        </div>
      </div>
    </div>

    <div v-if="this.$route.name ==='devices-mousepad' ">
      <div v-for="device in devices" :key="device.id">
        <div v-if="device.devices === 'mousepad'">
          <DeviceCard v-bind:device="device" />
        </div>
      </div>
    </div>

    <div v-if="this.$route.name ==='devices-headset' ">
      <div v-for="device in devices" :key="device.id">
        <div v-if="device.devices === 'headset'">
          <DeviceCard v-bind:device="device" />
        </div>
      </div>
    </div>

    <div v-if="this.$route.name ==='devices-monitor' ">
      <div v-for="device in devices" :key="device.id">
        <div v-if="device.devices === 'monitor'">
          <DeviceCard v-bind:device="device" />
        </div>
      </div>
    </div>

    <div v-if="this.$route.name ==='devices' ">
      <div v-for="device in devices" :key="device.id">
        <DeviceCard v-bind:device="device" />
      </div>
    </div>

    <!-- if (this.$route.path == "/foo") {
    ...
    } -->

    <!-- <v-container fluid>
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

    </div> -->
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
      DeviceType: "all",
      activeTab: 0
    };
  },
  components: {
    DeviceCard,
    DevicesTypesBar
  }
};
</script>

<style scoped>
</style>