import Swal from "sweetalert2"
export default {
  async renderPage({ commit }, data) {
    const result = await this.$axios.$get(`get-pegawai`)
    commit('renderSet', result)
  },
  async inputForm({ commit, state }, event) {
    commit('btn')
    const data = Object.fromEntries(new FormData(event.target))
    data['password'] = '123456'
    try {
      const result = await this.$axios.$post(`input-pegawai`, data)
      if (result) {
        Swal.fire({
          text: 'Added Successfully!',
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        commit('btn')
        commit('inputForm', result)
      }
    } catch (error) {

      if (error.response && error.response.status === 500) {
        commit('btn')
        Swal.fire({
          text: error.response.data.name.replace(/(?=[A-Z])/g, " "),
          icon: "warning",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          text: error.message,
          icon: "warning",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  }
}
