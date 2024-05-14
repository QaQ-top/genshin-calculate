<script lang="ts">
import { defineComponent, defineProps, defineEmits, reactive, toRef, type Ref } from 'vue'
import { NDescriptions, NDescriptionsItem, NInputNumber, NInput } from 'naive-ui'
import useAutoBindStorage from '@/hooks/useAutoBindStorage'
import type { ElementTypes } from '@/utils/basicClass'
import ElementTypesComponent from '../ElementTypesComponent.vue'
interface Props {
  roleId: string | number
}
export default defineComponent({
  name: 'RoleCustom'
})
</script>
<script setup lang="ts">
const props = defineProps<Props>()
const emits = defineEmits([])

const name = reactive({
    label: 'name',
    value: ''
  }),
  level = reactive({
    label: 'level',
    value: 1
  }),
  elementType = reactive({
    label: 'elementType',
    value: undefined as ElementTypes | undefined
  })

const attr = Object.fromEntries(
  [name, level, elementType].map((i) => [i.label, toRef(i, 'value')])
) as { name: Ref<string>; level: Ref<number> }

useAutoBindStorage({
  id: props.roleId,
  key: 'role-custom',
  data: attr
})
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
        {{ $t(elementType.label) }}
      </template>
      <div>
        <ElementTypesComponent v-model="elementType.value" />
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
