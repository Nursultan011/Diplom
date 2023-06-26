<template>
    <div class="busket-status">
        <div class="busket-status__stage">Bag</div>
        <div class="busket-status__line"></div>
        <div class="busket-status__stage busket-status__stage_2">DELIVERY</div>
    </div>

    <div class="busket__content">
        <div class="busket__list">
            <BusketItem v-for="item in data" :key="item.id" :item="item" />
            <div class="busket__btn-next">Next</div>
        </div>
        <div class="busket__payment">
            <div class="busket-promo">
                <h3 class="busket-promo__title">ADD PROMO CODE</h3>
                <input type="text" class="busket-promo__input" placeholder="PROMO CODE">
                <div class="busket__btn-next busket__btn-next_big">Next</div>

            </div>
        </div>
    </div>
</template>

<script>
import BusketItem from './BusketItem.vue'


export default {
    name: 'BusketBlock',
    components: {
        BusketItem
    },
    data() {
        return {
            data: [
                {
                    name: 'Zip Through Knitted Shirt ',
                    describe: 'Colour: Marine Blue',
                    cost: '45 000',
                    count: 1,
                    id: 1
                },
                {
                    name: 'Zip Through Knitted Shirt ',
                    describe: 'Colour: Marine Blue',
                    cost: '45 000',
                    count: 1,
                    id: 2
                },
                {
                    name: 'Zip Through Knitted Shirt ',
                    describe: 'Colour: Marine Blue',
                    cost: '45 000',
                    count: 2,
                    id: 3
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .busket-status {
        display: flex;
        align-self: flex-start;

        align-items: center;

        margin-bottom: 40px;

        &__stage {
            display: flex;
            width: 200px;
            padding: 12px 24px;
            justify-content: center;
            align-items: center;

            border: 0.5px solid #000;

            color: #565656;
            text-align: center;
            font-size: 16px;
            font-family: Montserrat;
            font-weight: 500;

            text-transform: uppercase;

            &_2 {
                background: #CACACA;
                color: var(--button-primary-text-default, #FFF);
                border: none;
            }
        }

        &__line {
            width: 88px;
            height: 1px;
            background: #E1E5EC;
        }
    }

    .busket-promo {
        display: flex;
        padding: 16px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        border: 1px solid var(--grey-2, #E1E5EC);
        background: var(--white, #FFF);

        &__title {
            color: #000;
            font-size: 18px;
            font-family: Montserrat;
            font-weight: 600;

            text-transform: uppercase;

            margin-bottom: 24px;

        }

        &__input {
            width: 355px;
            padding: 15px 16px;
            box-sizing: border-box;
            background: var(--grey-1, #F7F7F7);

            font-size: 16px;
            font-family: Montserrat;
            font-weight: 500;

            border: none;

        }

    }

    .busket {
        &__content {
            width: 100%;
            display: flex;
            align-items: flex-start;

            gap: 19px;

        }

        &__list {
            display: flex;
            flex-direction: column;
            gap: 8px;

            width: 65%;
        }

        &__btn-next {
            margin-top: 30px;

            width: 108px;
            box-sizing: border-box;

            display: flex;
            padding: 14px 32px;
            justify-content: center;
            align-items: center;

            color: var(--white, #FFF);
            text-align: center;
            font-size: 16px;
            font-family: Montserrat;
            font-weight: 500;


            background: #565656;
            align-self: flex-end;

            &_big {
                width: 355px;
                padding: 15px 16px;
                margin-top: 16px;
            }
        }

        &__payment {
            display: flex;
            flex-direction: column;

        }
    }
</style>