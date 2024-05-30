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
            <form @submit.prevent="masuk">
              <div class="mb-3 py-2">
                <input
                  type="text"
                  class="form-control border-0 border-bottom border-success opacity-50 rounded-0 Poppins"
                  name="Nama"
                  id="nama"
                  :value="$auth.user.name"
                  disabled
                  readonly
                  aria-describedby="helpId"
                  placeholder="Nama"
                />
              </div>
              <div class="mb-3 py-2">
                <input
                  type="text"
                  class="form-control border-0 border-bottom border-success opacity-50 rounded-0 Poppins"
                  name="CreatedAt"
                  id="tanggal"
                  :value="date"
                  disabled
                  readonly
                  aria-describedby="helpId"
                  placeholder="Tanggal"
                />
              </div>
              <div class="mb-3 py-2">
                <select
                  class="form-select border-0 text-capitalize border-bottom border-success opacity-50 rounded-0 Poppins"
                  aria-label="select example"
                  name="Lokasi"
                  id="lokasi"
                >
                  <option value="" selected>Lokasi</option>
                  <option
                    class="text-capitalize"
                    v-for="(data, index) in location"
                    :key="index"
                    :value="data"
                  >
                    {{ data }}
                  </option>
                  <!-- <option selected>Lokasi</option>
                  <option>Okasaan Laundry Seruling</option>
                  <option>Okasaan Laundry Sunter Park View</option>
                  <option>Okasaan Laundry Gading Mediterania</option>
                  <option>Okasaan Laundry Tabanas</option>
                  <option>Okasaan Laundry Ciputat</option>
                  <option>Okasaan Laundry Pademangan</option>
                  <option>Okasaan Laundry Duri Mas</option>
                  <option>Okasaan Laundry Puri Park View</option> -->
                </select>
              </div>
              <div class="mb-3 py-2">
                <input
                  type="file"
                  class="form-control border-0 border-bottom border-success opacity-50 rounded-0 Poppins"
                  name="Photo"
                  id="photo"
                  placeholder="photo"
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <span>
                  <button v-if="btn" type="submit" class="btn btn-success">Submit</button>
                  <button v-else class="btn btn-success" type="button" disabled>
                    <span
                      class="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Loading...
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import moment from "moment-timezone";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      date: "",
      btn: true,
    };
  },
  mounted() {
    const tanggal_sekarang = moment().tz("Asia/Jakarta");
    const currentTime = tanggal_sekarang.format("YYYY-MM-DD HH:mm");
    this.date = currentTime;
  },
  computed: {
    ...mapState("location", ["location"]),
  },
  methods: {
    async masuk() {
      this.btn = false
      const data = Object.fromEntries(new FormData(event.target));
      delete data.Photo
      data['Nama'] = this.$auth.user.name
      data['Tanggal'] = this.date
      try {
        const result = await this.$axios.$post(`insert-absensi?type=masuk`, data)
        if (result) {
          Swal.fire({
          icon: "success",
          title: "Berhasil",
          text: "Absensi Berhasil",
          showConfirmButton: false,
        });
        this.btn = true
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error,
          text: "Absensi Gagal",
          showConfirmButton: false,
        });
        this.btn = true
      }
      console.log(data);
    },
  },
};
</script>

<style scoped>
.header-cs-color {
  background: linear-gradient(260deg, #bdefbd, #50e650);
}
</style>
