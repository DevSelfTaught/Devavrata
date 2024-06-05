<template>
  <div class="Animation-card">
    <nuxt-link to="/RiwayatAbsensi">
      <div class="card border-none rounded-4 p-4 mt-4 ">
        <div class="py-5 ">
          <h4 class="fw-semibold text-center text-dark Animation-RiwayatAbsensi karla text-capitalize">
            Riwayat Absensi {{ $auth.user.name.split(' ')[0] }}
          </h4>
        </div>
      </div>
    </nuxt-link>
    <div class="fake-card rounded-4 deva-bg d-none d-lg-block"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  background: linear-gradient(
      180deg,
      rgba(250, 249, 255, 0.35) 0%,
      rgba(197, 194, 211, 0.5) 100%
    ),
    url(~/assets/img/bg_history.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.Animation-RiwayatAbsensi {
  animation: fadeIn; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1.5s; /* don't forget to set a duration! */
}

.btn-color-main {
  background-color: #44b5ff;
  color: white;
}
.fake-card {
  margin: -155px 10px;
  height: 165px;
  width: 100%;
  z-index: -2;
}
h5 {
  margin-bottom: 0 !important;
  font-size: 16px;
}
p {
  margin-bottom: 0 !important;
  font-size: 12px;
}
</style>
