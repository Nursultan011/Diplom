<template>
    <div class="catalog-list">
        <CatalogItem v-for="item in data" :key="item.id" :item="item"/>
    </div>
</template>

<script>
import CatalogItem from '@/components/partials/Catalog/CatalogItem.vue'

export default {
    name: 'CatalogList',
    components: {
        CatalogItem
    },
    props: {
        data: Array,
    }
}
</script>

<style>
    .catalog-list {
        width: 75%;
        display: flex;
        flex-direction: row;
        justify-content: center;

        flex-wrap: wrap;

        gap: 20px;

    }
</style>