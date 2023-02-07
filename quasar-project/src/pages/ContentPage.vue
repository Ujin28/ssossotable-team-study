<template>
  <q-page class="q-pa-md text-center items-center">
    <img :src="image" style="width: 320px;">
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar'
export default defineComponent({
  name: 'ContentPage',
  setup () {

    return {
      $q: useQuasar()
    };
  },
  data() {
    return {
      tab: ref(''),
      image: ''
    }
  },
  created() {
    this.$q.sessionStorage.has('user_id') ? true : this.$router.push('/')
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        switch (String(toParams.id)) {
          case 'potato':
            this.tab = 'potato'
            this.image = 'src/assets/potato.jpg'
            break;
          case 'apple':
            this.tab = 'apple'
            this.image = 'src/assets/apple.jpg'
            break;
          case 'banana':
            this.tab = 'banana'
            this.image = 'src/assets/banana.png'
            break;
        }
      }
    )
  },
  mounted() {
    switch (String(this.$route.params.id)) {
      case 'potato':
        this.tab = 'potato'
        this.image = 'src/assets/potato.jpg'
        break;
      case 'apple':
        this.tab = 'apple'
        this.image = 'src/assets/apple.jpg'
        break;
      case 'banana':
        this.tab = 'banana'
        this.image = 'src/assets/banana.png'
        break;
    }

  },
  methods: {
  }
});
</script>
