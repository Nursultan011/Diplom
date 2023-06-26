<template>
  <div class="social_media">
    <div class="social_content size-1">
      <div class="sm-square" >
        <img src="../../../assets/img/brands/1024px-Zara_Logo1.png" alt="" />
      </div>

      <div class="flex-gap flex-gap_22">
        <div class="med-square">
          <img
            src="../../../assets/img/brands/585990604f6ae202fedf28d31.png"
            alt=""
          />
        </div>

        <div class="flex-gap flex-gap_23">
          <div class="big-square" >
            <img
              src="../../../assets/img/brands/5a1aca8bf65d84088faf13921.png"
              alt=""
            />
          </div>

          <div class="big-square" >
            <img
              src="../../../assets/img/brands/5a1acaa8f65d84088faf13941.png"
              alt=""
            />
          </div>
        </div>
        

        <div class="med-square" >
          <img src="../../../assets/img/brands/Bershka-Logo1.png" alt="" />
        </div>

      </div>
      

      <div class="sm-square" >
        <img src="../../../assets/img/brands/Love-Republic-Logo1.png" alt="" />
      </div>
    </div>

    <div class="flex-gap flex-gap_23 size-2">
      <div class="med-square">
        <img
          src="../../../assets/img/brands/585990604f6ae202fedf28d31.png"
          alt=""
        />
      </div>

      <div class="med-square" >
        <img src="../../../assets/img/brands/Bershka-Logo1.png" alt="" />
      </div>
    </div>

    <div class="flex-gap flex-gap_23 size-3">
      <div class="sm-square" >
        <img src="../../../assets/img/brands/1024px-Zara_Logo1.png" alt="" />
      </div>
      <div class="sm-square" >
        <img src="../../../assets/img/brands/Love-Republic-Logo1.png" alt="" />
      </div>
    </div>

    <div class="cards">
      <div class="card">
        <img
          src="../../../assets/img/brands/3492281.png"
          width="44px"
          height="44px"
          alt=""
        />
      </div>
      <div class="card">
        <img
          src="../../../assets/img/brands/Mastercard-logo1.png"
          width="44px"
          height="44px"
          alt=""
        />
      </div>
      <div class="card">
        <img
          src="../../../assets/img/brands/Paypal_2014_logo1.png"
          width="44px"
          height="44px"
          alt=""
        />
      </div>
      <div class="card">
        <img
          src="../../../assets/img/brands/Visa_Logo1.png"
          width="74px"
          height="44px"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">

  .social_media {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 20px;
  }

  

  .social_content {
    display: flex;
    flex-direction: row;
    gap: 8px;

    align-items: center;
  }

  .big-square {
    width: 220px; 
    height: 220px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #fff;
  }

  .med-square {
    width: 200px;
    height: 200px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #fff;
  }

  .sm-square {
    width: 180px;
    height: 180px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #fff;
  }

  .flex-gap {

    &_23 {
      display: flex;
      flex-direction: row;
      gap: 20px;

      align-items: center;

    }

    &_22 {
      display: flex;
      flex-direction: row;
      gap: 14px;

      align-items: center;
    }
  }

  .size-2, .size-3 {
    display: none;
  }

  .cards {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    min-width: 300px;
  }

  .card {
    margin: 0;
  }

  @media screen and (max-width: 1300px) {
    .size-1 .sm-square {
      display: none;
    }

    .size-3 {
      display: flex;
    }
  }

  @media screen and (max-width: 910px) {
    .flex-gap_22 .med-square {
      display: none;
    }

    .size-2 {
      display: flex;
    }
  }

  @media screen and (max-width: 480px) {
    .flex-gap_23, .size-2, .size-3 {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
</style>
