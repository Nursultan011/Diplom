<template>
  <div class="wrapper">
    <header class="header">
      <router-link to="#">
        <div class="logo">
          <img src="../../assets/img/Group700.svg" alt="" />
        </div>
      </router-link>
      <div class="directory" style="margin-top: 9px" v-on:click='toogleMenu'>
        <img
          src="../../assets/img/Icon.svg"
          alt=""
          style="width: 16px; height: 12px;"
        />
        <span>DIRECTORY</span>
      </div>
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

    <div :class="'header-nav ' + (isMenu ? 'header-nav_active' : '')">
      <div class="header-nav__links">
        <div class="header-nav__link">MAN</div>
        <div class="header-nav__link">WOMAN</div>
        <div class="header-nav__link">ACCESSORIES</div>
        <div class="header-nav__link">OUTLET</div>
      </div>
    </div>

    <div :class="'header-menu ' + (isMenu ? 'header-menu_active' : '')">
      <a href="" class="header-menu__link">New in</a>
      <a href="" class="header-menu__link">Shirts</a>
      <a href="" class="header-menu__link">T-shirts &amp; Polo Shirts</a>
      <a href="" class="header-menu__link">Jumpers &amp; Cardigans</a>
      <a href="" class="header-menu__link">Coats &amp; Jackets </a>
      <a href="" class="header-menu__link">Jeans</a>
      <a href="" class="header-menu__link">Trousers</a>
      <a href="" class="header-menu__link">Hoodies &amp; Sweatshirts</a>
      <a href="" class="header-menu__link">Sale</a>
      <a href="" class="header-menu__link">View All</a>
      <a href="" class="header-menu__link">-</a>
    </div>
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
  data() {
    return {
      isMenu: false,
    }
  },
  methods: {
    toogleMenu() {
      this.isMenu = !this.isMenu
    }
  }
};
</script>

<style lang="scss">
  .wrapper {
    background:  #fff;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header {
    width: 90%;
    z-index: 10;
    background: #fff;

  }

  header {
    .logo {
      display: flex;
    }

    .search {
      display: flex;
    }
  }

  .header-nav {
    z-index: 5;
    position: absolute;
    top: 0;
    width: 100%;
    height: 50px;

    background: #fff;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: top 0.5s ease;

    &_active {
      top: 98px;
    }

    &__links {
      width: 80%;
      display: flex;
      flex-direction: row;

      gap: 80px;
    }

    &__link {
      color: #000;
      font-size: 20px;
      font-family: Montserrat;
      font-weight: 500;
      line-height: 130%;

      text-transform: uppercase;

      padding: 12px 23px;

      &:hover {
        border-bottom: 1px solid #000;

      }
    }

    
  }

  .header-menu {
    width: 440px;

    position: absolute;
    top: 180px;
    left: -441px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: #fff;
    z-index: 10;

    transition: left 0.5s ease;

    &_active {
      left: -20px;
    }

    &__link {
      padding: 16px 120px;
      width: 100%;

      box-sizing: border-box;

      text-align: left;
      color: var(--text-color, #000);
      font-size: 18px;
      font-family: Montserrat;
      font-weight: 600;
      line-height: 130%;

    }
  }

  @media screen and (max-width: 1100px) {
    .header-nav {
      height: 43px;

      &__links {
        gap: 40px;
      }

      &__link {
        font-size: 14px;
      }
    }
  }

  @media screen and (max-width: 700px) {
    .header-nav {
      &__links {
        gap: 20px;
      }

      &__link {
        padding: 12px 0;
        
      }
    }

    header .logo {
      display: none;
    }
  }

  @media screen and (max-width: 500px) {
    .header {
      // justify-content: space-between;
    }
    header .search {
      display: none;
    }
  }
</style>
