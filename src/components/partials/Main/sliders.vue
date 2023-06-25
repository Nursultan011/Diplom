<template>
  <div :class="className">
    <div class="man_text">{{ title }}</div>
    <div class="container" id="1">
      <div class="wrapperr">
        <swiper ref="mySwiper" :options="swiperOptions" class="image-slider2">
          <swiper-slide v-for="(slide, index) in slides" :key="index">
            <router-link to="#">
              <div class="image-slider2__image">
                <img
                  :src="require(`../../../assets/img/man/${slide}`)"
                  alt="Картинка"
                />
                <p>COTTON HERRINGBONE <br />CHORE OVERSHIRT</p>
              </div>
            </router-link>
          </swiper-slide>
          <template #pagination>
            <div class="swiper-pagination"></div>
          </template>
          <template #prev-button>
            <div class="swiper-button-prev"></div>
          </template>
          <template #next-button>
            <div class="swiper-button-next"></div>
          </template>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css";
import "swiper/css/pagination";
export default {
  props: ["className", "title"],
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const slides = ref([
      "Frame352.png",
      "Frame352(2).png",
      "Frame352.png",
      "Frame352(2).png",
      "Frame352.png",
      "Frame352(2).png",
      "Frame352.png",
      "Frame352(2).png",
    ]);

    const swiperOptions = ref({
      slidesPerView: 4,
      simulateTouch: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      slidesPerGroup: 4,
      speed: 1500,
      spaceBetween: 3,
    });

    return {
      slides,
      swiperOptions,
    };
  },
};
</script>
