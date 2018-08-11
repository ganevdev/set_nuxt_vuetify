<template>
  <div>

    <v-container fluid>
      <h3 class="title">Фильтры:</h3>
      <v-radio-group v-model="radioPicks" row>
        <v-radio label="All" value="all"></v-radio>
        <v-radio label="Mice" value="mouse"></v-radio>
        <v-radio label="Keyboards" value="keyboard"></v-radio>
        <v-radio label="Mousepads" value="mousepad"></v-radio>
        <v-radio label="Headsets" value="headset"></v-radio>
        <v-radio label="Monitors" value="monitor"></v-radio>
      </v-radio-group>
    </v-container>

    <div v-for="device in devices" :key="device.id">

      <div v-if="'all' !== radioPicks">

        <div v-if="device.devices === radioPicks">
          <!-- это должен быть отдельный компонент - карточка девайса -->
          <div class="card ">
            <div class="card-content ">
              <div class="content ">
                <ul>
                  <li>ASIN: {{ device.ASIN }}</li>
                  <li>title: {{ device.title }}</li>
                  <li>brands: {{ device.brands }}</li>
                  <li>devices(type): {{ device.devices }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div v-else>
        <!-- это должен быть отдельный компонент - карточка девайса -->
        <div class="card ">
          <div class="card-content ">
            <div class="content ">
              <ul>
                <li>ASIN: {{ device.ASIN }}</li>
                <li>title: {{ device.title }}</li>
                <li>brands: {{ device.brands }}</li>
                <li>devices(type): {{ device.devices }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
    <p>&nbsp;</p>
  </div>
</template>

<script>
import devicesJSON from "../assets/devices.json";

export default {
  data: function() {
    return {
      devices: devicesJSON,
      radioPicks: "all",
      activeTab: 0
    };
  }
};
</script>

<style scoped>
</style>