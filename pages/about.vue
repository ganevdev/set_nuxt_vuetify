<template>
<div>
  <v-carousel>
    <v-carousel-item v-for="(src, i) in images" :src="src" :key="i"/>
  </v-carousel>
  <v-container>
    <p>
      Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </p>
  </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    images: [
      'https://vuetifyjs.com/static/doc-images/carousel/squirrel.jpg',
      'https://vuetifyjs.com/static/doc-images/carousel/sky.jpg',
      'https://vuetifyjs.com/static/doc-images/carousel/bird.jpg',
      'https://vuetifyjs.com/static/doc-images/carousel/planet.jpg'
    ]
  })
}
</script>
