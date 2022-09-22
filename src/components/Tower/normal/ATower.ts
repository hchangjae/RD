import { TOWER_GRADE } from '@/constant/tower'
import Tower, { TowerProps } from '@/components/Tower'
import Common from '@/components/Weapon/Common'
import { ATTACK_RATE } from '@/components/Weapon'
import Skill from '@/components/Skill'
import { ATTACK_TYPE, DEBUFF_TYPE } from '@/constant/skill'
import { getWH } from '@/utils/sceneUtils'
import Slow from '@/components/Debuff/Slow'
import Stun from '@/components/Debuff/Stun'

type ATowerProps = Omit<TowerProps, 'weapon' | 'size' | 'grade'>

export default class ATower extends Tower {
  constructor(props: ATowerProps) {
    const { scene } = props
    const [width] = getWH(scene)

    const weapon = new Common({
      power: 0,
      range: 1,
      rate: ATTACK_RATE.NORMAL,
    })

    const slowDebuff = new Slow({
      type: DEBUFF_TYPE.SLOW_A,
      duration: 10,
      amount: 0.5,
    })

    const stunDebuff = new Stun({
      type: DEBUFF_TYPE.STUN,
      duration: 3,
    })

    const skills = [
      new Skill({ type: ATTACK_TYPE.MAGICAL, chance: 0.1, radius: 1 * width, power: 2, debuff: slowDebuff }),
      new Skill({ type: ATTACK_TYPE.MAGICAL, chance: 0.1, radius: 0.02 * width, power: 0, debuff: stunDebuff }),
    ]

    const towerProps = {
      scene: scene,
      grade: TOWER_GRADE.NORMAL,
      weapon,
      skills: skills,
      size: 20,
    }

    super(towerProps)
  }
}
