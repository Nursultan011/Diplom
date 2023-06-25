<template>
  <div class="popup" id="popup">
    <div class="popup_body">
      <div class="popup_content" v-if="steps == 1">
        <div class="popup__title">
          ACCOUNT
          <span
            class="popup__close popup-close"
            @click="$emit('auth-modal', false)"
          >
            X
          </span>
        </div>
        <div class="pole">
          <span>E-mail</span>
          <input type="email" v-model="login.login" placeholder="E-mail" />
        </div>
        <div class="pole">
          <span>Password</span>
          <div style="position: relative">
            <input
              name="password"
              :type="passwordFieldType"
              v-model="login.password"
              placeholder="Password"
            />
            <span
              @click="togglePasswordVisibility"
              class="password-control"
              style="width: 20px; height: 20px"
            ></span>
          </div>
        </div>
        <div style="position: relative">
          <div style="margin-top: 30px; display: inline-block">
            <input
              style="border-radius: 50%"
              type="checkbox"
              id="rememberme"
              name="rememberme"
            />
            <label for="rememberme" style="font-size: 12px; margin-top: 30px">
              Remember Me
            </label>
            <span @click="steps = 3" class="forgot_pass">Forgot Password?</span>
          </div>
          <div></div>
        </div>
        <div class="save-btn">
          <button @click="loginSubmit">Sign In</button>
          <div
            style="
              font-weight: 500;
              font-size: 16px;
              line-height: 20px;
              display: flex;
              justify-content: center;
              margin-top: 20px;
            "
          >
            <span style="color: #bbc2d0">No Account?</span>
            <span
              class="popup-link"
              @click="steps = 2"
              style="text-decoration: none; color: #000"
            >
              Register
            </span>
            <br />
          </div>
        </div>
        <div
          class="sign-via"
          style="display: flex; flex-direction: column; margin-top: 70px"
        >
          <button type="button" class="" style="width: 100%; text-align: left">
            <img
              src="../../assets/img/Vect21r.svg"
              width="24px"
              height="24px"
              alt=""
              style="margin-right: 80px"
            />
            Sign In via E-mail
          </button>
          <br />
          <button type="button" class="" style="width: 100%; text-align: left">
            <img
              src="../../assets/img/google1.svg"
              width="24px"
              height="24px"
              alt=""
              style="margin-right: 80px"
            />
            Sign In via Google
          </button>
        </div>
      </div>
      <div class="popup_content" v-else-if="steps == 2">
        <div class="popup__title">
          REGISTRATION<a href="#header" class="popup__close popup-close"> X </a>
        </div>
        <div class="pole">
          <span>First Name</span>
          <input type="text" placeholder="First Name" />
        </div>
        <div class="pole">
          <span>Phone Number</span>
          <input type="tel" class="phone_num" placeholder="Phone Number" />
        </div>
        <div class="pole">
          <span>E-mail</span>
          <input type="email" placeholder="E-mail" />
        </div>
        <div class="pole">
          <span>Password</span>
          <div style="position: relative">
            <input
              type="password"
              id="password-input"
              placeholder="Password"
              name="password"
            />
            <a
              href="#"
              class="password-control"
              onclick="return show_hide_password(this);"
              style="width: 20px; height: 20px"
            ></a>
          </div>
        </div>
        <div class="pole">
          <div>
            <label class="agreement">
              <input type="checkbox" name="radio" />
              Agree To The Use Of Cookies
            </label>
          </div>
        </div>

        <div class="save-btn">
          <button @click="registerSubmit">Register</button>
          <div
            style="
              font-weight: 500;
              font-size: 16px;
              line-height: 20px;
              display: flex;
              justify-content: center;
              margin-top: 20px;
            "
          >
            <span style="color: #bbc2d0">Already Have An Account?</span>
            <span
              @click="steps = 1"
              class="popup-link"
              style="text-decoration: none; color: #000"
            >
              Sign In
            </span>
          </div>
        </div>
        <div
          class="sign-via"
          style="display: flex; flex-direction: column; margin-top: 70px"
        >
          <button type="button" class="" style="width: 100%; text-align: left">
            <img
              src="img/Vect21r.svg"
              width="24px"
              height="24px"
              alt=""
              style="margin-right: 80px"
            />
            Sign In via E-mail
          </button>
          <br />
          <button type="button" class="" style="width: 100%; text-align: left">
            <img
              src="img/google1.svg"
              width="24px"
              height="24px"
              alt=""
              style="margin-right: 80px"
            />
            Sign In via Google
          </button>
        </div>
      </div>
      <div class="popup_content" v-else-if="steps == 3">
        <div class="popup__title">
          Password Recovery
          <span
            class="popup__close popup-close"
            @click="$emit('auth-modal', false)"
          >
            X
          </span>
        </div>
        <div class="nums">
          <div class="pole">
            <span>Phone Number</span>
            <input type="tel" class="phone_num" placeholder="Phone Number" />
          </div>
        </div>
        <div class="reset_pass">
          <div class="pole">
            <span>New Password</span>
            <input type="password" placeholder="New Password" />
          </div>
          <div class="pole">
            <span>Password</span>
            <div style="position: relative">
              <input
                type="password"
                id="password-input"
                placeholder="Password"
                name="password"
              />
            </div>
          </div>
        </div>
        <div>
          <button class="reset_pass_btn" @click="forgotSubmit">
            Reset Password
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
  setup() {
    const steps = ref(1);

    const passwordFieldType = ref("password");

    const togglePasswordVisibility = () => {
      passwordFieldType.value =
        passwordFieldType.value === "password" ? "text" : "password";
    };

    const login = ref({
      login: "",
      password: "",
    });

    const register = ref({
      login: "",
      password: "",
    });

    const forgot = ref({
      phone: "",
    });

    const loginSubmit = async () => {
      try {
        const response = await axios.post("/user/login", login.value);

        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };

    const registerSubmit = async () => {
      try {
        const response = await axios.post("/user/save", register.value);

        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };

    const forgotSubmit = async () => {
      try {
        const response = await axios.post("/user/save", forgot.value);

        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };

    return {
      steps,
      login,
      register,
      forgot,
      passwordFieldType,
      togglePasswordVisibility,
      loginSubmit,
      registerSubmit,
      forgotSubmit,
    };
  },
};
</script>

<style></style>
