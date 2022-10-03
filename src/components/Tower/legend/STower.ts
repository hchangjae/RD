import { TOWER_GRADE } from '@/constant/tower'
import Tower, { TowerProps } from '@/components/Tower'
import Common from '@/components/Weapon/Common'
import { ATTACK_RATE } from '@/constant/weapon'

type STowerProps = Omit<TowerProps, 'weapon' | 'size' | 'grade'>

export default class STower extends Tower {
  constructor(props: STowerProps) {
    const { scene } = props

    const weapon = new Common({
      power: 1,
      range: 1,
      rate: ATTACK_RATE.NORMAL,
    })

    const towerProps = {
      ...props,
      scene: scene,
      text: 'S',
      grade: TOWER_GRADE.LEGEND,
      weapon,
      size: 25,
    }

    super(towerProps)
  }
}
