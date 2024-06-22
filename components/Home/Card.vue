<template>
  <div class="positon-relative Animation-card">
    <nuxt-link to="/Profile">
      <div class="card border-none rounded-4 p-4 mt-4">
        <div class="d-flex justify-content-between">
          <div class="">
            <span class="d-flex align-items-center gap-3">
              <i class="bi bi-person-vcard-fill h3 text-dark"></i>
              <h6 class="text-dark Animation-inCard karla mb-1">{{ Code }}</h6>
            </span>
            <h2 class="pt-1 fw-semibold text-dark Animation-inCard text-capitalize fw-bold karla mb-0">{{ Nama }}
            </h2>
            <hr class="w-75 border-dark" />
            <h6 class="text-dark Animation-inCard karla">{{ Role }}</h6>
          </div>

          <img src="~/assets/img/Okaasan_notext.png" width="68px" height="auto" class="img-card" />
        </div>
        <div class="mb-4"></div>
        <div>
          <p class="text-black Animation-inCard karla mb-2">No. Telp</p>
          <h6 class="text-dark Animation-inCard montserrat">{{ Phone }}</h6>
        </div>
      </div>
    </nuxt-link>
    <div class="fake-card border-none rounded-4 deva-bg d-none d-lg-block"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      Nama: '',
      Code: '',
      Role: '',
      Phone: ''
    }
  },
  computed: {
    ...mapState('home', ['profile']),
  },
  watch: {
    profile: 'setData'
  },
  methods: {
    setData() {
      this.Nama = this.profile[0].Nama
      this.Code = this.profile[0].Code
      this.Role = this.profile[0].Role
      this.Phone = this.profile[0].PhoneNumber
    }
  },
};
</script>

scr

<style scoped>
.card {
  background: linear-gradient(180deg,
      rgba(250, 249, 255, 0.35) 0%,
      rgba(197, 194, 211, 0.5) 100%),
    url(~/assets/img/bg-card.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.Animation-card {
  animation: fadeIn;
  /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1s;
  /* don't forget to set a duration! */
}

.Animation-inCard {
  animation: fadeInUp;
  /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1.5s;
  /* don't forget to set a duration! */
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
