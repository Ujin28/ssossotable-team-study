
<template>
  <main class="d-flex flex-column">
    <img src="../assets/logo.png" style="width: 320px; height: 320px;">
    <div class="input-group mb-3">
      <input v-on="user_id" type="text" class="form-control" placeholder="닉네임을 입력하세요">
      <button class="btn btn-outline-secondary" type="button" @click="auth">로그인</button>
    </div>
  </main>
  <Footer/>
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
  name: "Index",
  components: {
    Footer
  },
  data() {
    return {
      user_id: ''
    }
  },
  methods: {
    auth: function () {
      this.$cookies.set('user_id', this.user_id)
      this.$router.push('/main')
    }
  },
  mounted() {
    if(this.$cookies.isKey('user_id')) {
      this.$router.push('/main')
    }
  }
}
</script>


<style scoped>
  main {
    height: 95%;
  }
  footer {
    height: 5%;
  }
  img {
    margin: 40% auto 0 auto;
  }
  .input-group {
    padding: 5%;
  }
</style>