import { TOWER_GRADE } from '@/constant/tower'
import Tower, { TowerProps } from '@/components/Tower'
import Common from '@/components/Weapon/Common'
import { ATTACK_RATE } from '@/constant/weapon'

type DTowerProps = Omit<TowerProps, 'weapon' | 'size' | 'grade'>

export default class DTower extends Tower {
  constructor(props: DTowerProps) {
    const { scene } = props

    const weapon = new Common({
      power: 1,
      range: 1,
      rate: ATTACK_RATE.NORMAL,
    })

    const towerProps = {
      ...props,
      scene: scene,
      text: 'D',
      grade: TOWER_GRADE.NORMAL,
      weapon,
      size: 25,
    }

    super(towerProps)
  }
}
