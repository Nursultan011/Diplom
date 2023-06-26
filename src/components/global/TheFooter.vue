<template>
  <footer class="footer">
    <div>
      <div class="contacts">CONTACTS</div>
      <div class="info">
        <img src="../../assets/global/email.svg" alt="" class="social_icon">
        <span>tezkiin@gmail.com</span>
      </div>
      <div class="info">
        <img src="../../assets/global/call.svg" alt="" class="social_icon">
        <span>+7 777 777 77 77</span>
      </div>
      <div class="info">
        <img src="../../assets/global/map.svg" alt="" class="social_icon">
        <span>Almaty, Al-Farabi st., 280</span>
      </div>
      <div class="info" >
        <img src="../../assets/global/InstagramLogo.svg" alt="" class="social_icon1">
        <img src="../../assets/global/TwitterLogo.svg" alt="" class="social_icon1">
        <img src="../../assets/global/FacebookLogo.svg" alt="" class="social_icon1">
      </div>
    </div>
    <div class="privac">
      <span>TERMS OF USE</span>
      <span>PERSONAL DATA PROCESSING POLICY</span>
      <span>PRIVACY POLICY</span>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
  .footer {
    width: 100%;
    display: flex;
    padding: 31px 66px 31px 66px;
    gap: 124px;
    box-sizing: border-box;

    & .privac {
      margin: 0;
    }

    & .contacts {
      margin-top: 0;
      margin-left: 0;
    }

    & .info {
      margin-left: 0;
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 800px) {
    .footer {
      gap: 75px;
    }

    footer .info span {
      font-size: 14px;
      line-height: 16px;
    }

    footer .privac span {
      font-size: 14px;
      line-height: 16px;
    }
  }

  @media screen and (max-width: 550px) {
    .footer {
      flex-direction: column;
      gap: 15px;
    }
  }
</style>
