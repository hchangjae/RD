import Debuff from '@/components/Debuff'
import Enemy from '@/components/Enemy'
import { ATTACK_TYPE, DEBUFF_TYPE } from '@/constant/skill'
import { isInCircle } from '@/utils/numberUtils'
import { getByType } from '@/utils/sceneUtils'

type SkillProps = {
  chance: number
  radius: number
  power: number
  type: ATTACK_TYPE
  debuff?: Debuff
}

export default class Skill {
  protected chance: number
  protected radius: number
  protected power: number
  protected type: ATTACK_TYPE
  protected debuff?: Debuff

  constructor(props: SkillProps) {
    const { chance, radius, power, type, debuff } = props

    this.chance = chance
    this.radius = radius
    this.power = power
    this.type = type
    this.debuff = debuff
  }

  isChance(quantity: number = 1) {
    const chance = 1 - Math.pow(1 - this.chance, quantity)
    return Math.random() < chance
  }

  effect(target: Enemy, quantity: number) {
    const { x: originX, y: originY, scene } = target
    const enemyList = getByType(scene, Enemy) as Enemy[]
    const targetList = enemyList.filter(({ x, y }) => isInCircle(originX, originY, x, y, this.radius))

    targetList.forEach((target) => {
      target.hit(this.power, quantity)
      if (this.debuff) {
        target.spellDebuff(this.debuff.clone())
      }
    })
  }
}
