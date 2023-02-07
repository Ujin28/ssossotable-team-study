<template>
  <div class="">
    <q-layout view="lHh lpr lFf" container style="height: 100vh; " class="shadow-2 rounded-borders">
      <q-header elevated>
        <q-toolbar>
          <router-link to="/main">
            <q-avatar rounded>
              <img src="src/assets/header.PNG">
            </q-avatar>
          </router-link>
          <q-toolbar-title>ssosso.table quasar</q-toolbar-title>
        </q-toolbar>
        <q-tabs>
          <q-tab name="potato" label="potato" @click="this.$router.push('/content/potato')"/>
          <q-tab name="apple" label="apple" @click="this.$router.push('/content/apple')"/>
          <q-tab name="banana" label="banana" @click="this.$router.push('/content/banana')"/>
        </q-tabs>
      </q-header>

      <q-page-container>
        <router-view />
      </q-page-container>
      <QFooter>
        <p class="text-center fixed-bottom">© 2022- ssosso.table, </p>
      </QFooter>
    </q-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar'
export default defineComponent({
  name: 'ContentLayout',

  setup () {
    return {
      $q: useQuasar()
    };
  },
  data() {
    return {
    }
  },
  methods: {
  }
});
</script>

