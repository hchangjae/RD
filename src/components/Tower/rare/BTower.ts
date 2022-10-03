import { TOWER_GRADE } from '@/constant/tower'
import Tower, { TowerProps } from '@/components/Tower'
import Common from '@/components/Weapon/Common'
import { ATTACK_RATE } from '@/components/Weapon'

type BTowerProps = Omit<TowerProps, 'weapon' | 'size' | 'grade'>

export default class BTower extends Tower {
  constructor(props: BTowerProps) {
    const { scene } = props

    const weapon = new Common({
      power: 1,
      range: 1,
      rate: ATTACK_RATE.NORMAL,
    })

    const towerProps = {
      ...props,
      scene: scene,
      text: 'B',
      grade: TOWER_GRADE.RARE,
      weapon,
      size: 25,
    }

    super(towerProps)
  }
}
