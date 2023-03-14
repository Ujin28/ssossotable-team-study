<template>
  <q-page class="row items-center justify-evenly">
    <q-input style="width: 40%;" bottom-slots v-model="text" counter maxlength="12">

      <template v-slot:append>
        <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
      </template>

      <template v-slot:hint>
        닉네임 입력
      </template>

      <template v-slot:after>
        <q-btn round dense flat icon="send" @click="onSubmit" />
      </template>
    </q-input>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from "quasar";
export default defineComponent({
  name: 'IndexPage',
  setup () {
    return {
      $q: useQuasar()
    }
  },
  data() {
    return {
      text: ''
    }
  },
  methods: {
    onSubmit: function() {
      if(this.text !== '') {
        this.$q.sessionStorage.set('user_nickname', this.text)
        this.$router.push('/main')
      }
      else {
        alert('please input your nickname')
      }
    }
  }
});
</script>
