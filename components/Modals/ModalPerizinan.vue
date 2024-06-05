<template>
  <div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="ModalPerizinan"
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
              Absensi Izin
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="perizinan">
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
                  required
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
                  required
                />
              </div>
              <div class="mb-3 py-2">
                <select
                  class="form-select border-0 text-capitalize border-bottom border-success opacity-50 rounded-0 Poppins"
                  aria-label="select example"
                  name="Lokasi"
                  id="lokasi"
                  required
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

                </select>
              </div>
              <div class="mb-3 py-2">
                <input
                  type="file"
                  class="form-control border-0 border-bottom border-primary opacity-50 rounded-0 Poppins"
                  name="Photo"
                  id="Photo"
                  placeholder="Photo"
                />
              </div>
              <div class="mb-3 py-2">
                <select
                  class="form-select border-0 border-bottom border-primary opacity-50 rounded-0 Poppins"
                  aria-label="select example"
                  name="Jenis"
                  id="lokasi"
                  required
                >
                  <option selected value="izin" >Izin</option>
                  <option value="sakit">Sakit</option>
                </select>
              </div>
              <div class="mb-3 py-2">
                <textarea
                  type="area"
                  class="form-control border-0 border-bottom border-primary opacity-50 rounded-0 Poppins"
                  name="keterangan"
                  id="keterangan"
                  required
                  placeholder="Keterangan"></textarea>
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
                  <button v-if="btn" type="submit" class="btn btn-success">
                    Submit
                  </button>
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
    async perizinan() {
      console.log(this.$auth);
      this.btn = false;
      const data = Object.fromEntries(new FormData(event.target));
      delete data.Photo;
      delete data.Nama;
      delete data.CreatedAt;
      const tanggal_sekarang = moment().tz("Asia/Jakarta");
      const currentTime = tanggal_sekarang.format("YYYY-MM-DD HH:mm");
      data["CreatedAt"] = currentTime;
      try {
        const result = await this.$axios.$post(
          `insert-absensi?type=izin`,
          data
        );
        if (result) {
          Swal.fire({
            icon: "success",
            title: "Berhasil",
            text: "Absensi Berhasil",
            timer: 2000,
            showConfirmButton: false,
          });
          this.btn = true;
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: error,
          text: "Absensi Gagal",
          timer: 2000,
          showConfirmButton: false,
        });
        this.btn = true;
      }
    },
  },
};
</script>

<style scoped>
.header-cs-color {
  background: linear-gradient(260deg, #c4d1f6, #4273fa);
  }
</style>
