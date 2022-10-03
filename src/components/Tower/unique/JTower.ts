import { TOWER_GRADE } from '@/constant/tower'
import Tower, { TowerProps } from '@/components/Tower'
import Common from '@/components/Weapon/Common'
import { ATTACK_RATE } from '@/constant/weapon'

type JTowerProps = Omit<TowerProps, 'weapon' | 'size' | 'grade'>

export default class JTower extends Tower {
  constructor(props: JTowerProps) {
    const { scene } = props

    const weapon = new Common({
      power: 100,
      range: 1,
      rate: ATTACK_RATE.FAST,
    })

    const towerProps = {
      ...props,
      scene: scene,
      text: 'J',
      grade: TOWER_GRADE.UNIQUE,
      weapon,
      size: 25,
    }

    super(towerProps)
  }
}
