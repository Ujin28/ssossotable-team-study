<template>
  <q-page class="column items-center justify-center">
    <router-view/>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainPage',
  setup () {
    return {

    }
  }
});
</script>
