<template>
    <div class="busket-view">
        <!-- <Preloader :isActive="preloaderStatus"/> -->

        <BusketBlock :setPreloaderActive="setPreloaderActive" :setPreloaderUnActive="setPreloaderUnActive" />
    </div>
</template>

<script>
import BusketBlock from '@/components/partials/Busket/BusketBlock.vue'


export default {
    name: 'BusketPage',
    components: {
      BusketBlock,
    },
    data() {
        return {
            preloaderStatus: false,
        }
    },
     methods: {
        setPreloaderActive() {
            this.preloaderStatus = true;
        },
        setPreloaderUnActive() {
            this.preloaderStatus = false;
        }
    },
}
</script>

<style lang="scss" scoped>
    .busket-view {
        width: 85%;
        display: flex;
        align-items: center;
        flex-direction: column;

        padding-top: 80px;

        margin-bottom: 50px;
    }
</style>