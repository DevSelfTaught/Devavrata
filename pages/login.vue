<template>
  <section id="login">
    <div class="login container-fluid">
      <div class="row">
        <div class="col-left col-12 col-md-5 col-lg-4">
          <div class="left-side">
            <img src="~/assets/img/logos/DSI.png" class="logo-ipsum" alt="" />
            <h2>Log in to your Account</h2>
            <p>Welcome back! Enter your data account</p>
            <div class="dividen"></div>
            <form @submit.prevent="submit">
              <div class="input-card">
                <!-- input username -->
                <div class="input-group-manual mb-3 animate__animated animate__fadeInRight">
                  <i class="material-icons mx-3"> face_6 </i>
                  <input type="text" class="input" name="Username" placeholder="Username" required />
                </div>

                <!-- input password -->
                <div class="input-group-manual mb-4 animate__animated animate__fadeInRight">
                  <i class="material-icons mx-3"> lock </i>
                  <input :type="type" class="input" name="Password" placeholder="Password" required />
                  <span class="eyes">
                    <i v-if="type === 'text'" class="material-icons" @click="typePass">
                      visibility
                    </i>
                    <i v-else class="material-icons" @click="typePass">
                      visibility_off
                    </i>
                  </span>
                </div>

                <!-- button submit -->
                <div class="input-group mb-5 animate__animated animate__fadeInRight">
                  <input v-if="btnLoad" type="submit" class="btn btn-primary w-100 shadow" value="Masuk" />
                  <button v-else class="btn btn-danger w-100" type="button" disabled>
                    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                    <span role="status">Loading...</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-right d-none d-md-block col-md-7 col-lg-8">
          <div class="text-wrapper">
            <img src="~/assets/img/logos/Okaasan_notext.png">
            <h1>Okaasan Laundry</h1>
            <h6>Just one small step to enter
              your dashboard</h6>
            <P>Manage Membership programs in one application</P>
          </div>
          <div class="right-side">
            <video autoplay preload="" muted="" loop="" playsinline="">
              <source src="/Video.mp4" type="video/mp4">
            </video>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Swal from "sweetalert2";
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  layout: "login",
  computed: {
    ...mapState('login', ['btnLoad', 'type']),
  },
  methods: {
    ...mapActions('login', ['']),
    ...mapMutations('login', ['typePass']),
    submit(event) {
      this.$store.dispatch('login/submit', { event, $cookies: this.$cookies })
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

#login {
  font-family: "Poppins", sans-serif !important;
  min-height: 100vh;
  overflow: hidden;
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
  height: 42px !important;
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
  margin-top: 25px;
  margin-bottom: 5px;
  font-family: "Poppins", sans-serif;
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

/* right side */
.col-right {
  height: 100vh;
  background: #000;
  padding: 0 !important;
  overflow: hidden;
  position: relative;
  /* background: url(../assets/img/illustrations/login.jpg);
  background-size: cover;
  background-repeat: no-repeat; */
}

.col-right::before {
  content: "";
  width: 100%;
  height: 100%;
  background: #000000a1;
  position: absolute;
  top: 0;
}

.col-right .text-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 99;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.col-right .text-wrapper h1, .col-right .text-wrapper h6  {
  color: #fff;
}

.col-right .right-side {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0000000a;
}

.col-right .right-side video {
  /* width: 600px; */
  height: 100vh;
  /* z-index: -999; */
}


@media screen and (min-width: 576px) {
  .col-left {
    width: 320px;
    margin-inline: auto;
  }
}
</style>
