<script lang="ts">
import { defineComponent, defineProps, defineEmits } from 'vue'
import { NSelect } from 'naive-ui'
import { ElementTypes } from '../utils/basicClass'

export default defineComponent({
  name: 'ElementTypesComponent'
})
</script>
<script setup lang="ts">
const props = defineProps<{
  modelValue?: ElementTypes
}>()
const emits = defineEmits(['update:modelValue'])
const options = Object.entries(ElementTypes)
  .filter(([label]) => Number.isNaN(Number(label)))
  .map(([label, value]) => {
    return {
      value,
      label,
      disabled: false
    }
  })
</script>
<template>
  <NSelect
    :value="props.modelValue"
    :options="options"
    @change="(value, option) => emits('update:modelValue', value)"
  />
</template>
<style scoped lang="scss"></style>
