import { TOWER_GRADE } from '@/constant/tower'
import Tower, { TowerProps } from '@/components/Tower'
import Common from '@/components/Weapon/Common'
import { ATTACK_RATE } from '@/components/Weapon'

type RTowerProps = Omit<TowerProps, 'weapon' | 'size' | 'grade'>

export default class RTower extends Tower {
  constructor(props: RTowerProps) {
    const { scene } = props

    const weapon = new Common({
      power: 1,
      range: 1,
      rate: ATTACK_RATE.NORMAL,
    })

    const towerProps = {
      scene: scene,
      grade: TOWER_GRADE.LEGEND,
      weapon,
      size: 20,
    }

    super(towerProps)
  }
}
