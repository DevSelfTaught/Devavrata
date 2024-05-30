export default {
    async getallkaryawan({commit}, data){
        const result = await this.$axios.$get(`list-account`)
        commit('setallaccount', result)
        console.log("done")
    } 
}