<template>
  <div class="col-lg-6 col-md-6 col-12">
    <div class="p-5">
      <form @submit.prevent="submit">
        <h1 class="display-6 deva-color fw-bold animate_animated animate_fadeInDown">
          Login
        </h1>
        <p class="small text-secondary animate_animated animate_fadeInDown">
          Enter your account details
        </p>
        <div class="mb-3 py-2">
          <input type="text"
            class="form-control icon-text border-0 border-bottom border-danger opacity-50 rounded-0 Poppins"
            name="Username" id="Username" aria-describedby="helpId" placeholder="Username" />
        </div>
        <div class="mb-3 py-2">
          <input type="password" class="form-control border-0 border-bottom border-danger opacity-50 rounded-0 Poppins"
            name="Password" id="Password" placeholder="Password" />
        </div>
        <nuxt-link to="/#" class="py-3 Poppins"><span class="deva-color">Forgot Password</span></nuxt-link>
        <span>
          <button type="submit" class="btn btn-submit-color w-100 my-3 border-0 shadow text-white Poppins" v-if="btn">
            Login
          </button>
          <button v-else class="btn btn-danger w-100 my-3 border-0 shadow text-white Poppins" type="button" disabled>
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Loading...
          </button>
        </span>
      </form>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      btn: true
    }
  },
  methods: {
    async submit(event) {
      this.btn = false;
      const data = Object.fromEntries(new FormData(event.target));
      try {
        const result = await this.$auth.loginWith("local", { data: data });
        if (result) {
          this.btn = true;
          this.$cookies.set("AccessToken", result.data.AccessToken, {
            // secure: true,
            expires: 1,
          });
        }
      } catch (error) {
        this.btn = true;
        Swal.fire({
          icon: "error",
          title: error,
          text: error,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
