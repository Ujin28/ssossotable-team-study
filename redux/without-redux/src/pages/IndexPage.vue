<template>
  <q-page class="column items-center justify-evenly">
    <router-link to="/main">
      <q-btn color="primary" label="시작하기"/>
    </router-link>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  setup () {
    return {

    }
  }
});
</script>
