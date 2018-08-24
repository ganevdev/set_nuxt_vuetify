<template>
  <h1>{{ device.title }}</h1>
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