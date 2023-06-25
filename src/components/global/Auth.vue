<template>
  <div class="popup" id="popup">
    <div class="popup_body">
      <div class="popup_content">
        <div class="popup__title">
          ACCOUNT <a href="#header" class="popup__close popup-close">X</a>
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
              id="password-input-2"
              placeholder="Password"
              name="password"
            />
            <a
              href="#"
              class="password-control"
              onclick="return show_hide_password2(this);"
              style="width: 20px; height: 20px"
            ></a>
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
            <label for="rememberme" style="font-size: 12px; margin-top: 30px"
              >Remember Me</label
            >
            <a href="reset_pass.html" class="forgot_pass">Forgot Password?</a>
          </div>
          <div></div>
        </div>
        <div class="save-btn">
          <button>Sign In</button>
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
            <span style="color: #bbc2d0">No Account?</span
            ><a
              class="popup-link"
              href="#popup_2"
              style="text-decoration: none; color: #000"
              >Register</a
            >
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
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
