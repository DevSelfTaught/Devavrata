import Swal from "sweetalert2"
export default {
  async renderPage({commit}, data) {
    const result = await this.$axios.$get(`get-membership`)
    commit('renderSet', result)
  },
  async input({ commit, state }, event) {
    commit('btn')
    const data = Object.fromEntries(new FormData(event.target))
    const i = state.member.findIndex((x) => x.Nama === data.Nama)
    data['memberSK'] = state.member[i].SK
    data['Amount'] = +data.Amount
    try {
      const result = await this.$axios.$post(`input-membership`, data)
      if (result) {
        Swal.fire({
          text: 'Added Successfully!',
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        commit('btn')
        commit('input', result)
      }
    } catch (error) {
      Swal.fire({
        text: error,
        icon: "warning",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  },
}
