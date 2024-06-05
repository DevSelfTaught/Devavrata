export default {
    async getabsensikaryawan({commit}, data){
        const result = await this.$axios.$get(`get-absensi?method=bulk&type=${data}`)
        commit('getabsensikaryawan', result)
    } 
}