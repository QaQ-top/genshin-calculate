
import {
  Attribute,
  AttributeActual,
  DamageTypes,
  ElementTypes,
  Role,
  type MagGroupProps,
  type RatioGroupParams
} from "@/utils/basicClass"


function getC2Ratio() {
  const ratios: RatioGroupParams[] = [
    // {
    //   describe: '满层2命',
    //   max: 2700,
    //   value: {
    //     AttackingForce: 90
    //   }
    // }
  ]
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




function getSkillSets() {
  const state = {
    cd: 16,
    continuous: 9,
  };
  return <T>(fn: (params: typeof state) => T) => {
    return fn(state)

  }
}

const init = getSkillSets();
init(({ cd, continuous }) => {
  // 64.1 % /92.9%
  const chiHunting: MagGroupProps = {
    name: '驰猎·满契',
    type: DamageTypes.Normal,
    ratio: [
      {
        describe: '驰猎·满契',
        value: {
          AttackingForce: 64.1
        }
      },
      ...getC2Ratio()
    ],
    elementType: 4
  }
  return chiHunting
})

const ChiHuntingMaxQI: MagGroupProps = {
  name: '驰猎·满契',
  type: DamageTypes.Normal,
  ratio: [
    {
      describe: '驰猎·满契',
      value: {
        AttackingForce: 64.1
      }
    },
    ...getC2Ratio()
  ],
  elementType: 4
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
        type: DamageTypes.Normal,
        ratio: [
          {
            describe: '驰猎·满契',
            value: {
              AttackingForce: 64.1
            }
          },
          ...getC2Ratio()
        ],
        elementType: 4
      },
      {
        name: '贯夜·空契',
        type: DamageTypes.Normal,
        ratio: [
          {
            describe: '贯夜·空契',
            value: {
              AttackingForce: 79
            }
          },
          ...getC2Ratio()
        ],
        elementType: 4
      },
      {
        name: '贯夜·100%>契>0%',
        type: DamageTypes.Normal,
        ratio: [
          {
            describe: '贯夜·100%>契>0%',
            value: {
              AttackingForce: 105.3
            }
          },
          ...getC2Ratio()
        ],
        elementType: 4
      },
      {
        name: '贯夜·契>100%',
        type: DamageTypes.Normal,
        ratio: [
          {
            describe: '贯夜·契>100%',
            value: {
              AttackingForce: 56 * 3
            }
          },
          ...getC2Ratio()
        ],
        elementType: 4
      },
      {
        name: 'c1·夜巡之影',
        type: DamageTypes.Normal,
        ratio: [
          {
            describe: 'c1·夜巡之影',
            value: {
              AttackingForce: 30
            }
          },
          ...getC2Ratio()
        ],
        elementType: 4
      },
      {
        name: 'c6·明烛之影',
        type: DamageTypes.Normal,
        ratio: [
          {
            describe: 'c6·明烛之影',
            value: {
              AttackingForce: 200
            }
          },
          ...getC2Ratio()
        ],
        elementType: 4
      },
      {
        name: 'c6·明烛之影(激化)',
        type: DamageTypes.Normal,
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
        targetElementType: 6
      }
    ],
    q: [
      {
        name: '残光将终',
        type: DamageTypes.OutbreakSkills,
        ratio: [
          {
            describe: '残光将终',
            value: {
              AttackingForce: 269.6
            }
          },
          ...getC2Ratio()
        ],
        elementType: 4,
        targetElementType: 1
      },
    ]
  },
  [
    ...getClorindeHolyRelic(),
    new Attribute({
      type: '+',
      description: 'c6·增益',
      target: 'CriticalDamage',
      value: 70,
      damageTypes: [DamageTypes.Normal]
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
      description: '契套·圣遗物特效',
      target: 'ElementalDamage',
      value: 54
    }),
    // new AttributeActual({
    //   type: '*',
    //   description: '余响·圣遗物特效',
    //   target: 'AttackingForce',
    //   value: 35,
    //   isBasedInterval: true,
    //   damageTypes: [DamageTypes.Normal]
    // }),
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
    //   description: '精1苍古增伤',
    //   target: 'ElementalDamage',
    //   value: 16,
    //   damageTypes: [DamageTypes.Normal, DamageTypes.Heavy]
    // }),
    // new Attribute({
    //   type: '*',
    //   description: '精1苍古加攻击力',
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

console.log(clorindeRole, clorindeRole.getCauseHarms({ level: 91, take: 10 }))
