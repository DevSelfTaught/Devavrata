<template>
  <div class="container pt-5">
    <div class="d-flex justify-content-between my-2">
      <h1 class="small Montserrat text-secondary">Table Absensi Karyawan</h1>
      <select v-model="type" @change="getStatus">
        <option value="all">All</option>
        <option value="masuk">Masuk</option>
        <option value="keluar">Keluar</option>
        <option value="izin">Izin</option>
      </select>
    </div>
    <div class="table-responsive animate__animated animate__fadeIn">
      <table
        class="table table-striped table-hover table-borderless text-center shadow"
      >
        <thead class="deva-bg">
          <tr>
            <th scope="col" class="bg-transparent text-white">#</th>
            <th scope="col" class="bg-transparent text-white">Nama</th>
            <th scope="col" class="bg-transparent text-white">Tanggal</th>
            <th scope="col" class="bg-transparent text-white">Status</th>
            <th scope="col" class="bg-transparent text-white">Action</th>
          </tr>
        </thead>
        <tbody>
          <!-- Sample tasks -->
          <tr v-for="(data, index) in getabsensikaryawan" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td class=" text-capitalize">{{ data.Nama }}</td>
            <td>{{ data.CreatedAt}}</td>
            <td class=" text-capitalize">{{ data.SK.split('#')[0] }}</td>
            <td>
              <div class="d-flex d-xl-flex justify-content-center">
                <a
                  class="btn btn-warning btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#AbsensiKaryawanEdit"
                  ><i class="bi bi-pencil-square text-white"></i
                ></a>
                <a class="btn btn-danger btn-sm mx-1"
                  ><i class="bi bi-trash3-fill"></i
                ></a>
                <a
                  class="btn btn-success btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#ModalView"
                  ><i class="bi bi-eye-fill"></i
                ></a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      type: "all"
    }
  },
  computed: {
    ...mapState("absensikaryawan", ["getabsensikaryawan"]),
  },
  methods: {
    getStatus() {
    this.$store.dispatch('absensikaryawan/getabsensikaryawan', this.type)  
    }
  },
};
</script>

<style lang="scss" scoped></style>
