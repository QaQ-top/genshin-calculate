import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { Attribute, ElementType, Role, type RatioGroupParams } from './utils/basicClass'

createApp(App).mount('#app')

function getC2Ratio(notGeneralAttack?: boolean) {
  const ratios: RatioGroupParams[] = [
    // {
    //   describe: '满层2命',
    //   max: 2700,
    //   value: {
    //     AttackingForce: 90
    //   }
    // }
  ]
  if (!notGeneralAttack) {
    // ratios.push({
    //   describe: '余响',
    //   value: {
    //     AttackingForce: 35
    //   }
    // })
  }
  return ratios
}

function getClorindeHolyRelic() {
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
        type: '*',
        target: 'AttackingForce',
        value: 5.2,
        description: '杯子·副词条'
      }),
      new Attribute({
        type: '+',
        target: 'ProficientElements',
        value: 23.3,
        description: '杯子·副词条'
      }),
      new Attribute({
        type: '+',
        target: 'CriticalDamage',
        value: 41.2,
        description: '杯子·副词条'
      }),
      new Attribute({
        type: '*',
        target: 'DefensiveForce',
        value: 6.6,
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

const clorindeRole = new Role(
  {
    name: '克洛琳德',
    level: 90,
    HealthPoint: 12956,
    AttackingForce: 337 + 674,
    DefensiveForce: 784,
    ProficientElements: 0,
    ElementalDamage: 0,
    ElementsToRecharge: 0,
    CriticalStrikeChance: 29,
    CriticalDamage: 50,
    DefenseReduction: 0,
    DefenseIgnore: 0,
    e: [
      {
        name: '驰猎·满契',
        ratio: [
          {
            describe: '驰猎·满契',
            value: {
              AttackingForce: 64.1
            }
          },
          ...getC2Ratio()
        ],
        elementType: 4,
        targetElementType: 1
      },
      {
        name: '驰猎·>100%契',
        ratio: [
          {
            describe: '驰猎·>100%契',
            value: {
              AttackingForce: 92.9
            }
          },
          ...getC2Ratio()
        ],
        elementType: 4,
        targetElementType: 1
      },
      {
        name: '贯夜·空契',
        ratio: [
          {
            describe: '贯夜·空契',
            value: {
              AttackingForce: 79
            }
          },
          ...getC2Ratio()
        ],
        elementType: 4,
        targetElementType: 1
      },
      {
        name: '贯夜·100%>契>0%',
        ratio: [
          {
            describe: '贯夜·100%>契>0%',
            value: {
              AttackingForce: 105.3
            }
          },
          ...getC2Ratio()
        ],
        elementType: 4,
        targetElementType: 1
      },
      {
        name: '贯夜·契>100%',
        ratio: [
          {
            describe: '贯夜·契>100%',
            value: {
              AttackingForce: 56 * 3
            }
          },
          ...getC2Ratio()
        ],
        elementType: 4,
        targetElementType: 1
      },
      {
        name: 'c1·夜巡之影',
        ratio: [
          {
            describe: 'c1·夜巡之影',
            value: {
              AttackingForce: 30
            }
          },
          ...getC2Ratio()
        ],
        elementType: 4,
        targetElementType: 1
      },
      {
        name: 'c6·明烛之影',
        ratio: [
          {
            describe: 'c6·明烛之影',
            value: {
              AttackingForce: 200
            }
          },
          ...getC2Ratio()
        ],
        elementType: 4,
        targetElementType: 1
      }
    ],
    q: [
      {
        name: '残光将终',
        ratio: [
          {
            describe: '残光将终',
            value: {
              AttackingForce: 269.6
            }
          },
          ...getC2Ratio(true)
        ],
        elementType: 4,
        targetElementType: 1
      }
    ]
  },
  [
    ...getClorindeHolyRelic(),
    new Attribute({
      type: '+',
      description: 'c6·增益',
      target: 'CriticalDamage',
      value: 70
    }),
    new Attribute({
      type: '+',
      description: 'c6·增益',
      target: 'CriticalStrikeChance',
      value: 10
    }),
    new Attribute({
      type: '+',
      description: '天赋1·增益',
      target: 'CriticalStrikeChance',
      value: 20
    }),
    new Attribute({
      type: '+',
      description: '武器副词条',
      target: 'CriticalDamage',
      value: 44.1
    }),
    new Attribute({
      type: '+',
      description: '武器精1特效',
      target: 'CriticalDamage',
      value: 20
    }),
    new Attribute({
      type: '+',
      description: '武器精1特效',
      target: 'ElementalDamage',
      value: 16 * 3
    }),
    new Attribute({
      type: '+',
      description: '圣遗物特效',
      target: 'ElementalDamage',
      value: 54
    }),
    // new Attribute({
    //   type: '+',
    //   description: '万叶增伤',
    //   target: 'ElementalDamage',
    //   value: 40
    // }),
    // new Attribute({
    //   type: '+',
    //   description: '万叶c2',
    //   target: 'ProficientElements',
    //   value: 200
    // }),
    // new Attribute({
    //   type: '+',
    //   description: '精1苍古',
    //   target: 'ElementalDamage',
    //   value: 16
    // }),
    // new Attribute({
    //   type: '*',
    //   description: '精1苍古',
    //   target: 'AttackingForce',
    //   value: 20
    // }),
    // new Attribute({
    //   type: '+',
    //   description: '草神天赋',
    //   target: 'ProficientElements',
    //   value: 200
    // }),
    // new Attribute({
    //   type: '+',
    //   description: '草神c2',
    //   target: 'DefenseReduction',
    //   value: 30
    // })
    // new Attribute({
    //   type: '+',
    //   description: '水神Q',
    //   target: 'ElementalDamage',
    //   value: 100
    // }),
    // new Attribute({
    //   type: '+',
    //   description: '班尼特Q',
    //   target: 'AttackingForce',
    //   value: 1200
    // }),
    // new Attribute({
    //   type: '*',
    //   description: '班尼特Q·宗室套',
    //   target: 'AttackingForce',
    //   value: 20
    // })
  ]
)

console.log(clorindeRole, clorindeRole.getCauseHarms({ level: 91, take: 10 - 40 }))

function getWavesFlash(): RatioGroupParams[] {
  return [
    {
      describe: '满层2命浪闪',
      value: {
        HealthPoint: 1.34 * 5
      }
    },
    {
      describe: '余响',
      value: {
        AttackingForce: 35
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
        ratio: [
          {
            describe: '瞬水剑·1',
            value: {
              AttackingForce: 126.7
            }
          },
          ...getWavesFlash()
        ],
        elementType: ElementType.water,
        targetElementType: ElementType.physical
      },
      {
        name: '瞬水剑·2',
        ratio: [
          {
            describe: '瞬水剑·2',
            value: {
              AttackingForce: 141.1
            }
          },
          ...getWavesFlash()
        ],
        elementType: ElementType.water,
        targetElementType: ElementType.physical
      },
      {
        name: '瞬水剑·3',
        ratio: [
          {
            describe: '瞬水剑·3',
            value: {
              AttackingForce: 155.5
            }
          },
          ...getWavesFlash()
        ],
        elementType: ElementType.water,
        targetElementType: ElementType.physical
      },
      {
        name: '水影',
        ratio: [
          {
            describe: '水影',
            value: {
              AttackingForce: 243.1
            }
          }
        ],
        elementType: ElementType.water,
        targetElementType: ElementType.physical
      },
      {
        name: 'c6·瞬水剑',
        ratio: [
          {
            describe: 'c6·瞬水剑',
            value: {
              AttackingForce: 450
            }
          },
          {
            describe: '余响',
            value: {
              AttackingForce: 70
            }
          }
        ],
        elementType: ElementType.water,
        targetElementType: ElementType.physical
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
      value: 20 * 2
    }),
    new Attribute({
      type: '+',
      description: 'Q普攻伤害提升',
      target: 'ElementalDamage',
      value: 20
    })
  ]
)

console.log(ayatoRole, ayatoRole.getCauseHarms({ level: 91, take: 10 }))
