<template>
    <div>
      <!-- Modal -->
      <div
        class="modal fade"
        id="RiwayatAbsensiModalEdit"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header devabggreen">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Edit Riwayat Absensi
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
                    type="file"
                    class="form-control border-0 border-bottom border-danger opacity-50 rounded-0 Poppins"
                    name="foto"
                    id="foto"
                    placeholder="Foto"
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-success">Edit</button>
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
  