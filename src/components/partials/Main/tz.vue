<template>
  <div class="tz">
    <div class="tz1"></div>
    <div class="tz2">
      <span>Tez KiiN</span>
      <p style="padding-top: 20px">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi quod
        minima distinctio aut explicabo, architecto aperiam ipsum quis numquam
        et doloribus assumenda ut esse quaerat sapiente praesentium officiis
        molestiae placeat nemo quidem, dolor, laboriosam cupiditate.
      </p>
      <p style="padding-top: 20px">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi quod
        minima distinctio aut explicabo, architecto aperiam ipsum quis numquam
        et doloribus assumenda ut esse quaerat sapiente praesentium officiis
        molestiae placeat nemo quidem, dolor, laboriosam cupiditate.
      </p>
      <p style="padding-top: 20px">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi quod
        minima distinctio aut explicabo, architecto aperiam ipsum quis numquam
        et doloribus assumenda ut esse quaerat sapiente praesentium officiis
        molestiae placeat nemo quidem, dolor, laboriosam cupiditate.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
  .tz {
    margin-bottom: 20px;
    position: relative;
    height: 592px;


    &1 {
      width: 50%;

      margin-left: 10%;
    }
    &2 {
      left: 45%;
      width: 50%;

      margin-top: 58px;
    }
  }

  @media screen and (max-width: 1100px) {
    .tz {
      height: 770px;

      flex-direction: row;


      &1 {
        margin-left: 10%;
      }
      &2 {
        position: absolute;

        left: 40%;
        width: 55%;
        margin-top: 24vw;
      }
    }
  }

  @media screen and (max-width: 800px) {

    .tz1 {
      
      margin-left: 5%;
    }
    .tz2 {
      left: 20%;
      width: 70%;
    }
  }

  @media screen and (max-width: 500px) {
    .tz {
      flex-direction: column;
      align-items: center;
      height: auto;
    }
    .tz1 {
      width: 90vw;
      height: 67vw;
      margin-left: 0;
      margin-bottom: 15px;
    }
    .tz2 {
      position: relative;
      left: 0;
      width: 90%;
      margin: 0;

      box-sizing: border-box;

    }
  }
</style>
