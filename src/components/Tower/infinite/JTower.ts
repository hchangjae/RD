import { TOWER_GRADE } from '@/constant/tower'
import Tower, { TowerProps } from '@/components/Tower'
import Common from '@/components/Weapon/Common'
import { ATTACK_RATE } from '@/components/Weapon'

type JTowerProps = Omit<TowerProps, 'weapon' | 'size' | 'grade'>

export default class JTower extends Tower {
  constructor(props: JTowerProps) {
    const { scene } = props

    const weapon = new Common({
      power: 1,
      range: 1,
      rate: ATTACK_RATE.NORMAL,
    })

    const towerProps = {
      scene: scene,
      text: 'J',
      grade: TOWER_GRADE.INFINITE,
      weapon,
      size: 20,
    }

    super(towerProps)
  }
}
