<template>
  <div>
    <ModalMembership />
    <div class="card mt-4 mb-3">
      <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
        <div class="bg-gradient-primary shadow-dark border-radius-lg pt-3 pb-3">
          <div class="px-4 row">
            <div class="col-12 col-md-4 d-flex align-items-center mb-3 mb-md-0">
              <h6 class="text-white mb-0">Membership</h6>
            </div>
            <div class="col-12 col-md-8">
              <div class="d-flex gap-3 align-items-center justify-content-end">
                <button type="button" class="btn btn-success py-1 px-3 mb-0" data-bs-toggle="modal"
                  data-bs-target="#inputMembership">
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
                <th class="text-uppercase text-black text-xxs font-weight-bolder ps-4">
                  Date
                </th>
                <th class="text-uppercase text-black text-xxs font-weight-bolder  ps-2 pe-2">
                  Time
                </th>
                <th class="text-uppercase text-black text-xxs font-weight-bolder ps-2 pe-2">
                  Address
                </th>
                <th class="text-uppercase text-black text-xxs font-weight-bolder ps-2 pe-2">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(data, i) in membership" :key="i">
                <td class="align-middle">
                  <span class="text-secondary text-xs font-weight-bold ps-3 text-capitalize">{{
                    data.CreatedAt.split(',')[0]
                  }}</span>
                </td>
                <td class="align-middle">
                  <span class="text-secondary text-xs font-weight-bold">{{
                    data.CreatedAt.split(',')[1]
                  }}</span>
                </td>
                <td class="align-middle">
                  <span class="text-secondary text-xs font-weight-bold">{{
                    data.SK ? data.SK.split('#')[0] : '-'
                  }}</span>
                </td>
                <td class="align-middle">
                  <span class="text-secondary text-xs font-weight-bold">{{
                    data.Amount ? nominal(data.Amount) : '-'
                  }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- <div class="btn-group text-center float-end pt-1 pb-5" role="group">
      <button @click="page = 1" :disabled="page === 1" type="button" class="btn btn-sm btn-primary text-xxs">
        &laquo;
      </button>
      <button @click="page--" :disabled="page === 1" type="button" class="btn btn-sm btn-primary text-xxs">
        Prev
      </button>
      <button class="btn btn-sm btn-dark  text-xxs disabled">{{ `${page}` }}</button>
      <button @click="page++" :disabled="page >= Math.ceil(table.length / perPage)"
        class="btn btn-sm btn-primary  text-xxs">
        Next
      </button>
      <button @click="page = Math.ceil(table.length / perPage)" :disabled="page >= Math.ceil(table.length / perPage)"
        type="button" class="btn btn-sm btn-primary text-xxs">
        &raquo;
      </button>
    </div> -->
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  data() {
    return {
      search: "",
      page: 1,
      perPage: 10,
      table: "",
    }
  },
  computed: {
    ...mapState('membership', ['member', 'membership']),
  },
  methods: {
    ...mapActions('member', ['remove']),
    ...mapMutations('member', ['edit']),
    nominal(a) {
      return new Intl.NumberFormat("id-ID", {
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(a);
    },
  },
};
</script>

<style scoped>
i {
  padding: 6px !important;
  font-size: 16px !important;
}
</style>
