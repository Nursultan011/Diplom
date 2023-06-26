<template>
    <div class="filter-blocks">
        <h3 class="filter-blocks__title">Filter</h3>
        <div class="filter-blocks__inputs">
            <label>
                <input type="radio" name="filter" id="filter-1"> DRESS TYPE
            </label>

            <label>
                <input type="radio" name="filter" id="filter-1"> COLOUR
            </label>

            <label>
                <input type="radio" name="filter" id="filter-1"> SIZE
            </label>

            <label>
                <input type="radio" name="filter" id="filter-1"> PRICE
            </label>

            <label>
                <input type="radio" name="filter" id="filter-1"> LENGHT
            </label>

            <label>
                <input type="radio" name="filter" id="filter-1"> SLEEVE LENGHT
            </label>

            <label>
                <input type="radio" name="filter" id="filter-1"> PATTERN
            </label>
        </div>
        
        <div class="filter-blocks__line"></div>

        <div class="filter-blocks__inputs">
            <h3 class="filter-blocks__subtitle">TYPE</h3>
            <label>
                <input type="radio" name="type" id="filter-2"> DRESSES
            </label>

            <label>
                <input type="radio" name="type" id="filter-2"> MINI DRESSES
            </label>

            <label>
                <input type="radio" name="type" id="filter-2"> MIDI DRESSES
            </label>

            <label>
                <input type="radio" name="type" id="filter-2"> SHIRT DRESSES
            </label>

            <label>
                <input type="radio" name="type" id="filter-2"> BODYCON DRESSES
            </label>

            <label>
                <input type="radio" name="type" id="filter-2"> -
            </label>

        </div>

        <div class="filter-blocks__line"></div>

        <div class="filter-blocks__inputs">
            <h3 class="filter-blocks__subtitle">TRENDING</h3>
            <label>
                <input type="radio" name="trending" id="filter-3"> BASIC
            </label>

            <label>
                <input type="radio" name="trending" id="filter-3"> PLAIN
            </label>

            <label>
                <input type="radio" name="trending" id="filter-3"> FLORAL
            </label>

            <label>
                <input type="radio" name="trending" id="filter-3"> LACE
            </label>

            <label>
                <input type="radio" name="trending" id="filter-3"> ABSTRACT
            </label>

            <label>
                <input type="radio" name="trending" id="filter-3"> STRIPED
            </label>

            <label>
                <input type="radio" name="trending" id="filter-3"> SPOT
            </label>

        </div>

        <div class="filter-blocks__line"></div>

        <div class="filter-blocks__cost">
            <div class="filter-blocks__cost-inputs">
                <input type="number" name="input-number-1" id="input-number-1" class="filter-blocks__cost-input" placeholder="From">
                <input type="number" name="input-number-2" id="input-number-2" class="filter-blocks__cost-input" placeholder="To">
                <button class="filter-blocks__btn">OK</button>
            </div>
            
            <section class="filter-blocks__slider">
                <input class="filter-blocks__range" :value="100" :min="0" :max="1000" step="10" type="range" >
                <input class="filter-blocks__range" :value="900" :min="0" :max="1000" step="10" type="range" >
            </section>
        </div>

        <div class="filter-blocks__line"></div>

        <div class="filter-blocks__inputs" style="margin-bottom: 30px">
            <h3 class="filter-blocks__subtitle">SIZE</h3>
            <label>
                <input type="radio" name="size" id="filter-4"> XS
            </label>

            <label>
                <input type="radio" name="size" id="filter-4"> S
            </label>

            <label>
                <input type="radio" name="size" id="filter-4"> M
            </label>

            <label>
                <input type="radio" name="size" id="filter-4"> L
            </label>

        </div>

    </div>
</template>

<script>
export default {
    name: 'FilterBlocks'
}
</script>

<style lang="scss">
    .filter-blocks {
        display: flex;
        width: 25%;
        height: fit-content;
        padding: 16px;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;

        border: 1px solid var(--grey-2, #E1E5EC);
        background: #FFF;


        &__title {
            color: var(--text-color, #000);
            font-size: 18px;
            font-family: Montserrat;
            font-weight: 600;
            line-height: 130%;

        }

        &__subtitle {
            color: var(--grey-3, #BBC2D0);
            font-size: 16px;
            font-family: Montserrat;
            font-weight: 500;
            line-height: 21px;

        }

        &__cost {
            display: flex;
            flex-direction: column;
            align-items: center;

            gap: 16px;
        }

        &__cost-inputs {
            display: flex;
            flex-direction: row;
            justify-content: space-between;


        }

        &__cost-inputs &__cost-input {
            width: 32%;
            height: 40px;

            background: var(--grey-1, #F7F7F7);

            margin: 0;
            
            margin-right: 5px;

            color: var(--grey-3, #BBC2D0);
            font-size: 16px;
            font-family: Montserrat;
            font-weight: 500;
            line-height: 21px;

            outline: none;

            box-sizing: border-box;
        }

        &__btn {
            height: 40px;
            width: 30%;
            display: flex;
            padding: 9px 16px;
            justify-content: center;
            align-items: center;
            background: #565656;

            color: var(--white, #FFF);
            font-size: 16px;
            font-family: Montserrat;
            font-weight: 500;
            line-height: 21px;

            box-sizing: border-box;

            border: none;
            outline: none;
        }

        &__inputs {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            gap: 16px;
        }

        &__line {
            width: 100%;
            height: 1px;
            background: #BBC2D0;
        }


        &__slider {
            position: relative;
            height: 20px;
            width: 100%;

        }

        &__range {
            position: absolute;
        }

        &__slider input {
            position: absolute;
            left: 0;
            top: 15px;
            width: 100%;
            outline: none;
            margin: 0;
            padding: 0;
        }

        &__slider input::-webkit-slider-thumb {
            pointer-events: all;
            position: relative;
            z-index: 1;
            outline: 0;
        }

        &__slider input::-moz-range-thumb {
            pointer-events: all;
            position: relative;
            z-index: 10;
            -moz-appearance: none;
            width: 9px;
        }

        &__range {
            -webkit-appearance: none;
            width: calc(100% - (73px));
            height: 3px;
            border-radius: 5px;
            background: #d7dcdf;
            outline: none;
            padding: 0;
            margin: 0;
            background: #BBC2D0;
        }

        &__range::-webkit-slider-thumb {
            appearance: none;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background: #565656;
            cursor: pointer;

        }
    }
</style>