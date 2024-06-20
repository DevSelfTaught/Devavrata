export default {
  async renderPage({commit}, data) {
    const result = await this.$axios.$get(`get-location`)
    commit('renderSet', result)
  }
}
