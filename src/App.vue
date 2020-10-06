<template>
  <a-container justify="start">
    <h1>Aspire Components</h1>
    <a-btn>asdf</a-btn>
  </a-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ABtn from './components/ABtn.vue'
import AContainer from './components/AContainer.vue'

export default defineComponent({
  name: 'App',
  components: {
    ABtn,
    AContainer
  }
})
</script>

<style>
.a-container {
  height: 100vh;
  width: 100vhh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
