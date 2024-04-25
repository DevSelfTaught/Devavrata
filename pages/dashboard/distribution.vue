<template>
  <div class="container-fluid">
    <div class="d-flex">
      <h4 class="text-primary text-capitalize ps-4 me-auto">Distribution</h4>
      <div class="pe-3 btn-group btn-group-sm pe-4">
        <button class="btn btn btn-success" @click="exportDataToXLSX()">Export</button>
        <input type="date" class="btn btn btn-dark" @change="reLoad()" v-model="daTe">
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card my-4">
          <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
              <div class="px-4 row">
                <div class="col-8">
                  <input type="text" class="form-control form-control-sm bg-light" placeholder="Search ..." v-model="search">
                </div>
                <div class="col-4">
                  <select class="form-select form-select-sm bg-light mb-1" v-model="choose">
                    <option value="kodeBarang">Kode</option>
                    <option value="namaBarang">Nama Barang</option>
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
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Surat Jalan</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Kode/Nama Barang</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Harga</th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Jumlah</th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(data, i) in filteredDatas" :key="i">
                    <td class="align-middle">
                      <span class="text-secondary text-xs font-weight-bold ps-3">{{data.status_log}}</span>
                    </td>
                    <td>
                      <p class="text-xs font-weight-bold mb-0">{{data.kodeBarang}}</p>
                      <p class="text-xs text-secondary mb-0">{{data.namaBarang}}</p>
                    </td>
                    <td class="align-middle">
                      <span class="text-secondary text-xs font-weight-bold">{{rupiah(data.hargaBarang)}}</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">{{data.jumlahBarang}}</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">{{rupiah(data.jumlahBarang*data.hargaBarang)}}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-group-sm text-center float-end" role="group">
      <button @click="page=1" :disabled="page === 1" type="button" class="btn btn-primary">&laquo;</button>
      <button @click="page--" :disabled="page === 1" type="button" class="btn btn-primary">Prev</button>
      <button class="btn btn-dark disabled">{{`${page}`}}</button>
      <button @click="page++" :disabled="page >= Math.ceil(table.length / perPage)" class="btn btn-primary">Next</button>
      <button @click="page=Math.ceil(table.length / perPage)" :disabled="page >= Math.ceil(table.length / perPage)" type="button" class="btn btn-primary">&raquo;</button>
    </div>
  </div>
</template>

<script>
import * as XLSX from 'xlsx'
import Swal from 'sweetalert2'
  export default {
    data () {
      return {
        search:'', page: 1, perPage: 10, table:'', code:'', datas:[],
        choose:'kodeBarang', daTe:''
      }
    },
    computed: {
      filteredDatas() {
        this.table = this.datas.filter((data) => {
          return data[this.choose].toLowerCase().includes(this.search.toLowerCase());
        });
        let start = (this.page - 1) * this.perPage
          let end = start + this.perPage
          return this.table.slice(start, end)
      },
    },
    methods: {
      async reLoad(){
        this.datas = await this.$axios.$get(`view-historyLog?date=${this.daTe}`)
      },
      rupiah(a) {
        return new Intl.NumberFormat('id-ID', {
          style: 'decimal',
          currency: 'IDR',
          minimumFractionDigits: 0
        }).format(a);},
      exportDataToXLSX(data) {
        const datax = this.datas.map(({nama : Nama, alamat : Alamat, tipe : Tipe, jenis: Jenis, no_polisi : Nopol, handphone : Kontak}) =>
        ({Nama,Alamat,Tipe,Jenis,Nopol,Kontak}))
          /* format data */
          let ws = XLSX.utils.json_to_sheet(datax);
          let wb = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(wb, ws, "data");

          /* generate file */
          XLSX.writeFile(wb, `Customers.xlsx`)
        },
      },
  }
</script>
