<template>
  <div class="positon-relative Animation-card">
    <nuxt-link to="/Profile">
      <div class="card border-none rounded-4 p-4 mt-4">
        <div class="d-flex justify-content-between">
          <div class="">
            <i class="bi bi-person-vcard-fill h3 text-dark"></i>
            <h2 class="pt-1 fw-semibold text-dark Animation-inCard karla">Nabila</h2>
            <hr class="w-75 border-dark" />
            <h6 class="text-dark Animation-inCard karla">Operation Manager</h6>
          </div>

          <img
            src="~/assets/img/Okaasan_notext.png"
            width="68px"
            height="auto"
            class="img-card"
          />
        </div>
        <div class="mb-4"></div>
        <div>
          <p class="text-black Animation-inCard karla">No. Telp</p>
          <h6 class="text-dark Animation-inCard montserrat">0878</h6>
        </div>
      </div>
    </nuxt-link>
    <div
      class="fake-card border-none rounded-4 deva-bg d-none d-lg-block"
    ></div>
  </div>
</template>

<script>
export default {};
</script>

scr

<style scoped>
.card {
  background: linear-gradient(
      180deg,
      rgba(250, 249, 255, 0.35) 0%,
      rgba(197, 194, 211, 0.5) 100%
    ),
    url(~/assets/img/bg-card.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.Animation-card {
  animation: fadeIn; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1s; /* don't forget to set a duration! */
}
.Animation-inCard {
  animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1.5s; /* don't forget to set a duration! */
}
.fake-card {
  margin: -240px 10px;
  height: 250px;
  width: 100%;
  z-index: -2;
}

h2 {
  font-size: 24px;
}
p {
  font-size: 12px;
}
h6 {
  margin-top: -7px;
  font-size: 14px;
}
</style>
