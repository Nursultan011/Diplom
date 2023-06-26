<template>
  <the-header @auth-modal="openAuth" />
  <router-view />
  <the-footer />
  <auth-modal
    :class="{ open: openAuthModal }"
    v-if="openAuthModal"
    @auth-modal="openAuth"
  />
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

    const openAuth = (value) => {
      openAuthModal.value = value;
    };

    return {
      openAuthModal,
      openAuth,
    };
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #FBFBFB;
}
</style>
