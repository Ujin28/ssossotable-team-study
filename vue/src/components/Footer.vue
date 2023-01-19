<template>
  <footer class="fixed-bottom d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <span class="mb-3 mb-md-0 text-muted">© 2022 - 2023 by, <span class="fw-lighter text-decoration-underline">ssosso.table</span></span>
    </div>
    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <Email/>
      <Home/>
      <Logout/>
    </ul>
  </footer>
</template>

<script>
import Email from 'vue-material-design-icons/Email.vue';
import Home from 'vue-material-design-icons/Home.vue';
import Logout from 'vue-material-design-icons/Logout.vue';
export default {
  components: {
    Email,
    Home,
    Logout
  },
  name: "Footer"
}
</script>

<style scoped>
  footer {
    padding: 30px;
  }
  ul span {
    padding: 2px;
  }
</style>