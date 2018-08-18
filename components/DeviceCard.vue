<template>
  <v-layout>
    <v-flex>
      <v-card hover>

        <v-layout>
          <v-flex xs5>
            <!-- TODO - вскрыть когда нужно будет -->
            <!-- <v-card-media v-bind:src="'//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=' + device.ASIN + '&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1'" height="125px" contain></v-card-media> -->
          </v-flex>
          <v-flex xs7>
            <v-card-title>
              <div>
                <h3 class="headline mb-0">{{ device.title }}</h3>
                <v-btn v-bind:to='"/devices/" + device.device_type' small nuxt>{{ device.device_type }}</v-btn>
                <v-btn v-if="device.mouse_form" small nuxt>{{ device.mouse_form }}</v-btn>
                <v-btn v-if="device.mouse_sensor" small nuxt>{{ device.mouse_sensor }}</v-btn>
                <p>{{ device.ASIN }}</p>
              </div>
            </v-card-title>
          </v-flex>
        </v-layout>

      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ["device"]
};
</script>
