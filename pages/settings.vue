<template>
  <div class="container-fluid py-2">
    <div class="row">
      <div class="col-12">
        <div class="card my-4">
          <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3 d-flex justify-content-between">
              <h6 class="text-white text-capitalize ps-3">Products</h6>
              <div class="pe-3 btn-group btn-group-sm">
                <button class="btn btn btn-info" @click="test()">Insert</button>
                <button class="btn btn btn-success" @click="exportToXLSX(datas,'Products')">Export</button>
              </div>
            </div>
          </div>
          <div class="card-body px-0 pb-2">
            <div class="table-responsive p-0">
              <table class="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Kode/Sparepart</th>
                    <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Satuan/Jenis</th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Harga</th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Masuk</th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Keluar</th>
                    <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Sisa</th>
                    <th class="text-secondary opacity-7"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(data, i) in filteredDatas" :key="i">
                    <td>
                      <div class="d-flex px-3 py-1">
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">{{data.kode}}</h6>
                          <p class="text-xs text-secondary mb-0">{{data.nama_barang}}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-xs font-weight-bold mb-0">{{data.satuan}}</p>
                      <p class="text-xs text-secondary mb-0">{{data.jenis}}</p>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">{{rupiah(data.harga_barang)}}</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">{{data.qty_masuk}}</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">{{data.qty_keluar}}</span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">{{data.qty_sisa}}</span>
                    </td>
                    <td class="align-middle text-end px-3 py-1">
                    <a class="btn btn-link text-danger text-gradient px-3 mb-0" href="javascript:;"><i class="material-icons text-sm me-2">delete</i>Delete</a>
                    <a class="btn btn-link text-dark px-3 mb-0" href="javascript:;"><i class="material-icons text-sm me-2">edit</i>Edit</a>
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
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
  export default {
    data () {
      return {
        search:'', page: 1, perPage: 10, table:'', code:'', data:[]
      }
    },
    async asyncData({$axios}) {
      const datas = await $axios.$get(`view-goods`)
      return { datas }
    },
    computed: {
      filteredDatas() {
        this.table = this.datas.filter((data) => {
          return data.nama_barang.toLowerCase().includes(this.search.toLowerCase());
        });
        let start = (this.page - 1) * this.perPage
          let end = start + this.perPage
          return this.table.slice(start, end)
      },
    },
    methods: {
      rupiah(a) {
      return new Intl.NumberFormat('id-ID', {
        style: 'decimal',
        currency: 'IDR',
        minimumFractionDigits: 0
      }).format(a);},
      },
  }
</script>
