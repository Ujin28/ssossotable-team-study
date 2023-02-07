<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
      <QFooter>
        <p class="text-center fixed-bottom">© 2022- ssosso.table, </p>
      </QFooter>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',
  setup () {
    const leftDrawerOpen = ref(false)

    return {
    }
  }
});
</script>
