export default {
    async getLocation({commit}, data){
        const result = await this.$axios.$get(`get-location`)
        commit('setLocation', result)
    } 
}