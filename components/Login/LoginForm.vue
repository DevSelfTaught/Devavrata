<template>
    <div class="col-lg-6 col-md-6 col-12">
      <div class="p-5">
        <form>
          <h1
            class="display-6 deva-color fw-bold animate_animated animate_fadeInDown"
          >
            Login
          </h1>
          <p class="small text-secondary animate_animated animate_fadeInDown">
            Enter your account details
          </p>
          <div class="mb-3 py-2">
            <input
              type="text"
              class="form-control icon-text border-0 border-bottom border-danger opacity-50 rounded-0 Poppins"
              name="username"
              id="username"
              aria-describedby="helpId"
              placeholder="Username"
            />
          </div>
          <div class="mb-3 py-2">
            <input
              type="password"
              class="form-control border-0 border-bottom border-danger opacity-50 rounded-0 Poppins"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <nuxt-link to="/#" class="py-3 Poppins"
            ><span class="deva-color">Forgot Password</span></nuxt-link
          >
          <button
            type="submit"
            class="btn btn-submit-color w-100 my-3 border-0 shadow text-white Poppins"
          >
            Login
          </button>
        </form>
      </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
