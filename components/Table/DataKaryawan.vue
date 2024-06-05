<template>
  <div class="container pt-5">
    <h1 class="small Montserrat text-secondary">Table Data Karyawan</h1>
    <div class="table-responsive animate__animated animate__fadeIn">
      <table
        class="table table-striped table-hover table-borderless text-center shadow"
      >
        <thead class="deva-bg">
          <tr>
            <th scope="col" class="bg-transparent text-white">#</th>
            <th scope="col" class="bg-transparent text-white">Nama</th>
            <th scope="col" class="bg-transparent text-white">Email</th>
            <th scope="col" class="bg-transparent text-white">No. Telp</th>
            <th scope="col" class="bg-transparent text-white">Jabatan</th>
            <th scope="col" class="bg-transparent text-white">Actions</th>
          </tr>
        </thead>
        <tbody>
          <!-- Sample tasks -->
          <tr v-for="(data, index) in allaccount" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ data.name }}</td>
            <td>{{ data.email }}</td>
            <td>{{ data.phone_number }}</td>
            <td>{{ data["custom:Jabatan"] }}</td>

            <td>
              <div class="d-flex d-xl-flex justify-content-center">
                <a
                  @click="edit(index)"
                  class="btn btn-warning btn-sm"

                  ><i class="bi bi-pencil-square text-white"></i
                ></a>
                <a class="btn btn-danger btn-sm mx-1"
                  ><i class="bi bi-trash3-fill"></i
                ></a>
                <a class="btn btn-success btn-sm"
                  ><i class="bi bi-eye-fill"></i
                ></a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <DataKaryawanModalEdit :updateData="updateData" />
    <RiwayatAbsensiModalView />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      updateData: ""
    }
  },
  computed: {
    ...mapState("datakaryawan", ["allaccount"]),
  },
  methods: {
    edit(index){
      $('#DataKaryawanModalEdit').modal('show')
      this.updateData = this.allaccount[index]
      console.log(this.updatedata)
    }
  },
};
</script>

<style lang="scss" scoped></style>
