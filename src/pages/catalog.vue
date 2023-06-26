<template>
    <TitlePage :title="title" :links="links"/>
    <div class="catalog-content">
        <FilterBlocks />
        <CatalogList :data="items"/>
    </div>
</template>

<script>
import TitlePage from '@/components/global/TitlePage.vue'
import CatalogList from '@/components/partials/Catalog/CatalogList.vue'
import FilterBlocks from '@/components/partials/Catalog/FilterBlocks.vue'

export default {
    mame: 'CatalogPage',
    components: {
        TitlePage,
        CatalogList,
        FilterBlocks
    },
    data() {
        return {
            title: 'dress',
            links: [
                {
                    id: 1,
                    name: 'woman',
                    href: ''
                },
            ],
            items: [
                {
                    name: 'ABRA EMBROIDED MESH MIDI DRESS',
                    cost: 70000,
                    src: '../../../assets/catalog/dress1.png'
                },
                {
                    name: 'ABRA EMBROIDED MESH MIDI DRESS',
                    cost: 70000,
                    src: '../../../assets/catalog/dress1.png'
                },
                {
                    name: 'ABRA EMBROIDED MESH MIDI DRESS',
                    cost: 70000,
                    src: '../../../assets/catalog/dress1.png'
                },
                {
                    name: 'ABRA EMBROIDED MESH MIDI DRESS',
                    cost: 70000,
                    src: '../../../assets/catalog/dress1.png'
                },
                {
                    name: 'ABRA EMBROIDED MESH MIDI DRESS',
                    cost: 70000,
                    src: '../../../assets/catalog/dress1.png'
                },
                {
                    name: 'ABRA EMBROIDED MESH MIDI DRESS',
                    cost: 70000,
                    src: '../../../assets/catalog/dress1.png'
                },
                {
                    name: 'ABRA EMBROIDED MESH MIDI DRESS',
                    cost: 70000,
                    src: '../../../assets/catalog/dress1.png'
                },
                {
                    name: 'ABRA EMBROIDED MESH MIDI DRESS',
                    cost: 70000,
                    src: '../../../assets/catalog/dress1.png'
                },
            ]
        }
    }
};
</script>

<style>
    .catalog-content {
        width: 90%;

        display: flex;
        justify-content: space-between;

        margin-bottom: 50px;

    }
</style>
