<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <TableMember />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        notSearch: true
      }
    },
    async asyncData({store}) {
      store.dispatch('member/renderPage')
    }
  }
</script>

<style lang="scss" scoped>

</style>
