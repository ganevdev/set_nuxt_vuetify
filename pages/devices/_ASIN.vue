<template>
  <div>
    <h3>{{ device.title }}</h3>
  </div>
</template>

<script>
export default {
  computed: {
    device() {
      const deviceByASIN = this.$store.getters["devices/deviceByASIN"];
      return deviceByASIN(this.$route.params.ASIN);
    }
  }
};
</script>