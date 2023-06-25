<template>
  <the-header @auth-clicked="openAuth" />
  <router-view />
  <the-footer />
  <auth-modal v-if="openAuthModal" />
</template>

<script>
import { ref } from "vue";
import TheHeader from "./components/global/TheHeader.vue";
import TheFooter from "./components/global/TheFooter.vue";
import AuthModal from "./components/global/Auth.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
    AuthModal,
  },
  setup() {
    const openAuthModal = ref(false);

    const openAuth = () => {
      openAuthModal.value = true;
    };

    return {
      openAuthModal,
      openAuth,
    };
  },
};
</script>

<style lang="scss"></style>
