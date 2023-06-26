<template>
    <div class="settings-page">
        <div class="settings__nav">
            <a href="" class="settings__link settings__link_active">MY ACCOUNT</a>
            <a href="" class="settings__link">MY ORDERS</a>
            <a href="" class="settings__link">FAVORITES</a>
            <a href="" class="settings__link">DELIVERY ADDRESS</a>
            <a href="" class="settings__link">RECEIPT NOTIFICATIONS</a>
            <a href="" class="settings__link">LOGOUT</a>
        </div>

        <router-view />
        <!-- <Account /> -->
    </div>
</template>

<script>
import Account from '@/components/partials/Settings/Account.vue'

export default {
    name: 'Settings',
    components: {
        Account
    }
}
</script>

<style lang="scss">
    .settings-page {
        width: 80%;
        display: flex;
        flex-direction: row;
        padding-top: 44px;

        margin-bottom: 70px;
        gap: 53px;
    }

    .settings {
        &__nav {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
            height: 505px;
        }
        &__link {
            color: var(--text-color, #000);
            font-size: 18px;
            font-family: Montserrat;
            font-weight: 600;
            line-height: 130%;

            &_active {
                color: #565656;
            }
        }
    }
</style>