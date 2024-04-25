<template>
  <div class="row mt-4">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-header pb-0">
          <div class="row">
            <div class="col-lg-6 col-7">
              <h6>Pengeluaran</h6>
            </div>
            <div class="col-lg-6 col-5 my-auto text-end">
              <div class="pe-4">
                <a
                  href="javascript:;"
                  @click="listMenu"
                  class="cursor-pointer"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fa fa-ellipsis-v text-secondary"></i>
                </a>
                <ul
                  v-if="listMenuDashboard"
                  class="list-menu px-2 py-3 ms-sm-n4 ms-n5"
                  aria-labelledby="dropdownTable"
                >
                  <li>
                    <a
                      class="dropdown-item border-radius-md"
                      href="javascript:;"
                      >Action</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item border-radius-md"
                      href="javascript:;"
                      >Another action</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item border-radius-md"
                      href="javascript:;"
                      >Something else here</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body px-0 pb-2">
          <div class="table-responsive">
            <table class="table align-items-center mb-0">
              <thead>
                <tr>
                  <th
                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                  >
                    Deskripsi
                  </th>
                  <th
                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                  >
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="align-middle text-lg">
                  <td>
                    <span class="text-xs font-weight-bold ps-3"> $14,000 </span>
                  </td>
                  <td>
                    <span class="text-xs font-weight-bold"> $14,000 </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listMenuDashboard: false,
    };
  },
  methods: {
    listMenu() {
      this.listMenuDashboard = !this.listMenuDashboard;
    },
  },
};
</script>

<style>
.list-menu {
  position: absolute;
  z-index: 999;
  border-radius: 5px;
  box-shadow: 1px 1px 10px #7a7a7a5d;
  background: #fff;
  right: 20px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
</style>
