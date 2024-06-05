export default {
    async RiwayatAbsensiKaryawan({commit}, data){
        const name = this.$auth.user.name
        const result = await this.$axios.$get(`get-absensi?method=single&name=${name}`)
        commit('RiwayatAbsensiKaryawan', result)
    } 
}