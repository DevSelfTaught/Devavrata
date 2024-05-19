<template>
  <div class="all">
    <div class="container">
      <div class="media mx-auto">
        <div class="row">
          <div class="col-12">
            <Header />
            <DataKaryawanModalEdit />
            <DataKaryawanModalView />
          </div>
        </div>
        <div class="container pt-5">
          <h1 class="small Montserrat text-secondary">Table Data Karyawan</h1>
          <div class="table-responsive rounded-4 position-relative shadow">
            <table
              class="table table-striped table-hover table-borderless text-center"
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
                    <a class="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#DataKaryawanModalEdit">Edit</a>
                    <a class="btn btn-danger btn-sm">Delete</a>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
