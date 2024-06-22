import Swal from "sweetalert2"
export default {
  async renderPage({commit}, data) {
    const result = await this.$axios.$get(`get-member?all=none`)
    commit('renderSet', result)
  },
  async input({ commit, state }, event) {
    commit('btn')
    const data = Object.fromEntries(new FormData(event.target))
    data['password'] = '123456'
    try {
      const result = await this.$axios.$post(`input-member`, data)
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
  },
  async updateForm({ commit, state }, event) {
    commit('btn')
    const data = Object.fromEntries(new FormData(event.target))
    const sk = state.updateData.SK
    try {
      const result = await this.$axios.$put(
        `update-member?sk=${sk}`,
        data
      );
      if (result) {
        Swal.fire({
          position: "center",
          icon: "success",
          text: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        data['SK'] = sk
        commit('btn')
        commit('update', data);
      }
    } catch (error) {
      commit('btn')
      console.log(error);
      Swal.fire({
        text: error,
        icon: "error",
        timer: 3000,
        timerProgressBar: false,
        showConfirmButton: false,
      });
    }
  },
  async remove({ commit, state }, sk) {
    const i = state.member.findIndex((x) => x.SK === sk)
    const status = state.member[i].Status === 'active' ? 'inactive' : 'active'
    const name = state.member[i].Nama
    const username = state.member[i].Username
    const result = await Swal.fire({
      title: name,
      text: `Data akan di ${status}-kan!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Ya, ${status}-kan!`,
    });
    if (result.isConfirmed) {
      await this.$axios.$delete(
        `delete-member?status=${state.member[i].Status}&username=${username}&sk=${sk}`
      );
      commit('deleteItem', sk);
      if (result) {
        Swal.fire({
          position: "center",
          icon: "success",
          text: `Data berhasil di${status}!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  },
}
