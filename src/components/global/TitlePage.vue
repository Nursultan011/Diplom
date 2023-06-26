<template>
    <div class="title-page">
        <div class="title-page__history-links">
            <span >
                <a v-for="link in links" :key="link.id" :href="link.href" class="title-page__link">{{ link.name }} &gt;</a>
                <span class="title-page__link title-page__link_active">{{ title }}</span>
            </span>
        </div>
        <h2 class="title-page__title">{{ title }}</h2>
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

<style lang="scss">
    .title-page {

        width: 90%;

        &__history-links {
            align-self: flex-start;

            margin-bottom: 24px;
            margin-top: 44px;
        }

        &__link {
            color: var(--grey-3, #BBC2D0);
            font-size: 14px;
            font-family: Montserrat;
            line-height: 130%;

            text-transform: uppercase;


            &_active {
                color: #000;

            }
        }

        &__title {
            align-self: flex-start;

            color: var(--text-color, #000);
            font-size: 36px;
            font-family: Montserrat;
            font-weight: 600;

            text-transform: uppercase;

            margin-bottom: 40px;
        }
    }
</style>