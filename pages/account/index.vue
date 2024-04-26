<template>
  <div class="container-fluid">
    <div class="d-flex">
      <h4 class="text-primary text-capitalize ps-4 me-auto">Accounts</h4>
      <div class="pe-3 btn-group btn-group-sm pe-4">
        <select
          class="btn btn btn-primary"
          v-model="perPage"
          @change="fetchData(`view-goods?page=${page}&perPage=${perPage}`)"
        >
          <option>10</option>
          <option>25</option>
          <option>50</option>
          <option>100</option>
        </select>
        <button class="btn btn btn-success" @click="exportDataToXLSX()">
          Export
        </button>
        <button class="btn btn btn-primary" @click="insert()">Insert</button>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card my-4">
          <!-- <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div
              class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3"
            >
              <div class="px-4 row">
                <div class="col-8">
                  <input
                    type="text"
                    class="form-control form-control-sm bg-light"
                    placeholder="Search ..."
                    v-model="search"
                    @change="searchLoad"
                  />
                </div>
                <div class="col-4">
                  <select
                    class="form-select form-select-sm bg-light mb-1"
                    v-model="choose"
                  >
                    <option value="kode">Kode</option>
                    <option value="nama_barang">Sparepart</option>
                  </select>
                </div>
              </div>
            </div>
          </div> -->
          <div class="card-body px-0 pb-2">
            <div class="table-responsive p-0">
              <table class="table align-items-center mb-0" id="tableau">
                <thead>
                  <tr>
                    <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Kode/Sparepart
                    </th>
                    <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                    >
                      Satuan/Jenis
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Harga
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Masuk
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Keluar
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Sisa
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(data, i) in items" :key="i">
                    <td>
                      <div class="d-flex px-3 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">{{ data.kode }}</h6>
                          <p class="text-xs text-secondary mb-0">
                            {{ data.nama_barang }}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-xs font-weight-bold mb-0">
                        {{ data.satuan }}
                      </p>
                      <p class="text-xs text-secondary mb-0">
                        {{ data.jenis }}
                      </p>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">{{
                        rupiah(data.harga_barang)
                      }}</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">{{
                        data.qty_masuk
                      }}</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">{{
                        data.qty_keluar
                      }}</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">{{
                        data.qty_sisa
                      }}</span>
                    </td>
                    <td>
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
    </div>
    <div
      class="btn-group-sm text-center float-end"
      role="group"
      v-if="notSearch"
    >
      <button
        @click="prevClick()"
        :disabled="page === 1"
        type="button"
        class="btn btn-primary"
      >
        Prev
      </button>
      <button class="btn btn-dark disabled">{{ `${page}` }}</button>
      <button @click="nextClick()" class="btn btn-primary">Next</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
