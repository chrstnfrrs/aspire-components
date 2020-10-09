<template>
  <button type="button" class="a-btn">
    <slot></slot>
  </button>
</template>

<style scoped>
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
  padding: 8px 16px;
  border-radius: 2px;
}
</style>
