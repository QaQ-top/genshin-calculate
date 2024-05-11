<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { NDescriptions, NDescriptionsItem, NInput } from 'naive-ui'
import type { ActualAttribute } from '../utils/basicClass'
export default defineComponent({
  name: 'BasisAttr'
})
</script>
<script setup lang="ts">
const attr: { value: number; label: keyof ActualAttribute; name: string }[] = reactive([
  {
    label: 'HealthPoint',
    name: '生命值',
    value: 0
  },
  {
    label: 'AttackingForce',
    name: '攻击力',
    value: 0
  },
  {
    label: 'DefensiveForce',
    name: '防御力',
    value: 0
  },
  {
    label: 'ProficientElements',
    name: '元素精通',
    value: 0
  },
  {
    label: 'ElementalDamage',
    name: '元素伤害',
    value: 0
  },
  {
    label: 'ElementsToRecharge',
    name: '元素充能',
    value: 0
  },
  {
    label: 'CriticalStrikeChance',
    name: '暴击几率',
    value: 0
  },
  {
    label: 'CriticalDamage',
    name: '暴击伤害',
    value: 0
  },
  {
    label: 'DefenseReduction',
    name: '减防百分比',
    value: 0
  },
  {
    label: 'DefenseIgnore',
    name: '无视防御力百分比',
    value: 0
  }
])
</script>
<template>
  <NDescriptions label-placement="left" title="描述">
    <template v-for="item in attr" :key="item.label">
      <NDescriptionsItem>
        <template #label>
          {{ item.name }}
        </template>
        <NInput v-model="item.value" />
      </NDescriptionsItem>
    </template>
  </NDescriptions>
</template>
<style scoped lang="scss"></style>
