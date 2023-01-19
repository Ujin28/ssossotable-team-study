<template>
  <Header/>
  <main class="d-flex flex-column" style="text-align: center; margin: auto;">
    <h3 style="margin: 25% auto 5% auto;">안녕하세요</h3>

    <div class="input-group mb-3">
      <input v-model="value" type="text" class="form-control" placeholder="리스트를 추가해보세요">
      <button class="btn btn-outline-secondary" type="button" @click="add">추가</button>
    </div>
    <ul class="list-group">
      <template v-for="item in this.items">
        <li
            @mouseout="this.items[item.index].classList.splice(this.items[item.index].classList.indexOf('active'),1)"
            @mouseenter="this.items[item.index].classList.push('active')"
            @click="remove(item.index, $event)"
            :style="item.style"
            :class="item.classList">{{item.content}}</li>
      </template>
    </ul>
  </main>
  <Footer/>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Main",
  components: {
    Footer,
    Header
  },
  methods: {
    add: function () {
      this.value !== '' ? this.items.push({ index: this.count++, content: this.value, classList: ['list-group-item'], style: {textAlign:'left'} }) : alert('내용을 입력해주세요')
      this.value = ''
    },
    remove: function (index, event) {

      this.items[index].style.display = 'none'
    }
  },
  setup() {
    return {

    }
  },
  data() {
    return {
      items: [],
      value: '',
      count: 0
    }
  },
  created() {
    this.$cookies.keys().length === 0 ? this.$router.push('/') : 1 > 0
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>