<template>
  <button type="button" class="a-btn">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ABtn'
})
</script>

<style>
:root {
  --primary: #25d0bc;
  --primary-text: #181925;
  --background: #181925;
}

button {
  outline: none;
  border: none;
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  overflow: visible;
  text-transform: none;
  -webkit-appearance: button;
}
.a-btn {
  background: var(--primary);
  color: var(--background);
  padding: 8px 16px;
  border-radius: 2px;
}
</style>
