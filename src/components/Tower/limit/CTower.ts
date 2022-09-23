import { TOWER_GRADE } from '@/constant/tower'
import Tower, { TowerProps } from '@/components/Tower'
import Common from '@/components/Weapon/Common'
import { ATTACK_RATE } from '@/components/Weapon'

type CTowerProps = Omit<TowerProps, 'weapon' | 'size' | 'grade'>

export default class CTower extends Tower {
  constructor(props: CTowerProps) {
    const { scene } = props

    const weapon = new Common({
      power: 1,
      range: 1,
      rate: ATTACK_RATE.NORMAL,
    })

    const towerProps = {
      scene: scene,
      text: 'C',
      grade: TOWER_GRADE.LIMIT,
      weapon,
      size: 25,
    }

    super(towerProps)
  }
}
