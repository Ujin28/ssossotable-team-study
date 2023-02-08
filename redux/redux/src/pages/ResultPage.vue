<template>
  <q-page class="column items-center justify-center">
    <h3>결과 페이지입니다</h3>
    <router-link to="/">
      <q-btn color="primary" label="다시 하기"/>
    </router-link>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ResultPage',
  setup () {
    return {

    }
  }
});
</script>
