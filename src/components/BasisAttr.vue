<script lang="ts">
import { defineComponent, reactive, ref, type Ref } from 'vue'
import { NDescriptions, NDescriptionsItem, NInputNumber, type InputNumberProps } from 'naive-ui'
import type { ActualAttribute, ToRef } from '../utils/basicClass'
export default defineComponent({
  name: 'BasisAttr'
})
</script>
<script setup lang="ts">
type Attr = { value: Ref<number>; label: keyof (ActualAttribute & { name: ''; level: 0 }) }
const attr = reactive<(Attr & Omit<InputNumberProps, 'value'>)[]>([
  {
    label: 'HealthPoint',
    value: ref(0)
  },
  {
    label: 'AttackingForce',
    value: ref(0)
  },
  {
    label: 'DefensiveForce',
    value: ref(0)
  },
  {
    label: 'ProficientElements',
    value: ref(0)
  },
  {
    label: 'ElementalDamage',
    value: ref(0)
  },
  {
    label: 'ElementsToRecharge',
    value: ref(0)
  },
  {
    label: 'CriticalStrikeChance',
    value: ref(0)
  },
  {
    label: 'CriticalDamage',
    value: ref(0)
  },
  {
    label: 'DefenseReduction',
    value: ref(0)
  },
  {
    label: 'DefenseIgnore',
    value: ref(0)
  }
])
const getAttribute = () => {
  return Object.fromEntries(
    (attr as unknown as Attr[]).map((i) => [i.label, i.value])
  ) as ToRef<ActualAttribute>
}
</script>
<template>
  <NDescriptions label-placement="left" title="描述">
    <template v-for="item in attr" :key="item.label">
      <NDescriptionsItem>
        <template #label>
          {{ item.label }}
        </template>
        <div>
          <NInputNumber v-model="item.value" :min="item.min || 0" :max="item.max" />
        </div>
      </NDescriptionsItem>
    </template>
  </NDescriptions>
</template>
<style scoped lang="scss"></style>
