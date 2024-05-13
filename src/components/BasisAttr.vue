<script lang="ts">
import { defineComponent, reactive, toRef } from 'vue'
import { NDescriptions, NDescriptionsItem, NInputNumber, type InputNumberProps } from 'naive-ui'
import type { ActualAttribute, ToRef } from '@/utils/basicClass'
export default defineComponent({
  name: 'BasisAttr'
})
</script>
<script setup lang="ts">
type Attr = { value: number; label: keyof (ActualAttribute & { name: ''; level: 0 }) }
const attrConfig = reactive<(Attr & Omit<InputNumberProps, 'value'>)[]>([
  {
    label: 'HealthPoint',
    value: 0
  },
  {
    label: 'AttackingForce',
    value: 0
  },
  {
    label: 'DefensiveForce',
    value: 0
  },
  {
    label: 'ProficientElements',
    value: 0
  },
  {
    label: 'ElementalDamage',
    value: 0
  },
  {
    label: 'ElementsToRecharge',
    value: 0
  },
  {
    label: 'CriticalStrikeChance',
    value: 0
  },
  {
    label: 'CriticalDamage',
    value: 0
  },
  {
    label: 'DefenseReduction',
    value: 0
  },
  {
    label: 'DefenseIgnore',
    value: 0
  }
])
const attr = Object.fromEntries(
    (attrConfig as unknown as Attr[]).map((i) => [i.label, toRef(i, 'value')])
  ) as ToRef<ActualAttribute>
  console.log(attr)
</script>
<template>
  <NDescriptions label-placement="left" title="角色属性">
    <template v-for="item in attrConfig" :key="item.label">
      <NDescriptionsItem>
        <template #label>
          {{ $t(item.label) }}
        </template>
        <div>
          <NInputNumber v-model:value="item.value" :min="item.min || 0" :max="item.max" />
        </div>
      </NDescriptionsItem>
    </template>
  </NDescriptions>
</template>
<style scoped></style>
