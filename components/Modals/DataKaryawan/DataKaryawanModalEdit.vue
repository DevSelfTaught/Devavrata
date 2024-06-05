<template>
    <div>
      <!-- Modal -->
      <div
        class="modal fade"
        id="DataKaryawanModalEdit"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header devabgblue">
              <h1 class="modal-title fs-5" id="DataKaryawanModalEdit">
                Edit Data Karyawan
              </h1>
              {{ updateData }}
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="submit">
                <div class="mb-3 py-2">
                  <input
                    type="text"
                    class="form-control border-0 border-bottom border-danger opacity-50 rounded-0 Poppins"
                    name="Name"
                    id="nama"
                    aria-describedby="helpId"
                    placeholder="Nama"
                  />
                </div>
                <div class="mb-3 py-2">
                  <input
                    type="email"
                    class="form-control border-0 border-bottom border-danger opacity-50 rounded-0 Poppins"
                    name="Email"
                    id="email"
                    placeholder="Email"
                  />
                </div> 
                <div class="mb-3 py-2">
                  <input
                    type="text"
                    class="form-control border-0 border-bottom border-danger opacity-50 rounded-0 Poppins"
                    name="Phone"
                    id="notelp"
                    placeholder="No. Telp"
                  />
                </div> 
                <div class="mb-3 py-2">
                  <input
                    type="text"
                    class="form-control border-0 border-bottom border-danger opacity-50 rounded-0 Poppins"
                    name="Jabatan"
                    id="jabatan"
                    placeholder="Jabatan"
                  />
                </div> 
                <div class="modal-footer">
                  <button type="submit" class="btn deva-bg text-white">Edit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Swal from "sweetalert2";

  export default {
    props: ['updateData'],
    methods: {
      async submit() {
        const data = Object.fromEntries(new FormData(event.target));
        console.log(data)
        try {
          const username = this.$auth.user.preferred_username
          const result = await this.$axios.$put(
          `update-account?username=${username}`,
          data
        );
        if (result) {
          Swal.fire({
            icon: "success",
            title: "Berhasil",
            text: "Berhasil Update Karyawan",
            timer: 2000,
            showConfirmButton: false,
          });
          this.btn = true;
          
        }
        }catch(error){
        Swal.fire({
          icon: "error",
          title: error,
          text: "Gagal Update Karyawan",
          timer: 2000,
          showConfirmButton: false,
        });
        this.btn = true;
      
      }
      }
    },
  };
  </script>
  
  <style lang="scss" scoped></style>
  