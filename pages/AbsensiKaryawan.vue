<template>
  <div class="all">
    <div class="container">
      <div class="media mx-auto">
        <div class="row">
          <div class="col-12">
            <Header />
            <AbsensiKaryawanModalEdit />
            <AbsensiKaryawanModalView />
          </div>
        </div>
        <AbsensiKaryawan />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store }){
    const type = "all"
    await store.dispatch('absensikaryawan/getabsensikaryawan', type)
  }
};
</script>

<style scoped></style>
