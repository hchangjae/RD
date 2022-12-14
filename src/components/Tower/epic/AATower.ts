import { TOWER_GRADE } from '@/constant/tower'
import Tower, { TowerProps } from '@/components/Tower'
import Common from '@/components/Weapon/Common'
import { ATTACK_RATE } from '@/constant/weapon'

type AATowerProps = Omit<TowerProps, 'weapon' | 'size' | 'grade'>

export default class AATower extends Tower {
  constructor(props: AATowerProps) {
    const { scene } = props

    const weapon = new Common({
      power: 1,
      range: 1,
      rate: ATTACK_RATE.NORMAL,
    })

    const towerProps = {
      ...props,
      scene: scene,
      text: 'AA',
      grade: TOWER_GRADE.EPIC,
      weapon,
      size: 25,
    }

    super(towerProps)
  }
}
