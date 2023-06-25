<template>
  <banner />
  <sliders class-name="man" title="MAN" />
  <sliders class-name="woman" title="WOMAN" />
  <sliders class-name="accessories" title="ACCESORIES" />
  <tz />
  <div class="social_media">
    <div class="social_content">
      <div style="width: 180px; height: 180px; margin: 40px 8px 0 0">
        <img src="../assets/img/brands/1024px-Zara_Logo1.png" alt="" />
      </div>
      <div style="width: 200px; height: 200px; margin: 30px 22px 0 0">
        <img src="../assets/img/brands/585990604f6ae202fedf28d31.png" alt="" />
      </div>
      <div style="width: 220px; height: 220px; margin: 23px 33px 0 0">
        <img src="../assets/img/brands/5a1aca8bf65d84088faf13921.png" alt="" />
      </div>
      <div style="width: 220px; height: 220px; margin: 23px 23px 0 0">
        <img src="../assets/img/brands/5a1acaa8f65d84088faf13941.png" alt="" />
      </div>
      <div style="width: 200px; height: 200px; margin: 30px 8px 0 0">
        <img src="../assets/img/brands/Bershka-Logo1.png" alt="" />
      </div>
      <div style="width: 180px; height: 180px; margin: 40px 0px 0 0">
        <img src="../assets/img/brands/Love-Republic-Logo1.png" alt="" />
      </div>
    </div>
    <div class="cards">
      <div class="card">
        <img
          src="../assets/img/brands/3492281.png"
          width="44px"
          height="44px"
          alt=""
        />
      </div>
      <div class="card">
        <img
          src="../assets/img/brands/Mastercard-logo1.png"
          width="44px"
          height="44px"
          alt=""
        />
      </div>
      <div class="card">
        <img
          src="../assets/img/brands/Paypal_2014_logo1.png"
          width="44px"
          height="44px"
          alt=""
        />
      </div>
      <div class="card">
        <img
          src="../assets/img/brands/Visa_Logo1.png"
          width="74px"
          height="44px"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/partials/Main/banner.vue";
import sliders from "../components/partials/Main/sliders.vue";
import Tz from "../components/partials/Main/tz.vue";

export default {
  components: {
    Banner,
    sliders,
    Tz,
  },
};
</script>

<style></style>
