<template>
  <div class="container-fluid">
    <div class="d-flex">
      <h4 class="text-primary text-capitalize ps-4 me-auto">Customers</h4>
      <div class="pe-3 btn-group btn-group-sm pe-4">
        <select class="btn btn btn-primary" v-model="perPage" @change="fetchData(`view-customers?page=${page}&perPage=${perPage}`)">
          <option>10</option>
          <option>25</option>
          <option>50</option>
          <option>100</option>
        </select>
        <button class="btn btn btn-success" @click="exportDataToXLSX()">Export</button>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card my-4">
          <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
              <div class="px-4 row">
                <div class="col-8">
                  <input type="text" class="form-control form-control-sm bg-light" placeholder="Search ..." v-model="search" @change="searchLoad">
                </div>
                <div class="col-4">
                  <select class="form-select form-select-sm bg-light mb-1" v-model="choose">
                    <option value="nama">Nama</option>
                    <option value="no_polisi">Nopol</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body px-0 pb-2">
            <div class="table-responsive p-0">
              <table class="table align-items-center mb-0" id="tableau">
                <thead>
                  <tr>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Nama/Alamat</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Tipe/Tahun</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">No Polisi</th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Kontak</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(data, i) in items" :key="i">
                    <td>
                      <div class="d-flex px-3 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">{{data.nama}}</h6>
                          <p class="text-xs text-secondary mb-0">{{data.alamat}}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-xs font-weight-bold mb-0">{{data.tipe}}</p>
                      <p class="text-xs text-secondary mb-0">{{data.jenis}}</p>
                    </td>
                    <td class="align-middle">
                      <span class="text-secondary text-xs font-weight-bold">{{data.no_polisi}}</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">{{data.handphone}}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-group-sm text-center float-end" role="group" v-if="notSearch">
      <button @click="prevClick()" :disabled="page === 1" type="button" class="btn btn-primary">Prev</button>
      <button class="btn btn-dark disabled">{{`${page}`}}</button>
      <button @click="nextClick()" class="btn btn-primary">Next</button>
    </div>
  </div>
</template>

<script>
import * as XLSX from 'xlsx'
import Swal from 'sweetalert2'
  export default {
  data() {
    return {
      items: [], nextPage: '', prevPage: '',  page: 1, choose:'nama', search:'', notSearch:true, perPage:10
    };
  },
  mounted() {
    this.fetchData(`view-customers?page=${this.page}&perPage=${this.perPage}`);
  },
  methods: {
    async fetchData(url) {
     const data = await this.$axios.$get(url)
     this.items = data.items;
     this.nextPage = data.nextPage;
     this.prevPage = data.prevPage;
    },
    nextClick(){
      this.fetchData(`${this.nextPage}&perPage=${this.perPage}`)
      this.page++
    },
    prevClick(){
      this.fetchData(`${this.prevPage}&perPage=${this.perPage}`)
      this.page--
    },
    async searchLoad(){
      if(this.search){
        this.items = await this.$axios.$get(`search-customers?attr=${this.choose}&value=${this.search}`);
        this.notSearch = false
      }else{
        this.fetchData(`view-customers?page=${this.page}&perPage=${this.perPage}`)
        this.notSearch = true
      }
    },
    async exportDataToXLSX(data) {
      const datas = await this.$axios.$get(`view-customers?page=0&perPage=All`)
        const datax = datas.map(({nama : Nama, alamat : Alamat, tipe : Tipe, jenis: Jenis, no_polisi : Nopol, handphone : Kontak}) =>
        ({Nama,Alamat,Tipe,Jenis,Nopol,Kontak}))
          /* format data */
          let ws = XLSX.utils.json_to_sheet(datax);
          let wb = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(wb, ws, "data");

          /* generate file */
          XLSX.writeFile(wb, `Customers.xlsx`)
        },
  }
  }
</script>
