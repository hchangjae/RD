import { TOWER_GRADE } from '@/constant/tower'
import Tower, { TowerProps } from '@/components/Tower'
import Common from '@/components/Weapon/Common'
import { ATTACK_RATE } from '@/constant/weapon'

type QTowerProps = Omit<TowerProps, 'weapon' | 'size' | 'grade'>

export default class QTower extends Tower {
  constructor(props: QTowerProps) {
    const { scene } = props

    const weapon = new Common({
      power: 10,
      range: 1,
      rate: ATTACK_RATE.NORMAL,
    })

    const towerProps = {
      ...props,
      scene: scene,
      text: 'Q',
      grade: TOWER_GRADE.RARE,
      weapon,
      size: 25,
    }

    super(towerProps)
  }
}
