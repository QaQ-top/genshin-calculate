import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { Role } from './utils/basicClass'

createApp(App).mount('#app')
const role = new Role(
  {
    name: '克洛琳德',
    level: 90,
    HealthPoint: 12956,
    AttackingForce: 337,
    DefensiveForce: 784,
    ProficientElements: 0,
    ElementalDamage: 0,
    CriticalDamage: 50,
    DefenseReduction: 0,
    DefenseIgnore: 0,
    e: [
      {
        name: '驰猎·满契',
        value: [
          {
            AttackingForce: 52.9
          }
        ],
        elementType: 4,
        targetElementType: 1
      },
      {
        name: '驰猎·>100%契',
        value: [
          {
            AttackingForce: 66.1
          }
        ],
        elementType: 4,
        targetElementType: 1
      },
      {
        name: '贯夜·空契',
        value: [
          {
            AttackingForce: 65.2
          }
        ],
        elementType: 4,
        targetElementType: 1
      },
      {
        name: '贯夜·>0%契',
        value: [
          {
            AttackingForce: 86.9
          }
        ],
        elementType: 4,
        targetElementType: 1
      }
    ],
    q: [
      {
        name: '残光将终',
        value: [
          {
            AttackingForce: 228.4
          }
        ],
        elementType: 4,
        targetElementType: 1
      }
    ]
  },
  []
)

console.log(role, role.getCauseHarms({ level: 90, take: 10 }))
