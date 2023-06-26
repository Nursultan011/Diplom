<template>
  <div class="catalog-item">
    <img
      src="../../../assets/catalog/dress1.png"
      alt="item.name"
      class="catalog-item__image"
    />
    <h4 class="catalog-item__name">{{ item.name }}</h4>
    <p class="catalog-item__cost">{{ item.cost }} KZT</p>

    <button class="catalog-item__btn">ADD TO BAG</button>
    <button class="catalog-item__like"></button>
  </div>
</template>

<script>
export default {
  name: "CatalogItem",
  props: {
    item: {
      default: {},
      type: Object,
    },
  },
};
</script>

<style lang="scss">
.catalog-item {
  width: 285px;
  height: 448px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;

  box-sizing: border-box;

  border: 1px solid var(--grey-2, #e1e5ec);
  background: var(--white, #fff);

  position: relative;

  &__image {
    width: 238px;
    height: 238px;

    margin-bottom: 20px;
  }

  &__name {
    text-align: left;
    color: var(--text-color, #000);
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 600;

    width: 100%;
    height: 60px;
    margin-bottom: 16px;
  }

  &__cost {
    text-align: left;

    color: var(--text-color, #000);
    font-size: 18px;
    font-family: Montserrat;
    font-weight: 700;

    width: 100%;
    margin-bottom: 20px;
  }

  &__btn {
    display: flex;
    padding: 10px 20px;
    justify-content: center;
    align-items: center;

    border: 0.5px solid #000;
    background: #fff;

    color: #000;
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 600;

    align-self: flex-start;
  }

  &__like {
    width: 24px;
    height: 24px;
    background: url(../../../assets/catalog/heart.png);
    background-size: contain;

    border: none;

    position: absolute;

    top: 32px;
    right: 32px;
  }
}
</style>
