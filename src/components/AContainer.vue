<template>
  <div :class="classes.aContainer">
    <slot></slot>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { useJustifiable } from '../composable/justifiable.js'
export default {
  props: {
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'start'
    }
  },
  setup (props) {
    const classes = reactive({
      aContainer: computed(() => {
        const base = 'a-container'
        const classList = [base]
        classList.push(useJustifiable(base, props.justify))
        if (props.align === 'start') classList.push('a-container--align-start')
        return classList
      })
    })
    console.log(props.justify)
    return { classes }
  }
}
</script>

<style scoped>
.a-container {
  min-height: 100vh;
  min-width: 100vhh;
  display: flex;
  flex-direction: column;
}
.a-container--align-start {
  align-items: flex-start;
}
.a-container--align-end {
  align-items: flex-end;
}
.a-container--align-center {
  align-items: center;
}
.a-container--justify-start {
  justify-content: flex-start;
}
.a-container--justify-end {
  justify-content: flex-end;
}
.a-container--justify-center {
  justify-content: center;
}
.a-container--justify-between {
  justify-content: space-between;
}
.a-container--justify-around {
  justify-content: space-around;
}
</style>
