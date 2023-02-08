<template>
  <q-layout view="lHh Lpr lFf" class="column items-center justify-center">
    <q-page-container style="width: 100%">
      <q-card class="text-center">
        <q-card-section>
          <div class="text-h4">{{title}}</div>
          <div class="text-h6">{{content}}</div>
        </q-card-section>
        <q-separator />
        <q-card-actions vertical>
          <q-btn flat @click="store.dispatch({ type: String(++counter) })">Next</q-btn>
          <q-btn flat @click="store.dispatch({ type: String(--counter) })">Before</q-btn>
        </q-card-actions>
      </q-card>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Question } from "components/models";
import { createStore } from "redux";
import { QEditor } from "quasar";
function counter(
  state: any | number,
  action: any | string) {
  switch (action.type) {
    case '0':
      return {
        id: 0,
        title: 'title 0',
        content: 'content 0'
      }
    case '1':
      return {
        id: 1,
        title: 'title 1',
        content: 'content 1'
      }
    case '2':
      return {
        id: 2,
        title: 'title 2',
        content: 'content 2'
      }
    case '3':
      return {
        id: 3,
        title: 'title 3',
        content: 'content 3'
      }
    case '4':
      return {
        id: 4,
        title: 'title 4',
        content: 'content 4'
      }
    default:
      return state
  }
}
export default defineComponent({
  name: 'MainLayout',
  setup () {
    return {
      counter: ref<number>(0),
    }
  },
  data() {
    return {
      store: createStore(counter),
      title: 'title 0',
      content: 'content 0'
    }
  },
  mounted() {
    this.store.subscribe(() => {
      if(this.counter < 0) {
        this.counter = 0
        return
      }
      const state: Question = this.store.getState()
      this.title = state.title
      this.content = state.content
    })
  },
  watch: {
    counter: function() {
      this.counter === 5 ? this.$router.push('/result') : true
    }
  }
});
</script>
