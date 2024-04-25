<template>
  <div class="container-fluid">
    <div class="d-flex">
      <h4 class="text-primary text-capitalize ps-4 me-auto">Order History</h4>
      <div class="pe-3 btn-group btn-group-sm pe-4">
        <button class="btn btn btn-success" @click="exportDataToXLSX()">Export</button>
        <select class="btn btn btn-primary text-start border border-light" v-model="selectedMonth" @change="fetchData(`view-transaction?month=${selectedMonth}&year=${selectedYear}`)">
          <option v-for="(data, i) in months" :key="i" :value="data.value">{{data.label}}</option>
        </select>
        <select class="btn btn btn-primary text-start border border-light" v-model="selectedYear" @change="fetchData(`view-transaction?month=${selectedMonth}&year=${selectedYear}`)">
          <option v-for="(data, i) in years" :key="i" :value="data.value">{{data.label}}</option>
        </select>
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
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Service/Tanggal</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Nopol/Nama</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Kode</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Deskripsi</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Qty</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Harga</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Diskon</th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(data, i) in items" :key="i">
                    <td>
                      <div class="d-flex px-3 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">{{data.no_service}}</h6>
                          <p class="text-xs text-secondary mb-0">{{data.tanggal}}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-xs font-weight-bold mb-0">{{data.no_polisi}}</p>
                      <p class="text-xs text-secondary mb-0">{{data.nama}}</p>
                    </td>
                    <td class="align-middle">
                      <span class="text-secondary text-xs font-weight-bold">{{}}</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">{{}}</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">{{}}</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">{{}}</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">{{}}</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">{{}}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as XLSX from 'xlsx'
import Swal from 'sweetalert2'
  export default {
  data() {
    return {
      items: [], choose:'nama', search:'', notSearch:true,
      selectedMonth: 0,
      selectedYear: 0,
      months: [
        { value: 0, label: 'Bulan' },
        { value: 1, label: 'Januari' },
        { value: 2, label: 'Februari' },
        { value: 3, label: 'Maret' },
        { value: 4, label: 'April' },
        { value: 5, label: 'Mei' },
        { value: 6, label: 'Juni' },
        { value: 7, label: 'Juli' },
        { value: 8, label: 'Agustus' },
        { value: 9, label: 'September' },
        { value: 10, label: 'Oktober' },
        { value: 11, label: 'November' },
        { value: 12, label: 'Desember' }
      ],
      years: [
        { value: 0, label: 'Tahun' },
        { value: 2021, label: '2021' },
        { value: 2022, label: '2022' },
        { value: 2023, label: '2023' },
        { value: 2024, label: '2024' },
        { value: 2025, label: '2025' },
        { value: 2026, label: '2026' },
        { value: 2027, label: '2027' },
        { value: 2028, label: '2028' },
        { value: 2029, label: '2029' },
        { value: 2030, label: '2030' },
        { value: 2031, label: '2031' },
        { value: 2032, label: '2032' },
        { value: 2033, label: '2033' },
        { value: 2034, label: '2034' },
        { value: 2035, label: '2035' },
      ]
    };
  },
  methods: {
    async fetchData(url) {
     if( this.selectedMonth > 0 && this.selectedYear > 0 ){
      const data = await this.$axios.$get(url)
      this.items = data.items;
      console.log(this.data)
     }
    },
    async searchLoad(){
      if(this.search){
        this.items = await this.$axios.$get(`search-transaction?attr=${this.choose}&value=${this.search}`);
        this.notSearch = false
      }else{
        this.fetchData(`view-transaction?page=${this.page}&perPage=${this.perPage}&month=${this.selectedMonth}&year=${this.selectedYear}`)
        this.notSearch = true
      }
    },
    async exportDataToXLSX(data) {
      const datas = await this.$axios.$get(`view-transaction?page=0&perPage=All`)
        const datax = datas.map(({nama : Nama, alamat : Alamat, tipe : Tipe, jenis: Jenis, no_polisi : Nopol, handphone : Kontak}) =>
        ({Nama,Alamat,Tipe,Jenis,Nopol,Kontak}))
          /* format data */
          let ws = XLSX.utils.json_to_sheet(datax);
          let wb = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(wb, ws, "data");

          /* generate file */
          XLSX.writeFile(wb, `transaction.xlsx`)
        },
  }
  }
</script>
