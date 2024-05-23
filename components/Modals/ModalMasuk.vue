<template>
  <div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="ModalMasuk"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header text-white header-cs-color">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              Absensi Masuk
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
                  class="form-control border-0 border-bottom border-success opacity-50 rounded-0 Poppins"
                  name="nama"
                  id="nama"
                  aria-describedby="helpId"
                  placeholder="Nama"
                />
              </div>
              <div class="mb-3 py-2">
                <input
                  type="date"
                  class="form-control border-0 border-bottom border-success opacity-50 rounded-0 Poppins"
                  name="tanggaljam"
                  id="tanggaljam"
                  placeholder="Tanggal & Jam"
                />
              </div>
              <div class="mb-3 py-2">
                <select
                  class="form-select border-0 border-bottom border-success opacity-50 rounded-0 Poppins"
                  aria-label="select example"
                  name="lokasi"
                  id="lokasi"
                  
                >
                  <option selected>Lokasi</option>
                  <option>Okasaan Laundry Seruling</option>
                  <option>Okasaan Laundry Sunter Park View</option>
                  <option>Okasaan Laundry Gading Mediterania</option>
                  <option>Okasaan Laundry Tabanas</option>
                  <option>Okasaan Laundry Ciputat</option>
                  <option>Okasaan Laundry Pademangan</option>
                  <option>Okasaan Laundry Duri Mas</option>
                  <option>Okasaan Laundry Puri Park View</option>
                </select>
              </div>
              <div class="mb-3 py-2">
                <input
                  type="file"
                  class="form-control border-0 border-bottom border-success opacity-50 rounded-0 Poppins"
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
            <button type="button" class="btn btn-success">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
      .header-cs-color {
        background: linear-gradient(260deg, #bdefbd, #50e650);
  }
</style>
