<template>
  <div>
    <h1>{{ devicesJSON[1].title }}</h1>
    <h1>ТЕСТЕСТЕСТЕТСЕТСТЕ</h1>
  </div>
</template>

<script>
import devicesJSON from "~/assets/devices.json";

export default {
  data: function() {
    return {
      devicesJSON: devicesJSON
    };
  }
};
</script>