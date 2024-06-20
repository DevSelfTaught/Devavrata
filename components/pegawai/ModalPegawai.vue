<template>
  <div>
    <!-- Modal -->
    <div class="modal fade" id="inputForm" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <form @submit.prevent="inputForm" id="formInput">
            <div class="modal-header">
              <h1 class="modal-title fs-5 text-capitalize" id="staticBackdropLabel">
                input pegawai
              </h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="items" class="form-label">Nama</label>
                <input class="form-control" id="items" name="name" type="text" />
              </div>
              <div class="mb-3">
                <label for="items" class="form-label">Username</label>
                <input class="form-control" id="items" name="username" type="text" />
              </div>
              <div class="mb-3">
                <label for="nominal" class="form-label">Phone</label>
                <input class="form-control" id="nominal" name="phone" type="number" />
              </div>
              <div class="mb-3">
                <label for="items" class="form-label">Adress</label>
                <label for="items" class="form-label">Adress</label>
                <textarea class="form-control" id="items" name="address"></textarea>
              </div>
              <div class="mb-3">
                <label for="role" class="form-label">Role</label>
                <select class="form-select" name="role" id="role">
                  <option value="">-- Choose ---</option>
                  <option value="manager">Manager</option>
                  <option value="kasir">Kasir</option>
                  <option value="member">Member</option>
                </select>
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
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
  computed: {
    ...mapState('pegawai', ['btn']),
  },
  methods: {
    ...mapActions('pegawai', ['inputForm'])
  },
};
</script>

<style scoped>
/* .modal {
  z-index: 9999 !important;
} */
</style>
