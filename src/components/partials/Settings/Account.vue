<template>
    <div class="account">
        <div class="account__row">
            <div class="account__bio">
                <h3 class="account__title">MY ACCOUNT</h3>
                <label class="account__label">
                    First Name
                    <input type="text" class="account__input" placeholder="Name">
                </label>

                <label class="account__label">
                    E-mail
                    <input type="text" class="account__input" placeholder="E-mail">
                </label>

                <label class="account__label">
                    Phone Number
                    <input type="text" class="account__input" placeholder="Phone Number">
                </label>

                <p class="account__password">Password: <a href="" class="account__link">Change Password</a></p>
            </div>
            <div class="account__parameters">
                <h3 class="account__title">MY PARAMETERS</h3>
                <label class="account__label">
                    Bust Inches
                    <input type="text" class="account__input account__input_number" placeholder="0">
                </label>

                <label class="account__label">
                    Waist Inches
                    <input type="text" class="account__input account__input_number" placeholder="0">
                </label>

                <label class="account__label">
                    Hip Inches
                    <input type="text" class="account__input account__input_number" placeholder="0">
                </label>
            </div>
        </div>
        <button class="account__btn">Save</button>
    </div>
</template>

<script>
export default {
    name: 'Account',
    data() {
        return {

        }
    }
}
</script>

<style lang="scss">
    .account {
        display: flex;
        flex-direction: column;
        align-items: center;

        width: 50%;

        &__btn {
            display: flex;
            width: 355px;
            padding: 15px 16px;
            justify-content: center;
            align-items: center;

            box-sizing: border-box;
            background: #565656;

            color: var(--white, #FFF);
            font-size: 16px;
            font-family: Montserrat;
            font-weight: 600;

            border: none;


        }

        &__row {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: flex-start;

            justify-content: space-between;

            margin-bottom: 59px;
        }

        &__bio {
            display: flex;
            flex-direction: column;

            align-items: flex-start;

            gap: 20px;

        }

        &__parameters {
            display: flex;
            flex-direction: column;

            align-items: flex-start;

            gap: 20px;
        }

        &__title {
            color: #000;
            font-size: 18px;
            font-family: Montserrat;
            font-weight: 600;

            margin-bottom: 4px;

        }

        &__label {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            color: var(--text-color, #000);
            font-size: 16px;
            font-family: Montserrat;
            font-weight: 500;

            gap: 8px;

        }

        &__input {
            display: flex;
            width: 354px;
            padding: 15px 16px;
            align-items: center;
            gap: 10px;

            box-sizing: border-box;

            color: var(--text-color, #000);
            font-size: 16px;
            font-family: Montserrat;
            font-weight: 500;

            outline: none;
            border: none;

            background: var(--grey-1, #F7F7F7);

            &_number {
                width: 163px;
            }
        }

        &__password {
            color: var(--text-color, #000);
            font-size: 16px;
            font-family: Montserrat;
            font-weight: 500;
        }

        &__link {
            color: #565656;

        }
    }
</style>