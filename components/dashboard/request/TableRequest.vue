<template>
  <div>
    <div class="card my-4">
      <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
        <div class="bg-gradient-primary shadow-dark border-radius-lg pt-3 pb-3">
          <div class="px-4 row">
            <div class="col-12 col-md-4 d-flex align-items-center mb-3 mb-md-0">
              <h6 class="text-white mb-0">Request Table</h6>
            </div>
            <div class="col-12 col-md-8">
              <div class="d-flex gap-3 align-items-center justify-content-end">
                <input class="input-date" type="date" />
                <button
                  type="button"
                  class="btn btn-success py-1 px-3 mb-0"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Insert
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body pt-2 px-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0" id="tableau">
            <thead>
              <tr>
                <th
                  class="text-uppercase text-black text-xxs font-weight-bolder ps-4"
                >
                  waktu
                </th>
                <th
                  class="text-uppercase text-black text-xxs font-weight-bolder ps-2"
                >
                  pic
                </th>
                <th
                  class="text-uppercase text-black text-xxs font-weight-bolder ps-2"
                >
                  items
                </th>
                <th
                  class="text-uppercase text-black text-xxs font-weight-bolder ps-2 pe-2"
                >
                  nominal
                </th>
                <th
                  class="text-uppercase text-end text-black text-xxs font-weight-bolder ps-2"
                >
                  action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(data, i) in items" :key="i">
                <td class="align-middle">
                  <span class="text-secondary text-xs font-weight-bold ps-3">{{
                    data.waktu
                  }}</span>
                </td>
                <td class="align-middle">
                  <span class="text-secondary text-xs font-weight-bold">{{
                    data.pic
                  }}</span>
                </td>
                <td class="align-middle">
                  <span class="text-secondary text-xs font-weight-bold">{{
                    data.item
                  }}</span>
                </td>
                <td class="align-middle">
                  <span class="text-secondary text-xs font-weight-bold">{{
                    nominal(data.nominal)
                  }}</span>
                </td>
                <td class="align-middle text-end pe-4">
                  <i
                    class="material-icons ms-auto text-info cursor-pointer"
                    @click="edit(i)"
                    >edit</i
                  >
                  <i
                    class="material-icons ms-auto text-danger cursor-pointer"
                    @click="remove(data.kode, data.nama_barang)"
                    >delete</i
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          waktu: "21-05-2024",
          pic: "Fauzan Gunawan",
          item: "Satelit",
          nominal: "1000000000",
        },
        {
          waktu: "21-05-2024",
          pic: "Yazid Gunawan",
          item: "Satelit",
          nominal: "95400000",
        },
        {
          waktu: "21-05-2024",
          pic: "Harun Gunawan",
          item: "Satelit",
          nominal: "7340000",
        },
        {
          waktu: "21-05-2024",
          pic: "Harun Gunawan",
          item: "Satelit",
          nominal: "7340000",
        },
        {
          waktu: "21-05-2024",
          pic: "Harun Gunawan",
          item: "Satelit",
          nominal: "7340000",
        },
        {
          waktu: "21-05-2024",
          pic: "Harun Gunawan",
          item: "Satelit",
          nominal: "7340000",
        },
        {
          waktu: "21-05-2024",
          pic: "Harun Gunawan",
          item: "Satelit",
          nominal: "7340000",
        },
        {
          waktu: "21-05-2024",
          pic: "Harun Gunawan",
          item: "Satelit",
          nominal: "7340000",
        },
        {
          waktu: "21-05-2024",
          pic: "Harun Gunawan",
          item: "Satelit",
          nominal: "7340000",
        },
        {
          waktu: "21-05-2024",
          pic: "Harun Gunawan",
          item: "Satelit",
          nominal: "7340000",
        },
        {
          waktu: "21-05-2024",
          pic: "Harun Gunawan",
          item: "Satelit",
          nominal: "7340000",
        },
        {
          waktu: "21-05-2024",
          pic: "Harun Gunawan",
          item: "Satelit",
          nominal: "7340000",
        },
        {
          waktu: "21-05-2024",
          pic: "Harun Gunawan",
          item: "Satelit",
          nominal: "7340000",
        },
        {
          waktu: "21-05-2024",
          pic: "Harun Gunawan",
          item: "Satelit",
          nominal: "7340000",
        },
      ],
    };
  },
  methods: {
    nominal(a) {
      return new Intl.NumberFormat("id-ID", {
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(a);
    },
  },
};
</script>

<style lang="scss" scoped></style>
