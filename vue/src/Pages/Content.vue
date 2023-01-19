<template>
  <Header/>
  <main class="d-flex flex-column" style="text-align: center; margin: auto;">
    <img style="width: 240px; height: 240px; margin: 40% auto 0 auto" :src="`../../src/assets/${this.path}.png`" alt="소소식탁" class="box-img d-inline-block align-text-top">
    <h3 class="card-title">{{this.title}} 페이지입니다</h3>
  </main>
  <Footer/>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

export default {
  name: "Content",
  components: {
    Footer,
    Header
  },
  watch: {
    '$route' (to, from) {
      this.path = to.params.path
      this.title = this.path === 'potato' ? '감자' : (this.path === 'tofu' ? '두부' : '사과')
    }
  },
  data() {
    return {
      path: '',
      title: ''
    }
  },
  computed: {
  },
  created() {
    this.$cookies.keys().length === 0 ? this.$router.push('/') : 1 > 0
  },
  mounted() {
    this.path = this.$route.params.path
    this.title = this.path === 'potato' ? '감자' : (this.path === 'tofu' ? '두부' : '사과')
  }
}
</script>

<style scoped>

</style>