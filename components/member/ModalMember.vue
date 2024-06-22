<template>
  <div>
    <!-- Modal input -->
    <div class="modal fade" id="inputMember" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog  modal-dialog-centered">
        <div class="modal-content">
          <form @submit.prevent="input"  id="input">
            <div class="modal-header">
              <h1 class="modal-title fs-5 text-capitalize">
                input Member
              </h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="items" class="form-label">Nama</label>
                <input class="form-control" id="items" name="name" type="text" required />
              </div>
              <div class="mb-3">
                <label for="items" class="form-label">Username</label>
                <input class="form-control" id="items" name="username" type="text" required/>
              </div>
              <div class="mb-3">
                <label for="items" class="form-label">Phone</label>
                <input class="form-control" id="items" name="phone" type="number" required/>
              </div>
              <div class="mb-3">
                <label for="address" class="form-label">Adress</label>
                <textarea class="form-control" id="address" name="address" required></textarea>
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

    <!-- Modal update -->
    <div class="modal fade" id="updateForm" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <form @submit.prevent="updateForm" id="formUpdate">
            <div class="modal-header">
              <h1 class="modal-title fs-5 text-capitalize" id="staticBackdropLabel">
                input pegawai
              </h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="items" class="form-label">Nama</label>
                <input class="form-control" id="items" name="Nama" type="text" required :value="updateData?.Nama" />
              </div>
              <div class="mb-3">
                <label for="items" class="form-label">Phone</label>
                <input class="form-control" id="items" name="PhoneNumber" type="text" required  :value="updateData?.PhoneNumber"/>
              </div>
              <div class="mb-3">
                <label for="items" class="form-label">Amount</label>
                <input class="form-control" id="items" name="Amount" type="number" required :value="updateData?.Amount"/>
              </div>
              <div class="mb-3">
                <label for="address" class="form-label">Adress</label>
                <textarea class="form-control" id="address" name="Address" required :value="updateData?.Address"></textarea>
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
    ...mapState('member', ['btn', 'updateData'])
  },
  methods: {
    ...mapActions('member', ['input', 'updateForm'])
  },
};
</script>

<style scoped>
.modal {
  z-index: 9999 !important;
}
</style>
