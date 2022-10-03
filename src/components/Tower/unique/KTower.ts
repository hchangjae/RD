import { TOWER_GRADE } from '@/constant/tower'
import Tower, { TowerProps } from '@/components/Tower'
import Common from '@/components/Weapon/Common'
import { ATTACK_RATE } from '@/components/Weapon'

type KTowerProps = Omit<TowerProps, 'weapon' | 'size' | 'grade'>

export default class KTower extends Tower {
  constructor(props: KTowerProps) {
    const { scene } = props

    const weapon = new Common({
      power: 1,
      range: 1,
      rate: ATTACK_RATE.NORMAL,
    })

    const towerProps = {
      ...props,
      scene: scene,
      text: 'K',
      grade: TOWER_GRADE.UNIQUE,
      weapon,
      size: 25,
    }

    super(towerProps)
  }
}
