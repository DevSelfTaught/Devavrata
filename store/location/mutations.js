export default {
  renderSet(state, value) {
    state.location = value
  },
  input(state, value) {
    state.location.push(value)
    $('#input')[0].reset()
    $('#inputLocation').modal('hide')
  },
  deleteItem(state, value) {
    const i = state.location.findIndex((x) => x.SK === value);
    state.location.splice(i, 1);
  },

  // partikel
  btn(state) {
    state.btn = state.btn ? false : true
  }
}
