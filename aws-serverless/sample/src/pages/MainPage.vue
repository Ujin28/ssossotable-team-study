<template>
  <q-page class="row items-center justify-evenly">
    <div>
      안녕하세요 <p>{{this.userNickname}} 님!</p>
      지금 시간은 <p>{{this.currentTime}} 입니다</p>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from "quasar";
import axios from "axios";

export default defineComponent({
  name: 'MainPage',
  setup () {
    return {
      $q: useQuasar()
    }
  },
  data() {
    return {
      userNickname: ref<string | null | any>(''),
      currentTime: ref<string | null | any>('')
    }
  },
  mounted() {
    if(this.$q.sessionStorage.has('user_nickname')) {
      axios.get('https://tkevlxk9tk.execute-api.us-east-2.amazonaws.com/default/sample')
        .then((response) => {
          console.log(response)
          this.currentTime = response.data
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          this.userNickname = this.$q.sessionStorage.getItem('user_nickname')
        });
    }

  }
});
</script>
