<template>
  <div>
    <!-- Modal input -->
    <div class="modal fade" id="inputMembership" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog  modal-dialog-centered">
        <div class="modal-content">
          <form @submit.prevent="input" id="input">
            <div class="modal-header">
              <h1 class="modal-title fs-5 text-capitalize">
                Create Membership
              </h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="items" class="form-label">Nama</label>
                <select class="form-select" name="Nama" aria-label="Default select example">
                  <option value="" selected disabled>Open this select menu</option>
                  <option class="text-capitalize" :class="data.Status === 'active' ? 'text-success' : 'text-danger'" v-for="(data, index) in member" :key="index" :value="data.Nama">
                    {{ data.Nama }} - {{ data.Status }}
                  </option>
                </select>
              </div>
              <div class="mb-3">
                <label for="items" class="form-label">Nama</label>
                <select class="form-select" name="location" aria-label="Default select example">
                  <option value="" selected>Open this select menu</option>
                  <option v-for="(data, index) in location" :key="index" :value="data.SK">{{ data.SK }}</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="items" class="form-label">Amount</label>
                <input class="form-control" id="items" name="Amount" type="number" required />
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <span>
                <button v-if="btn" type="submit" class="btn btn-primary">Save</button>
                <button v-else class="btn btn-primary" type="button" disabled>
                  <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                  <span role="status">Loading...</span>
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('membership', ['btn', 'member', 'location'])
  },
  methods: {
    ...mapActions('membership', ['input'])
  },
};
</script>

<style scoped>
.modal {
  z-index: 9999 !important;
}
</style>
