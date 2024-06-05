<template>
  <div class="all">
    <div class="container">
      <div class="media mx-auto">
        <div class="row">
          <div class="col-12">
            <Header />
            
          </div>
        </div>
        <RiwayatAbsensiKaryawan />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ store }){
    await store.dispatch('RiwayatAbsensiKaryawan/RiwayatAbsensiKaryawan')
  }
};
</script>

<style scoped></style>
