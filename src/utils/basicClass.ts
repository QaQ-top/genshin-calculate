import { reactive, ref, computed, toRefs } from 'vue'
import type { Ref, ComputedRef } from 'vue'

type SpecifiedValue<T, V> = {
  [P in keyof T]: V
}

type ToComputed<T> = SpecifiedValue<T, ComputedRef<number>>

type ToRef<T> = SpecifiedValue<T, Ref<number>>

interface ActualAttribute {
  /** 生命值 */
  HealthPoint: number
  /** 攻击力 */
  AttackingForce: number
  /** 防御力 */
  DefensiveForce: number
  /** 元素精通 */
  ProficientElements: number
  /** 元素伤害 */
  ElementalDamage: number
  /** 元素充能 */
  ElementsToRecharge: number
  /** 暴击几率 */
  CriticalStrikeChance: number
  /** 暴击伤害 */
  CriticalDamage: number
  /** 减防百分比 */
  DefenseReduction: number
  /** 无视防御力百分比 */
  DefenseIgnore: number
}

/** 基础属性 */
interface BasicAttribute extends ActualAttribute {
  /** 名称 */
  name: string
  /** 等级 */
  level: number
}

interface RoleAttribute extends BasicAttribute {
  /** 元素战技 */
  e: MagGroupProps[]
  /** 元素爆发 */
  q: MagGroupProps[]
}

export enum ElementTypes {
  /** 火 */
  fire = 1,
  /** 水 */
  water,
  /** 冰 */
  ice,
  /** 雷 */
  thunder,
  /** 风 */
  wind,
  /** 草 */
  grass,
  /** 岩 */
  rock,
  /** 物理 */
  physical
}

/** 伤害类型 */
export enum DamageTypes {
  Null = 'Null',
  /** 普攻 */
  Normal = 'Normal',
  /** 重击 */
  Heavy = 'Blow',
  /** 下落 */
  Fall = 'Fall',
  /** 元素战技 */
  CombatSkills = 'CombatSkills',
  /** 元素爆发 */
  OutbreakSkills = 'OutbreakSkills'
}

interface Attack {
  /** 攻击每次 */
  name: string
  /** 伤害类型 */
  type: DamageTypes
  /** 元素类型  (1: 火 | 2: 水 | 3: 冰 | 4: 雷 | 5: 风 | 6: 草 | 7: 岩 | 8: 物理) */
  elementType: ElementTypes
  /** 攻击目标元素类型  (1: 火 | 2: 水 | 3: 冰 | 4: 雷 | 5: 风 | 6: 草 | 7: 岩 | 8: 物理) */
  targetElementType?: ElementTypes
}

interface Harm extends Attack {
  value: ComputedRef
  object?: Record<string, ComputedRef<number>>
  extra: {
    [key: string]: any
  }
}

interface Monster {
  /** 怪物等级 */
  level: number
  /** 怪物抗性百分比 */
  take: number
}

export class Role implements ToRef<Omit<BasicAttribute, 'name'>> {
  /** 名称 */
  name: Ref<string>
  level
  HealthPoint
  AttackingForce
  DefensiveForce
  ProficientElements
  ElementalDamage
  ElementsToRecharge
  CriticalStrikeChance
  CriticalDamage
  DefenseReduction
  DefenseIgnore
  /** 元素战技 */
  e: MagnificationGroup[]
  /** 元素爆发 */
  q: MagnificationGroup[]
  //@ts-ignore
  actual: ToComputed<ActualAttribute>
  extras: Attribute[]
  constructor(params: RoleAttribute, extras?: Attribute[]) {
    this.name = ref(params.name)
    this.level = ref(params.level)
    this.HealthPoint = ref(params.HealthPoint)
    this.AttackingForce = ref(params.AttackingForce)
    this.DefensiveForce = ref(params.DefensiveForce)
    this.ProficientElements = ref(params.ProficientElements)
    this.ElementalDamage = ref(params.ElementalDamage)
    this.ElementsToRecharge = ref(params.ElementsToRecharge)
    this.CriticalStrikeChance = ref(params.CriticalStrikeChance)
    this.CriticalDamage = ref(params.CriticalDamage)
    this.DefenseReduction = ref(params.DefenseReduction)
    this.DefenseIgnore = ref(params.DefenseIgnore)
    this.e = params.e.map((i) => new MagnificationGroup(i))
    this.q = params.q.map((i) => new MagnificationGroup(i))
    this.extras = extras || []
    this.actual = this.generateActual();
  }

  /** 获取基础值 */
  getBasicHarm(type: 'e' | 'q'): Harm[] {
    const target = this.actual
    return this[type]
      .map((mag) => {
        const values: ComputedRef<number>[] = []
        const object: Record<string, ComputedRef<number>> = {}
        mag.value.map((ratio) => {
          const item = ratio.value
          for (const _key in item) {
            const key = _key as keyof Role['actual']
            if (Object.prototype.hasOwnProperty.call(item, key)) {
              object[key] = computed(() => {
                // 基础伤害 ((攻击力 or 生命值 or 防御力 or 精通 or ...) * 倍率)
                const basisValue =
                  (target[key] as Ref<number>).value * this.percentageToDecimal(Number(item[key]))
                return ratio.max ? Math.min(basisValue, ratio.max) : basisValue
              })
              values.push(object[key])
            }
          }
        })
        /** 超激化 */
        const SuperIntensified =
          mag.elementType == ElementTypes.thunder && mag.targetElementType == ElementTypes.grass
        /** 蔓激化 */
        const tendrilIntensified =
          mag.elementType == ElementTypes.grass && mag.targetElementType == ElementTypes.thunder
        if (SuperIntensified || tendrilIntensified) {
          // 加入激化反应
          const intensified = computed(() => {
            /** 激化类型系数 超激化1.15 蔓激化1.25 */
            const typeCftAscension = SuperIntensified ? 1.15 : 1.25
            /** 等级提升系数（默认90级） */
            const levelCoefficient = 1446.85
            /** 精通提升 = (5*精通)/(精通+1200) */
            const proficientAscension =
              (5 * target.ProficientElements.value) / (target.ProficientElements.value + 1200)
            /** 激化反应加成值=等级系数*类型系数*(1+精通提升+伤害提升提高) */
            const value = levelCoefficient * typeCftAscension * (1 + proficientAscension + 0)
            return value
          })
          values.push(intensified)
          object.intensified = intensified
        }
        const extraBased = this.extras.filter(
          (i) => i.isBasedInterval && i.damageTypes.includes(mag.type)
        )
        if (extraBased.length) {
          // 额外基础倍率区
          values.push(...extraBased.map((i) => computed(() => i.generatesAdditionValue(this))))
        }
        return {
          name: mag.name,
          type: mag.type,
          elementType: mag.elementType,
          targetElementType: mag.targetElementType,
          value: computed(() => values.reduce((p, i) => p + i.value, 0)),
          object,
          extra: {
            ratio: mag.value
          }
        }
      })
      .flat()
  }

  getCauseHarms(monster: Monster) {
    const basicEHarms = this.getBasicHarm('e')
    const eHarms = basicEHarms.map((i) => this.getHarms(i, monster))
    const basicQHarms = this.getBasicHarm('q')
    const qHarms = basicQHarms.map((i) => this.getHarms(i, monster))
    console.log(eHarms, qHarms)
    console.log(
      eHarms
        .map((i) => ({ ...i, value: i.value.value }))
        .map((i) => `${i.name}: ${i.value}`)
        .join('\r\n')
    )
    console.log(
      qHarms
        .map((i) => ({ ...i, value: i.value.value }))
        .map((i) => `${i.name}: ${i.value}`)
        .join('\r\n')
    )
  }

  getHarms(basicHarm: Harm, monster: Monster): Omit<Harm, 'extra'> {
    // console.log({
    //   // 基础伤害
    //   basicHarm: basicHarm.value.value,
    //   // 增伤区
    //   ElementalDamage: 1 + this.actual.ElementalDamage.value,
    //   // 暴伤区
    //   CriticalDamage: 1 + this.actual.CriticalDamage.value,
    //   // 振幅反应
    //   ReactiveIncrease: this.getReactiveIncreaseInjury(basicHarm),
    //   // 怪物抗性
    //   Take: this.getTakeDamage(monster.take)!,
    //   // 等级差
    //   LevelDiff: this.getLevelDiff(
    //     monster.level,
    //     this.actual.DefenseReduction.value
    //   ),
    // });
    // 理论伤害 =  基础伤害 * (1 + 元素伤害 + 增伤) * (1 + 暴击伤害) * (反应倍率 * (1 + 精通增伤))
    // 实际伤害 = 理论伤害 * 怪物承伤百分比 * 等级差(防御区间)
    const skillsActual = this.generateActual(basicHarm.type)
    const value = computed(() => {
      /** 理论伤害 */
      const theory =
        // 基础伤害
        basicHarm.value.value *
        // 增伤区
        (1 + this.percentageToDecimal(skillsActual.ElementalDamage.value)) *
        // 暴伤区
        (1 + this.percentageToDecimal(skillsActual.CriticalDamage.value)) *
        // 振幅反应
        this.getReactiveIncreaseInjury(basicHarm, skillsActual)
      /** 实际伤害 */
      const actual =
        // 理论伤害
        theory *
        // 怪物抗性 (怪物承伤百分比)
        this.getTakeDamage(monster.take)! *
        // 防御区
        this.defense({
          ignore: skillsActual.DefenseIgnore.value,
          subtract: skillsActual.DefenseReduction.value,
          monsterLevel: monster.level
        })
      return actual
    })
    return {
      ...basicHarm.extra,
      name: basicHarm.name,
      type: basicHarm.type,
      elementType: basicHarm.elementType,
      object: basicHarm.object,
      value
    }
  }
  /** 百分比转小数 */
  percentageToDecimal(val: number) {
    return val / 100
  }

  private getReactiveIncreaseInjury(basicHarm: Harm, skillsActual?: ToComputed<ActualAttribute>) {
    skillsActual = skillsActual || this.actual
    /** (2.78 x 精通) ÷ (精通 + 1400) */
    const masterProfit =
      (2.78 * skillsActual.ProficientElements.value) /
      (1400 + skillsActual.ProficientElements.value)
    let reactiveProfit = 1
    if (
      basicHarm.elementType == ElementTypes.fire &&
      basicHarm.targetElementType == ElementTypes.water
    ) {
      reactiveProfit = 1.5
    }
    if (
      basicHarm.elementType == ElementTypes.fire &&
      basicHarm.targetElementType == ElementTypes.ice
    ) {
      reactiveProfit = 2
    }
    if (
      basicHarm.elementType == ElementTypes.water &&
      basicHarm.targetElementType == ElementTypes.fire
    ) {
      reactiveProfit = 2
    }
    if (
      basicHarm.elementType == ElementTypes.ice &&
      basicHarm.targetElementType == ElementTypes.fire
    ) {
      reactiveProfit = 1.5
    }
    // (反应倍率 * (1 + 精通增伤)
    return reactiveProfit == 1 ? reactiveProfit : reactiveProfit * (1 + masterProfit)
  }

  private getSame(target: keyof BasicAttribute, type?: DamageTypes) {
    return this.extras.filter((attr) => {
      const isTarget = attr.target == target && !attr.isBasedInterval
      if (type) {
        return isTarget && attr.damageTypes.includes(type)
      } else {
        return isTarget && attr.damageTypes == Attribute.AllDamageType
      }
    })
  }

  private generateActual(type?: DamageTypes): ToComputed<ActualAttribute> {
    const hps = this.getSame('HealthPoint', type)
    const AttackingForces = this.getSame('AttackingForce', type)
    const DefensiveForces = this.getSame('DefensiveForce', type)
    const ProficientElements = this.getSame('ProficientElements', type)
    const ElementalDamages = this.getSame('ElementalDamage', type)
    const ElementsToRecharge = this.getSame('ElementsToRecharge', type)
    const CriticalStrikeChance = this.getSame('CriticalStrikeChance', type)
    const CriticalDamages = this.getSame('CriticalDamage', type)
    const DefenseReductions = this.getSame('DefenseReduction', type)
    const DefenseIgnores = this.getSame('DefenseIgnore', type)
    return {
      HealthPoint: computed(
        () =>
          this.HealthPoint.value +
          hps.reduce((pre, i) => {
            return pre + i.generatesAdditionValue(this)
          }, 0)
      ),
      AttackingForce: computed(
        () =>
          this.AttackingForce.value +
          AttackingForces.reduce((pre, i) => {
            return pre + i.generatesAdditionValue(this)
          }, 0)
      ),
      DefensiveForce: computed(
        () =>
          this.DefensiveForce.value +
          DefensiveForces.reduce((pre, i) => {
            return pre + i.generatesAdditionValue(this)
          }, 0)
      ),
      ProficientElements: computed(
        () =>
          this.ProficientElements.value +
          ProficientElements.reduce((pre, i) => {
            return pre + i.generatesAdditionValue(this)
          }, 0)
      ),
      ElementalDamage: computed(
        () =>
          this.ElementalDamage.value +
          ElementalDamages.reduce((pre, i) => {
            return pre + i.generatesAdditionValue(this)
          }, 0)
      ),
      ElementsToRecharge: computed(
        () =>
          this.ElementsToRecharge.value +
          ElementsToRecharge.reduce((pre, i) => {
            return pre + i.generatesAdditionValue(this)
          }, 0)
      ),
      CriticalStrikeChance: computed(
        () =>
          this.CriticalStrikeChance.value +
          CriticalStrikeChance.reduce((pre, i) => {
            return pre + i.generatesAdditionValue(this)
          }, 0)
      ),
      CriticalDamage: computed(
        () =>
          this.CriticalDamage.value +
          CriticalDamages.reduce((pre, i) => {
            return pre + i.generatesAdditionValue(this)
          }, 0)
      ),
      DefenseReduction: computed(
        () =>
          this.DefenseReduction.value +
          DefenseReductions.reduce((pre, i) => {
            return pre + i.generatesAdditionValue(this)
          }, 0)
      ),
      DefenseIgnore: computed(
        () =>
          this.DefenseIgnore.value +
          DefenseIgnores.reduce((pre, i) => {
            return pre + i.generatesAdditionValue(this)
          }, 0)
      )
    }
  }

  /**
   * @description 获取攻击对象承受伤害百分比
   * @date 2023-01-21 22:54:21
   * @private
   * @param {number} resistance 抗性百分比
   * @returns {*}
   * @memberof Role
   */
  getTakeDamage(resistance: number) {
    resistance = this.percentageToDecimal(resistance)
    if (resistance < 0) {
      return 1 - resistance / 2
    }
    if (resistance <= 0.75 && resistance >= 0) {
      return 1 - resistance
    }
    if (resistance > 0.75) {
      return 1 / (1 + 4 * resistance)
    }
  }

  /**
   * @description 获取攻击对象等级差(防御区间)
   * @date 2023-01-21 22:54:21
   * @private
   * @param {{ignore?: number;subtract?: number;monsterLevel: number;}} 抗性
   * @returns {*}
   * @memberof Role
   */
  private defense({
    ignore = 0,
    subtract = 0,
    monsterLevel = 0
  }: {
    /** 无视防御力百分比 */
    ignore?: number
    /** 减防御百分比 */
    subtract?: number
    /** 攻击对象等级 */
    monsterLevel: number
  }) {
    ignore = this.percentageToDecimal(ignore)
    subtract = this.percentageToDecimal(subtract)
    const L = 100 + this.level.value
    const ML = monsterLevel + 100
    // 人物等级+100 / (人物等级+100) + ((1-无视防御力%) * (1-减防%) * (怪物等级+100))
    return L / (L + (1 - ignore) * (1 - subtract) * ML)
  }
}

type EditableAttr = Partial<Record<keyof Role['actual'], number>>

interface MagGroupProps extends Attack {
  /** 倍率组 */
  ratio: RatioGroupParams[]
}

interface RatioInfo {
  describe?: string
  max?: number
}

export interface RatioGroupParams extends RatioInfo {
  value: EditableAttr
}

interface RatioGroup extends RatioInfo {
  value: SpecifiedValue<EditableAttr, Ref<number | undefined>>
}

/** 倍率组 */
export class MagnificationGroup {
  name: string
  type: DamageTypes
  value: RatioGroup[]
  elementType: ElementTypes
  targetElementType?: ElementTypes
  constructor(params: MagGroupProps) {
    this.name = params.name
    this.type = params.type
    this.elementType = params.elementType
    this.targetElementType = params.targetElementType
    this.value = params.ratio.map((i) => {
      return {
        ...i,
        value: toRefs(i.value)
      }
    })
    return reactive(this) as any
  }
}

interface AttributeParams {
  type: Attribute['type']
  target: Attribute['target']
  value: number
  damageTypes?: DamageTypes[]
  description?: string
  /** 是否是百分比 */
  isPercentage?: boolean
  /** 是否是基础区 */
  isBasedInterval?: boolean
}

/** 额外属性 */
export class Attribute {
  static readonly AllDamageType = [
    DamageTypes.Null,
    DamageTypes.Normal,
    DamageTypes.Heavy,
    DamageTypes.Fall,
    DamageTypes.CombatSkills,
    DamageTypes.OutbreakSkills
  ]
  type: '+' | '*'
  target: keyof Role['actual']
  value: Ref<number>
  description: string
  isBasedInterval: boolean
  isPercentage: boolean
  /** 增加的值 */
  currentIncrease = 0
  damageTypes = Attribute.AllDamageType
  constructor({
    type,
    target,
    value,
    description,
    isPercentage = true,
    isBasedInterval = false,
    damageTypes
  }: AttributeParams) {
    this.type = type
    this.value = ref(value)
    this.target = target
    this.description = description || ''
    this.isPercentage = isPercentage
    this.damageTypes = damageTypes || Attribute.AllDamageType
    this.isBasedInterval = isBasedInterval
  }

  protected getValue(role: Role, isActual = false) {
    const basicValue = (isActual ? role.actual : role)[this.target] as Ref<number>
    let run = ''
    if (this.type == '*') {
      run = `return (${basicValue.value} ${this.type} ${this.isPercentage ? role.percentageToDecimal(this.value.value) : this.value.value})`
    } else {
      run = `return ${this.value.value}`
    }
    return (this.currentIncrease = new Function(run)())
  }

  generatesAdditionValue(role: Role) {
    return this.getValue(role)
  }
}

export class AttributeActual extends Attribute {
  constructor(params: AttributeParams) {
    super(params)
  }
  generatesAdditionValue(role: Role) {
    return super.getValue(role, true)
  }
}
