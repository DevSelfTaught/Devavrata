import Swal from "sweetalert2";
export default {
  async submit({ commit, state }, datas) {
    commit('btn')
    const data = Object.fromEntries(new FormData(datas.event.target));
    try {
      const result = await this.$auth.loginWith("local", { data: data });
      if (result) {
        datas.$cookies.set("AccessToken", result.data.AccessToken, {
          // secure: true,
          expires: 1,
        });
        commit('btn')
        this.$router.push("/pegawai");
      }
    } catch (error) {
      commit('btn')
      if (error.response && error.response.status === 500) {
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
