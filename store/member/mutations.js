export default {
  renderSet(state, value) {
    state.member = value
  },
  input(state, value) {
    state.member.push(value)
    $('#input')[0].reset()
    $('#inputMember').modal('hide')
  },
  edit(state, value) {
    const index = state.member.findIndex((x) => x.SK === value)
    $("#updateForm").modal("show");
    state.updateData = state.member[index];
  },
  update(state, value) {
    const i = state.member.findIndex((x) => x.SK === value.SK)
    const data = state.member[i];
    data.Nama = value.Nama
    data.Amount = value.Amount
    data.PhoneNumber = value.PhoneNumber
    data.Address = value.Address

    if(+value.Amount >= 1000000 ) {
      data.Status = 'active'
    } else {
      data.Status = 'inactive'
    }

    $("#updateForm").modal("hide");
    $("#formUpdate")[0].reset();

  },
  deleteItem(state, value) {
    const i = state.member.findIndex((x) => x.SK === value);
    const data = state.member[i]
    data.Status = data.Status === 'active' ? 'inactive' : 'active'
    // state.member.splice(i, 1);
  },

  // partikel
  btn(state) {
    state.btn = state.btn ? false : true
  }
}
