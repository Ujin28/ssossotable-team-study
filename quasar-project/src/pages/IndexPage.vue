<template>
  <q-page class="column items-center justify-center">
    <q-avatar rounded size="320px" font-size="82px">
      <img src="src/assets/logo.jpg">
    </q-avatar>
    <q-input standout bottom-slots v-model="text" label="닉네임 입력" counter maxlength="12" :dense="dense">
      <template v-slot:after>
        <q-btn round dense flat icon="send" @click="onSubmit"/>
      </template>
    </q-input>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    return {
      $q: useQuasar(),
      dense: ref(false)
    };
  },
  data() {
    return {
      text: ''
    }
  },
  created() {
    this.$q.sessionStorage.has('user_id') ? this.$router.push('/main') : false
  },
  methods: {
    onSubmit: function () {
      if(this.text !== '') {
        this.$q.sessionStorage.set('user_id', this.text)
        this.$router.push('/main')
      }
    }
  }
});
</script>
