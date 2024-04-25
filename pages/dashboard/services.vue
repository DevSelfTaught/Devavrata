<template>
  <div class="container-fluid">
    <div class="d-flex">
      <h4 class="text-primary text-capitalize ps-4 me-auto">Services</h4>
      <div class="pe-3 btn-group btn-group-sm pe-4">
        <select class="btn btn btn-primary" v-model="perPage" @change="fetchData(`view-services?page=${page}&perPage=${perPage}`)">
          <option>10</option>
          <option>25</option>
          <option>50</option>
          <option>100</option>
        </select>
        <button class="btn btn btn-success" @click="exportDataToXLSX()">Export</button>
        <button class="btn btn btn-primary" @click="insert()">Insert</button>
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
                    <option value="kode">Kode</option>
                    <option value="nama_jasa">Jasa</option>
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
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Kode/Nama Jasa</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Biaya</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(data, i) in items" :key="i">
                    <td>
                      <div class="d-flex px-3 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">{{data.kode}}</h6>
                          <p class="text-xs text-secondary mb-0">{{data.nama_jasa}}</p>
                        </div>
                      </div>
                    </td>
                    <td class="align-middle">
                      <span class="text-secondary text-xs font-weight-bold">{{rupiah(data.harga_jasa)}}</span>
                    </td>
                    <td>
                      <i class="material-icons ms-auto text-info cursor-pointer" @click="edit(i)">edit</i>
                      <i class="material-icons ms-auto text-danger cursor-pointer" @click="remove(data.kode, data.nama_jasa)">delete</i>
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
    data () {
      return {
        items: [], nextPage: '', prevPage: '',  page: 1, choose:'kode', search:'', notSearch:true, perPage:10
      }
    },
    mounted() {
    this.fetchData(`view-services?page=${this.page}&perPage=${this.perPage}`);
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
        this.items = await this.$axios.$get(`search-services?attr=${this.choose}&value=${this.search}`);
        this.notSearch = false
      }else{
        this.fetchData(`view-services?page=${this.page}&perPage=${this.perPage}`)
        this.notSearch = true
      }
    },
    insert(){
        Swal.fire({
          title: 'Insert Product',
          html: `
          <div class="card-body ps-2">
          <form role="form">
            <div class="input-group input-group-outline mb-2">
              <input type="text" class="form-control" id="kode" placeholder="Kode">
              <input type="text" class="form-control" id="jasa" placeholder="Jasa">
            </div>
            <div class="input-group input-group-outline mb-2">
              <input type="number" class="form-control" id="harga" placeholder="Harga">
            </div>
          </form>
        </div>
        `,
          confirmButtonText: 'Submit',
          focusConfirm: false,
          preConfirm: () => {
            const kode = Swal.getPopup().querySelector('#kode').value,
            jasa = Swal.getPopup().querySelector('#jasa').value,
            harga = Swal.getPopup().querySelector('#harga').value
            if (!kode || !jasa || !harga) {
              Swal.showValidationMessage(`Silahkan masukan data dengan lengkap`)
              } else {
                return this.$axios.$post('cud-services?key=create', {
                  kode: kode,
                  nama_jasa: jasa,
                  harga_jasa: harga
                  }).then(response => { return response; })
                    .catch(error => { console.log (error); })
              }
          }
      }).then((result) => {
          if (result.value.message == 'success') {
              Swal.fire({
                text: 'Berhasil',
                icon: 'success',
                timer: 2000,
                timerProgressBar: true,
                showConfirmButton: false
              }).then(
                this.searchLoad()
              )
          } else {
            console.log(result)
          }
      })
      },
    edit(a){
      Swal.fire({
        title: this.items[a].kode,
        html: `
        <div class="card-body ps-2">
        <form role="form">
          <div class="input-group input-group-outline mb-2">
            <input type="text" class="form-control" id="jasa" placeholder="Jasa" value="${this.items[a].nama_jasa}">
            <input type="number" class="form-control" id="harga" placeholder="Harga" value="${this.items[a].harga_jasa}">
          </div>
        </form>
      </div>
      `,
        confirmButtonText: 'Update',
        focusConfirm: false,
        preConfirm: () => {
          const kode = this.items[a].kode,
          jasa = Swal.getPopup().querySelector('#jasa').value,
          harga = Swal.getPopup().querySelector('#harga').value
          if (!kode || !jasa || !harga) {
            Swal.showValidationMessage(`Silahkan masukan data dengan lengkap`)
            } else {
              return this.$axios.$post('cud-services?key=update', {
                kode: kode,
                nama_jasa: jasa,
                harga_jasa: harga
                }).then(response => { return response; })
                  .catch(error => { console.log (error); })
            }
        }
    }).then((result) => {
        if (result.value.message == 'success') {
            Swal.fire({
              text: 'Berhasil',
              icon: 'success',
              timer: 2000,
              timerProgressBar: true,
              showConfirmButton: false
            }).then(
              this.searchLoad()
            )
        } else {
          console.log(result)
        }
    })
    },
    remove(a,b){
      Swal.fire({
        title: b,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        focusConfirm: false,
        preConfirm: () => {
          return this.$axios.$post('cud-services?key=delete', {
                kode: a
          })
        }
      }).then((result) => {
        if (result.value.message == 'success') {
            Swal.fire({
              text: 'Berhasil',
              icon: 'success',
              timer: 2000,
              timerProgressBar: true,
              showConfirmButton: false
            }).then(
              this.searchLoad()
            )
        } else {
          console.log(result)
        }
      })
    },
    rupiah(a) {
      return new Intl.NumberFormat('id-ID', {
        style: 'decimal',
        currency: 'IDR',
        minimumFractionDigits: 0
      }).format(a);},
    exportDataToXLSX(data) {
      const datax = this.datas.map(({kode : Kode, nama_jasa : Jasa, harga_jasa : Biaya}) =>
      ({Kode,Jasa,Biaya}))
        /* format data */
        let ws = XLSX.utils.json_to_sheet(datax);
        let wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "data");

        /* generate file */
        XLSX.writeFile(wb, `Services.xlsx`)
      },
    },
  }
</script>
