<template>
  <section id="login">
    <div class="login container-fluid">
      <div class="row">
        <div class="col-left col-12 col-md-6 col-lg-5">
          <div class="left-side">
            <img
              src="~/assets/img/logos/logo-ipsum.png"
              class="logo-ipsum"
              alt=""
            />
            <h2>Log in to your Account</h2>
            <p>Welcome back! Enter your data account</p>
            <div class="dividen"></div>
            <form @submit.prevent="submit">
              <div class="input-card">
                <!-- input username -->
                <div
                  class="input-group-manual mb-3 animate__animated animate__fadeInRight"
                >
                  <i class="material-icons mx-3"> face_6 </i>
                  <input
                    type="text"
                    class="input"
                    name="username"
                    placeholder="Username"
                    required
                  />
                </div>

                <!-- input password -->
                <div
                  class="input-group-manual mb-4 animate__animated animate__fadeInRight"
                >
                  <i class="material-icons mx-3"> lock </i>
                  <input
                    :type="type"
                    class="input"
                    name="password"
                    placeholder="Password"
                    required
                  />
                  <span class="eyes">
                    <i
                      v-if="type === 'text'"
                      class="material-icons"
                      @click="typePass"
                    >
                      visibility
                    </i>
                    <i v-else class="material-icons" @click="typePass">
                      visibility_off
                    </i>
                  </span>
                </div>

                <!-- button submit -->
                <div
                  class="input-group mb-5 animate__animated animate__fadeInRight"
                >
                  <input
                    v-if="btnLoad"
                    type="submit"
                    class="btn shadow"
                    value="Masuk"
                  />
                  <button v-else class="btn" type="button" disabled>
                    <span
                      class="spinner-border spinner-border-sm"
                      aria-hidden="true"
                    ></span>
                    <span role="status">Loading...</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-right d-none d-md-block col-md-6 col-lg-7">
          <div class="right-side"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: "login",
  data() {
    return {
      btnLoad: true,
      type: "password",
    };
  },
  methods: {
    typePass() {
      const show = this.type === "password" ? "text" : "password";
      this.type = show;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

#login {
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
}

#login .login {
  min-height: 100vh;
}
#login .login .row {
  min-height: 100vh;
}
/* #login .login .row .col-6:nth-child(1) {
  min-height: cover;
  background: red;
} */

/* col left */
.col-left {
  padding: 20px !important;
  margin-block: auto;
}
img.logo-ipsum {
  height: 40px !important;
}

.dividen {
  height: 1px;
  background: #000;
  margin-bottom: 25px;
  margin-inline: auto;
  width: 80%;
}

/* form */
form {
  display: flex;
  flex-direction: column;
}

h2 {
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 5px;
}
p {
  margin-bottom: 25px;
}
.input-group-manual {
  position: relative;
  background: #f7f7f7;
  border: 2px solid #9f9f9f;
  height: 45px;
  width: 100%;
  /* width: 320px; */
  border-radius: 8px;
}

.input {
  height: 100%;
  border: none;
  background: #f7f7f7;
  margin-left: 50px;
  /* background: #cc15dd; */
  color: #000;
  width: 70%;
  margin-top: 0px !important;
}
i {
  position: absolute;
  color: #5e5e5e;
  top: 10px;
}
span.eyes i {
  cursor: pointer;
  right: 20px !important;
}
p {
  font-size: 14px;
}
.input::placeholder {
  color: #c7c7c7;
}
a {
  color: #bee5f2;
}

.input:focus {
  outline: none !important;
  border: none !important;
}

/* button */
.btn {
  border-radius: 8px;
  background: blue;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  /* width: 320px; */
}
.btn:hover {
  background: rgb(5, 5, 200);
}

/* right side */
.col-right {
  height: 100vh;
  background: url(../assets/img/illustrations/login.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0 !important;
}
.col-right .right-side {
  height: 100vh;
  background: linear-gradient(45deg, #0303b0b3, #060684a0);
}

@media screen and (min-width: 576px) {
  .col-left {
    width: 320px;
    margin-inline: auto;
  }
}
</style>
