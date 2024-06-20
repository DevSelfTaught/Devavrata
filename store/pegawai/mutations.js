export default {
  renderSet(state, value) {
    state.account = value
  },
  inputForm(state, value) {
    state.account.push(value)
    $('#formInput')[0].reset()
    $('#inputForm').modal('hide')
  },
  btn(state) {
    state.btn = state.btn ? false : true
  }
}
