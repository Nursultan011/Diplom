<template>
  <div class="wrapper">
    <header>
      <router-link to="#">
        <div class="logo">
          <img src="../../assets/img/Group700.svg" alt="" />
        </div>
      </router-link>
      <router-link to="#">
        <div class="directory" style="margin-top: 9px">
          <img
            src="../../assets/img/Icon.svg"
            width="16px"
            height="12px"
            alt=""
          />
          <span>DIRECTORY</span>
        </div>
      </router-link>
      <div class="search" style="margin-top: 9px">
        <img src="../../assets/img/search.svg" alt="" />
        <input type="text" placeholder="SEARCH" />
      </div>
      <div class="components" style="margin-top: 9px">
        <img
          src="../../assets/img/Component1.svg"
          style="margin-right: 20px; cursor: pointer"
          alt=""
        />
        <div @click="auth" class="popup-link">
          <img
            src="../../assets/img/icon-profile.svg"
            style="cursor: pointer"
            alt=""
          />
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup(props, { emit }) {
    const auth = () => {
      emit("auth-modal", true);
    };

    return {
      auth,
    };
  },
};
</script>

<style></style>
