<template>
  <div class="all ">
    <div class="container ">
      <div class="media mx-auto">
        <div class="row">
          <div class="col-12">
            <Header />
            <!-- <Menu /> -->
            <!-- <ModalMasuk />
            <ModalKeluar />
            <ModalPerizinan /> -->
          </div>
        </div>
        <div class="row ">
          <div class="col-12 col-xl-8 px-lg-5">
            <Card />
          </div>
          <div class="col-12 col-xl-4 ">
            <RiwayatAbsensi />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import 'animate.css';

export default {
  layout: "utama",
  // async asyncData({store}) {
  //   store.dispatch('home/renderPage')
  // },
  mounted () {
    this.refresh();
  },
  methods: {
    refresh() {
      this.$store.dispatch('home/renderPage')
    }
  },
};
</script>

<style scoped>
.all {
  padding-bottom: 100px;
  padding-top: 20px;
}

@media screen and (max-width: 576px) {
  .media {
    width: 100% !important;
  }
}

/* tablet */
@media screen and (max-width: 991px) {
  .media {
    width: 70%;
  }
}
</style>
