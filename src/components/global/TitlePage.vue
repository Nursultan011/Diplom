<template>
    <div class="page__history-links">
        <span v-for="link in links" :key="link.id">
            <a :href="link.href" class="page__link">{{ link.name }}</a>
        </span>
        <h2 class="page__title">{{ title }}</h2>
    </div>
</template>

<script>
export default {
    name: 'TitlePage',
    props: {
        title: String,
        links: Array,
    }
}
</script>

<style>

</style>