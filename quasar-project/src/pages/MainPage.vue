<template>
  <q-page class="q-pa-md">
    <q-input standout bottom-slots v-model="text" label="리스트 추가" >
      <template v-slot:after>
        <q-btn round dense flat icon="send" @click="addList()"/>
      </template>
    </q-input>
    <div>
      <q-list bordered>
        <template v-for="(element, idx) in elements" v-bind:key="idx">
          <q-item clickable v-ripple>
            <q-item-section>{{element}}</q-item-section>
            <q-item-section avatar>
              <q-icon color="primary" name="close" @click="removeListElement($event, idx)"/>
            </q-item-section>
          </q-item>
          <q-separator/>
        </template>
      </q-list>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar'
export default defineComponent({
  name: 'MainPage',

  setup () {
    return {
      $q: useQuasar()
    };
  },
  data() {
    return {
      text: '',
      key: 0,
      elements: ref<any>({})
    }
  },
  created() {
    this.$q.sessionStorage.has('user_id') ? true : this.$router.push('/')
  },
  mounted() {
    //
  },
  methods: {
    addList: function () {
      this.elements[this.key] = this.text
      this.key+=1
      this.text = ''
    },
    removeListElement: function (event: any, idx: number) {
      if(event !== null) {
        delete this.elements[idx]
      }

    }
  }
});
</script>
