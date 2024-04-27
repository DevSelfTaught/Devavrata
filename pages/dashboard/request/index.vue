<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <TableRequest />
      </div>
    </div>
    <div
      class="btn-group-sm text-center float-end"
      role="group"
      v-if="notSearch"
    >
      <button
        @click="prevClick()"
        :disabled="page === 1"
        type="button"
        class="btn btn-primary"
      >
        Prev
      </button>
      <button class="btn btn-dark disabled">{{ `${page}` }}</button>
      <button @click="nextClick()" class="btn btn-primary">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notSearch: true,
      items: [
        {
          kode: "5342421",
          nama_barang: "Cognito",
          satuan: "lorem",
          jenis: "lorem ipsum",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
