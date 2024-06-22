export default {
  renderSet(state, value) {
    state.account = value
  },
  inputForm(state, value) {
    state.account.push(value)
    $('#formInput')[0].reset()
    $('#inputForm').modal('hide')
  },
  edit(state, value) {
    const index = state.account.findIndex((x) => x.SK === value)
    $("#updateForm").modal("show");
    state.updateData = state.account[index];
  },
  update(state, value) {
    const i = state.account.findIndex((x) => x.SK === value.SK)
    const data = state.account[i];
    data.Nama = value.Nama
    data.Address = value.Address

    $("#updateForm").modal("hide");
    $("#formUpdate")[0].reset();

  },
  btn(state) {
    state.btn = state.btn ? false : true
  }
}
