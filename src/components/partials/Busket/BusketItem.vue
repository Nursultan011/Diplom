<template>
    <div class="busket-item">
        <div class="busket-item__content">
            <div class="busket-item__img"></div>

            <div class="busket-item__text">
                <h4 class="busket-item__name">{{ item.name }}</h4>
                <p class="busket-item__describtion">{{ item.describe }}</p>
            </div>
        </div>
        

        <div class="busket-item__count">
            <div :class=" !isMinusActive ? 'busket-item__minus busket-item__minus_dis' : 'busket-item__minus' " v-on:click="onMinus">-</div>
            <div class="busket-item__number">{{ count }}</div>
            <div :class=" !isPlusActive ? 'busket-item__plus busket-item__plus_dis' : 'busket-item__plus' " v-on:click="onPlus">+</div>
        </div>

        <div class="busket-item__del" v-on:click="onDel"></div>

        <p class="busket-item__cost">{{ cost }} KZT</p>
        
    </div>    
</template>

<script>
export default {
    name: 'BusketItem',
    props: {
        item: Object
    },
    data() {
        return {
            count: this.item.count,
            isMinusActive: this.item.count != 1,
            isPlusActive: true
        }
    },
    computed: {
        cost() {
            var newPrice = parseInt(this.item.cost.split(' ').join(''));

            if(typeof(newPrice) == 'number') {

                return newPrice * this.count;
            }

            return item.cost;
        }
    },
    methods: {
        onDel() {
            var itemToRemove = this.item;
            console.log(itemToRemove);
            // store.commit('REMOVE_PRODUCT_FROM_BUSKET', itemToRemove);
        },
        onMinus() {
            console.log('-');
            if(this.count !== 1) {
                this.count--;
            }

            var itemToAdd = this.item;
            var newPrice = parseInt(this.item.cost.split(' ').join(''));
            itemToAdd.count = this.count;

            // if(typeof(newPrice) == 'number') {
            //     itemToAdd.totalCost = newPrice * this.count;
            //     store.commit('SET_VALUE_TO_PRODUCT_IN_BUSKET', itemToAdd);
            // }else {
            //     itemToAdd.totalCost = item.price;
            //     store.commit('SET_VALUE_TO_PRODUCT_IN_BUSKET', itemToAdd);
            // }
            
            this.setButtonDis();
        },
        onPlus() {
            console.log('+');
            if(this.count !== 50) {
                this.count++;
            }

            var itemToAdd = this.item;
            var newPrice = parseInt(this.item.cost.split(' ').join(''));
            itemToAdd.count = this.count;

            // if(typeof(newPrice) == 'number') {
            //     itemToAdd.totalCost = newPrice * this.count;
            //     store.commit('SET_VALUE_TO_PRODUCT_IN_BUSKET', itemToAdd);
            // }else {
            //     itemToAdd.totalCost = item.price;
            //     store.commit('SET_VALUE_TO_PRODUCT_IN_BUSKET', itemToAdd);
            // }


            this.setButtonDis();
            
        },
        setButtonDis() {
            if(this.count === 1) {
                this.isMinusActive = false;
            } else {
                this.isMinusActive = true;
            }
            if(this.count === 50) {
                this.isPlusActive = false;
            } else {
                this.isPlusActive = true;
            }

        },
    }
}
</script>

<style lang="scss" scoped>
    .busket-item {
        width: 100%;
        height: 152px;

        padding: 16px;
        box-sizing: border-box;

        display: flex;
        justify-content: space-between;

        border: 1px solid var(--grey-2, #E1E5EC);
        background: var(--white, #FFF);

        position: relative;

        &__content {
            display: flex;
            gap: 16px;
            align-items: flex-start;
        }

        &__img {
            background: url(../../../assets/catalog/dress2.png);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;

            width: 120px;
            height: 120px;
        }

        &__text {
            display: flex;
            width: 280px;
            flex-direction: column;
        }

        &__name {
            color: var(--text-color, #000);
            font-size: 16px;
            font-family: Montserrat;
            font-weight: 500;

        }
        
        &__describtion {
            color: var(--grey-3, #BBC2D0);
            font-size: 16px;
            font-family: Montserrat;
            font-weight: 500;

        }

        &__count {
            display: flex;
            width: 116px;
            height: 46px;
            padding: 8px;
            justify-content: center;
            align-items: center;
            gap: 8px;
            background: var(--grey-1, #F7F7F7);

            box-sizing: border-box;

        }

        &__minus, &__plus, &__number {
            display: flex;
            width: 30px;
            height: 30px;
            padding: 10px;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            box-sizing: border-box;

            color: #000;
            text-align: center;
            font-size: 18px;
            font-family: Montserrat;
            font-weight: 600;
            line-height: 130%;


            &_dis {
                color: #BBC2D0;
            }
        }

        &__minus, &__plus {
            cursor: pointer;
        }

        &__del {
            background: url(../../../assets/busket/icon-delete.svg);
            background-repeat: no-repeat;
            background-size: contain;
            width: 40px;
            height: 40px;
        }

        &__cost {
            position: absolute;
            bottom: 16px;
            right: 16px;

            color: var(--text-color, #000);
            font-size: 18px;
            font-family: Montserrat;
            font-weight: 600;

        }
    }
</style>