<template>
  <banner />
  <sliders class-name="man" title="MAN" />
  <sliders class-name="woman" title="WOMAN" />
  <sliders class-name="accessories" title="ACCESORIES" />
  <tz />
  <social-media />
</template>

<script>
import Banner from "../components/partials/Main/banner.vue";
import sliders from "../components/partials/Main/sliders.vue";
import Tz from "../components/partials/Main/tz.vue";
import SocialMedia from "../components/partials/Main/socialMedia.vue";

export default {
  components: {
    Banner,
    sliders,
    Tz,
    SocialMedia,
  },
};
</script>

<style></style>
