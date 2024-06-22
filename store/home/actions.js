export default {
  async renderPage({commit, state}) {
    const given = this.$auth.user.given_name
    const result = await this.$axios.$get(`get-member?profile=${given}`)
    commit('setRender', result)
  }
}
