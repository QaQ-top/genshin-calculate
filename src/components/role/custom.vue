<script lang="ts">
import { defineComponent, defineProps, defineEmits, reactive, toRef, type Ref } from 'vue'
import { NDescriptions, NDescriptionsItem, NInputNumber, NInput } from 'naive-ui'

export default defineComponent({
  name: 'RoleCustom'
})
</script>
<script setup lang="ts">
// const props = defineProps()
const emits = defineEmits([])

const name = reactive({
  label: 'name',
  value: ''
}),
  level = reactive({
    label: 'level',
    value: 1
  });

const attr = Object.fromEntries(
  ([name, level]).map((i) => [i.label, toRef(i, 'value')])
) as { name: Ref<string>, level: Ref<number> }
console.log(attr)
</script>
<template>
  <NDescriptions label-placement="left" title="角色信息">
    <NDescriptionsItem>
      <template #label>
        {{ $t(name.label) }}
      </template>
      <div>
        <NInput v-model:value="name.value" />
      </div>
    </NDescriptionsItem>
    <NDescriptionsItem>
      <template #label>
        {{ $t(level.label) }}
      </template>
      <div>
        <NInputNumber v-model:value="level.value" :min="1" :max="90" />
      </div>
    </NDescriptionsItem>
  </NDescriptions>
</template>
<style scoped lang=""></style>