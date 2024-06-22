<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <TableMembership />
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
      store.dispatch('membership/renderPage')
    }
  }
</script>

<style lang="scss" scoped>

</style>
