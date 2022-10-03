import { TOWER_GRADE } from '@/constant/tower'
import Tower, { TowerProps } from '@/components/Tower'
import Common from '@/components/Weapon/Common'
import { ATTACK_RATE } from '@/constant/weapon'

type CTowerProps = Omit<TowerProps, 'weapon' | 'size' | 'grade'>

export default class CTower extends Tower {
  constructor(props: CTowerProps) {
    const { scene } = props

    const weapon = new Common({
      power: 3,
      range: 1,
      rate: ATTACK_RATE.NORMAL,
    })

    const towerProps = {
      ...props,
      scene: scene,
      text: 'C',
      grade: TOWER_GRADE.MAGIC,
      // weapon,
      size: 25,
    }

    super(towerProps)
  }
}
