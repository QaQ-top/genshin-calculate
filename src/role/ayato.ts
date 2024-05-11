
import {
  Attribute,
  AttributeActual,
  DamageTypes,
  ElementTypes,
  Role,
  type RatioGroupParams
} from "@/utils/basicClass"

function getWavesFlash(): RatioGroupParams[] {
  return [
    {
      describe: '满层2命浪闪',
      value: {
        HealthPoint: 1.34 * 5
      }
    }
  ]
}

function getAyatoHolyRelic() {
  return [
    new Attribute({
      type: '*',
      target: 'AttackingForce',
      value: 18,
      description: '二件套效果'
    }),
    [
      new Attribute({
        type: '+',
        target: 'HealthPoint',
        value: 4778.6,
        description: '花·主词条'
      }),
      new Attribute({
        type: '*',
        target: 'AttackingForce',
        value: 4.7,
        description: '花·副词条'
      }),
      new Attribute({
        type: '+',
        target: 'CriticalStrikeChance',
        value: 10.1,
        description: '花·副词条'
      }),
      new Attribute({
        type: '+',
        target: 'CriticalDamage',
        value: 19.4,
        description: '花·副词条'
      }),
      new Attribute({
        type: '+',
        target: 'ElementsToRecharge',
        value: 11.0,
        description: '花·副词条'
      })
    ],
    [
      new Attribute({
        type: '+',
        target: 'AttackingForce',
        value: 310.8,
        description: '羽毛·主词条'
      }),
      new Attribute({
        type: '*',
        target: 'AttackingForce',
        value: 4.1,
        description: '羽毛·副词条'
      }),
      new Attribute({
        type: '+',
        target: 'CriticalStrikeChance',
        value: 6.6,
        description: '羽毛·副词条'
      }),
      new Attribute({
        type: '+',
        target: 'CriticalDamage',
        value: 25.6,
        description: '羽毛·副词条'
      }),
      new Attribute({
        type: '+',
        target: 'ElementsToRecharge',
        value: 4.5,
        description: '羽毛·副词条'
      })
    ],
    [
      new Attribute({
        type: '*',
        target: 'AttackingForce',
        value: 46.6,
        description: '沙漏·主词条'
      }),
      new Attribute({
        type: '+',
        target: 'DefensiveForce',
        value: 55.6,
        description: '沙漏·副词条'
      }),
      new Attribute({
        type: '*',
        target: 'HealthPoint',
        value: 5.8,
        description: '沙漏·副词条'
      }),
      new Attribute({
        type: '+',
        target: 'CriticalDamage',
        value: 13.2,
        description: '沙漏·副词条'
      }),
      new Attribute({
        type: '+',
        target: 'CriticalStrikeChance',
        value: 9.7,
        description: '沙漏·副词条'
      })
    ],
    [
      new Attribute({
        type: '+',
        target: 'ElementalDamage',
        value: 46.6,
        description: '杯子·主词条'
      }),
      new Attribute({
        type: '+',
        target: 'ElementsToRecharge',
        value: 4.5,
        description: '杯子·副词条'
      }),
      new Attribute({
        type: '+',
        target: 'HealthPoint',
        value: 268,
        description: '杯子·副词条'
      }),
      new Attribute({
        type: '+',
        target: 'CriticalDamage',
        value: 7.8,
        description: '杯子·副词条'
      }),
      new Attribute({
        type: '+',
        target: 'CriticalStrikeChance',
        value: 17.1,
        description: '杯子·副词条'
      })
    ],
    [
      new Attribute({
        type: '+',
        target: 'CriticalDamage',
        value: 62.2,
        description: '头·主词条'
      }),
      new Attribute({
        type: '+',
        target: 'ElementsToRecharge',
        value: 5.2,
        description: '头·副词条'
      }),
      new Attribute({
        type: '+',
        target: 'CriticalStrikeChance',
        value: 12.8,
        description: '头·副词条'
      }),
      new Attribute({
        type: '*',
        target: 'AttackingForce',
        value: 10.5,
        description: '头·副词条'
      }),
      new Attribute({
        type: '+',
        target: 'AttackingForce',
        value: 33.7,
        description: '头·副词条'
      })
    ]
  ].flat(Infinity) as Attribute[]
}

const ayatoRole = new Role(
  {
    name: '神里绫人',
    level: 90,
    HealthPoint: 13715,
    AttackingForce: 299 + 608,
    DefensiveForce: 769,
    ProficientElements: 0,
    ElementalDamage: 0,
    ElementsToRecharge: 0,
    CriticalStrikeChance: 5,
    CriticalDamage: 88.4,
    DefenseReduction: 0,
    DefenseIgnore: 0,
    e: [
      {
        name: '瞬水剑·1',
        type: DamageTypes.Normal,
        ratio: [
          {
            describe: '瞬水剑·1',
            value: {
              AttackingForce: 126.7
            }
          },
          ...getWavesFlash()
        ],
        elementType: ElementTypes.water,
        targetElementType: ElementTypes.physical
      },
      {
        name: '瞬水剑·2',
        type: DamageTypes.Normal,
        ratio: [
          {
            describe: '瞬水剑·2',
            value: {
              AttackingForce: 141.1
            }
          },
          ...getWavesFlash()
        ],
        elementType: ElementTypes.water,
        targetElementType: ElementTypes.physical
      },
      {
        name: '瞬水剑·3',
        type: DamageTypes.Normal,
        ratio: [
          {
            describe: '瞬水剑·3',
            value: {
              AttackingForce: 155.5
            }
          },
          ...getWavesFlash()
        ],
        elementType: ElementTypes.water,
        targetElementType: ElementTypes.physical
      },
      {
        name: '水影',
        type: DamageTypes.Normal,
        ratio: [
          {
            describe: '水影',
            value: {
              AttackingForce: 243.1
            }
          }
        ],
        elementType: ElementTypes.water,
        targetElementType: ElementTypes.physical
      },
      {
        name: 'c6·瞬水剑',
        type: DamageTypes.Normal,
        ratio: [
          {
            describe: 'c6·瞬水剑',
            value: {
              AttackingForce: 450
            }
          }
        ],
        elementType: ElementTypes.water,
        targetElementType: ElementTypes.physical
      }
    ],
    q: []
  },
  [
    ...getAyatoHolyRelic(),
    new Attribute({
      type: '+',
      description: 'c1·增益',
      target: 'ElementalDamage',
      value: 40
    }),
    new Attribute({
      type: '*',
      description: 'c2·增益',
      target: 'HealthPoint',
      value: 50
    }),
    new Attribute({
      type: '+',
      description: '武器副词条',
      target: 'CriticalStrikeChance',
      value: 33.1
    }),
    new Attribute({
      type: '+',
      description: '武器精1特效',
      target: 'ElementalDamage',
      value: 12
    }),
    new Attribute({
      type: '+',
      description: '武器精1特效',
      target: 'ElementalDamage',
      value: 20 * 2,
      damageTypes: [DamageTypes.Normal]
    }),
    new Attribute({
      type: '+',
      description: 'Q普攻伤害提升',
      target: 'ElementalDamage',
      value: 20,
      damageTypes: [DamageTypes.Normal]
    }),
    new AttributeActual({
      type: '*',
      description: '余响·圣遗物特效',
      target: 'AttackingForce',
      value: 35,
      isBasedInterval: true,
      damageTypes: [DamageTypes.Normal]
    })
  ]
)

console.log(ayatoRole, ayatoRole.getCauseHarms({ level: 91, take: 10 }))
