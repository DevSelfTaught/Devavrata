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
                  <th scope="col" class="bg-transparent text-white">
                    No. Telp
                  </th>
                  <th scope="col" class="bg-transparent text-white">Jabatan</th>
                  <th scope="col" class="bg-transparent text-white">Actions</th>
                </tr>
              </thead>
              <tbody>
                <!-- Sample tasks -->
                <tr>
                  <th scope="row">1</th>
                  <td>Status Karyawan</td>
                  <td>In Progress</td>
                  <td>In Progress</td>
                  <td>In Progress</td>

                  <td>
                    <div class="d-flex d-xl-flex justify-content-center">
                      <a
                        class="btn btn-warning btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#DataKaryawanModalEdit"
                        ><i class="bi bi-pencil-square text-white"></i
                      ></a>
                      <a class="btn btn-danger btn-sm mx-1"
                        ><i class="bi bi-trash3-fill"></i
                      ></a>
                      <a
                        class="btn btn-success btn-sm"
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
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>