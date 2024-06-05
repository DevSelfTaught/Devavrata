<template>
            <div class="container pt-5">
          <h1 class="small Montserrat text-secondary text-capitalize">Riwayat Absensi {{ $auth.user.name }}</h1>
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
                <tr v-for="(data, index) in RiwayatAbsensiKaryawan" :key="index">
                  <th scope="row">{{ index + 1 }}</th>
                  <td class=" text-capitalize">{{ data.Nama }}</td>
                  <td>{{ data.CreatedAt}}</td>
                  <td class=" text-capitalize">{{ data.SK.split('#')[0] }}</td>

                  <td>
                    <div class="d-flex d-xl-flex justify-content-center">
                      <a
                        class="btn btn-warning btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#RiwayatAbsensiModalEdit"
                        ><i class="bi bi-pencil-square text-white"></i
                      ></a>
                      <a
                        class="btn btn-success btn-sm mx-1"
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
  computed: {
    ...mapState("RiwayatAbsensiKaryawan", ["RiwayatAbsensiKaryawan"]),
  },
};
</script>

<style lang="scss" scoped>

</style>