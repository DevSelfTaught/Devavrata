<template>
  <div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <form>
            <div class="modal-header">
              <h1
                class="modal-title fs-5 text-capitalize"
                id="staticBackdropLabel"
              >
                input request
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="items" class="form-label">Items</label>
                <input
                  class="form-control"
                  id="items"
                  name="items"
                  type="text"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="nominal" class="form-label">Nominal</label>
                <input
                  class="form-control"
                  id="nominal"
                  name="nominal"
                  type="number"
                  required
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="submit"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">Understood</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.modal {
  z-index: 9999 !important;
}
</style>
