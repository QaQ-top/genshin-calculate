<script lang="ts">
import {
  defineComponent,
  defineProps,
  defineEmits,
  type CSSProperties,
  getCurrentInstance
} from 'vue'
import { NSelect } from 'naive-ui'
import { ElementTypes } from '../utils/basicClass'

export default defineComponent({
  name: 'ElementTypesComponent'
})
</script>
<script setup lang="ts">
const props = defineProps<
  {
    modelValue?: ElementTypes
    isDamage?: boolean
  } & {
    class?: unknown
    style?: CSSProperties
  }
>()
const emits = defineEmits(['update:modelValue'])
const self = getCurrentInstance()
const options = Object.entries(ElementTypes)
  .filter(
    ([label]) =>
      (!props.isDamage ? label != ElementTypes[ElementTypes.physical] : true) &&
      Number.isNaN(Number(label))
  )
  .map(([label, value]) => {
    return {
      value,
      label: self?.proxy?.$t(label) || label,
      disabled: false
    }
  })
</script>
<template>
  <NSelect
    :value="props.modelValue"
    :options="options"
    :class="props.class"
    :style="[{ minWidth: '100px' }, props.style]"
    @update:value="(value, option) => emits('update:modelValue', value)"
  />
</template>
<style scoped lang="scss"></style>
