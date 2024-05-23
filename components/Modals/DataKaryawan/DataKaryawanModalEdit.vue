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
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3 py-2">
                  <input
                    type="text"
                    class="form-control border-0 border-bottom border-danger opacity-50 rounded-0 Poppins"
                    name="nama"
                    id="nama"
                    aria-describedby="helpId"
                    placeholder="Nama"
                  />
                </div>
                <div class="mb-3 py-2">
                  <input
                    type="email"
                    class="form-control border-0 border-bottom border-danger opacity-50 rounded-0 Poppins"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div> 
                <div class="mb-3 py-2">
                  <input
                    type="text"
                    class="form-control border-0 border-bottom border-danger opacity-50 rounded-0 Poppins"
                    name="notelp"
                    id="notelp"
                    placeholder="No. Telp"
                  />
                </div> 
                <div class="mb-3 py-2">
                  <input
                    type="text"
                    class="form-control border-0 border-bottom border-danger opacity-50 rounded-0 Poppins"
                    name="jabatan"
                    id="jabatan"
                    placeholder="Jabatan"
                  />
                </div> 
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn deva-bg text-white">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style lang="scss" scoped></style>
  