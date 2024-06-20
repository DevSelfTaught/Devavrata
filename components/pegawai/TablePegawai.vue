<template>
  <div>
    <div class="card my-4">
      <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
        <div class="bg-gradient-primary shadow-dark border-radius-lg pt-3 pb-3">
          <div class="px-4 row">
            <div class="col-12 col-md-4 d-flex align-items-center mb-3 mb-md-0">
              <h6 class="text-white mb-0">List Pegawai</h6>
            </div>
            <div class="col-12 col-md-8">
              <div class="d-flex gap-3 align-items-center justify-content-end">
                <button type="button" class="btn btn-success py-1 px-3 mb-0" data-bs-toggle="modal"
                  data-bs-target="#inputForm">
                  Insert
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body pt-2 px-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0" id="tableau">
            <thead>
              <tr>
                <th class="text-uppercase text-black text-xxs font-weight-bolder ps-4">
                  Nama
                </th>
                <!-- <th class="text-uppercase text-black text-xxs font-weight-bolder ps-2">
                  Username
                </th> -->
                <th class="text-uppercase text-black text-xxs font-weight-bolder ps-2">
                  Phone
                </th>
                <th class="text-uppercase text-black text-xxs font-weight-bolder ps-2 pe-2">
                  Address
                </th>
                <th class="text-uppercase text-black text-xxs font-weight-bolder ps-2 pe-2">
                  Role
                </th>
                <th class="text-uppercase text-black text-xxs font-weight-bolder ps-2 pe-2">
                  Status
                </th>
                <th class="text-uppercase text-end text-black text-xxs font-weight-bolder ps-2">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(data, i) in account" :key="i">
                <td class="align-middle">
                  <span class="text-secondary text-xs font-weight-bold ps-3">{{
                    data.Nama
                    }}</span>
                </td>
                <td class="align-middle">
                  <span class="text-secondary text-xs font-weight-bold">{{
                    data.PhoneNumber
                    }}</span>
                </td>
                <td class="align-middle">
                  <span class="text-secondary text-xs font-weight-bold">{{
                    data.Address
                    }}</span>
                </td>
                <td class="align-middle">
                  <span class="text-secondary text-xs font-weight-bold">{{
                    data.Role
                    }}</span>
                </td>
                <td class="align-middle">
                  <span class="text-secondary text-xs font-weight-bold">{{
                    data.Status
                    }}</span>
                </td>
                <td class="align-middle text-end pe-4">
                  <i class="material-icons ms-auto text-info cursor-pointer" @click="edit(i)">edit</i>
                  <i class="material-icons ms-auto text-danger cursor-pointer"
                    @click="remove(data.kode, data.nama_barang)">delete</i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState('pegawai', ['account'])
  },
  methods: {
    nominal(a) {
      return new Intl.NumberFormat("id-ID", {
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(a);
    },
  },
};
</script>

<style lang="scss" scoped></style>
