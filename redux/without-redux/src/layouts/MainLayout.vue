<template>
  <q-layout view="lHh Lpr lFf" class="column items-center justify-center">
    <q-page-container style="width: 100%">
      <template v-for="(question,idx) in questions" v-bind:key="idx">
        <div v-if="counter == question.id">
          <q-card class="text-center">
            <q-card-section>
              <div class="text-h4">{{question.title}}</div>
              <div class="text-h6">{{question.content}}</div>
            </q-card-section>
            <q-separator />
            <q-card-actions vertical>
              <q-btn flat @click="counter++">Next</q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </template>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Question } from "components/models";
export default defineComponent({
  name: 'MainLayout',
  setup () {
    return {
      questions: ref<Question[]>([
        {
          id: 0,
          title: 'title 0',
          content: 'content 0'
        },
        {
          id: 1,
          title: 'title 1',
          content: 'content 1'
        },
        {
          id: 2,
          title: 'title 2',
          content: 'content 2'
        },
        {
          id: 3,
          title: 'title 3',
          content: 'content 3'
        },
        {
          id: 4,
          title: 'title 4',
          content: 'content 4'
        },
      ]),
      counter: ref<number>(0)
    }
  },
  watch: {
    counter: function() {
      this.counter === 5 ? this.$router.push('/result') : true
    }
  }
});
</script>
