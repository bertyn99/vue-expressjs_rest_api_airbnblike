<template>
   <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        background="#ababab"
        img-width="80"
        img-height="80"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
        >
        <!-- Text slides with image -->
        <b-carousel-slide
          caption="First slide"
          img-src="https://picsum.photos/1024/480/?image=52"
        ></b-carousel-slide>

        <!-- Slides with custom text -->
       <!--  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        </b-carousel-slide> -->

        <!-- Slides with image only -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>
    </b-carousel>
</template>

<script>
export default {
  name: 'CarrouselImg',
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style>

</style>
