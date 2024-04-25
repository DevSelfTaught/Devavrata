<template>
  <div>
    <Sidebar />
    <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
      <Navbar />
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: 'g-sidenav-show bg-gray-200'
    }
  },
  mounted() {
    this.$mainJs()
  },

}
</script>
