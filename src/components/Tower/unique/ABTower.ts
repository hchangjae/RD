import { TOWER_GRADE } from '@/constant/tower'
import Tower, { TowerProps } from '@/components/Tower'
import Common from '@/components/Weapon/Common'
import { ATTACK_RATE } from '@/components/Weapon'

type ABTowerProps = Omit<TowerProps, 'weapon' | 'size' | 'grade'>

export default class ABTower extends Tower {
  constructor(props: ABTowerProps) {
    const { scene } = props

    const weapon = new Common({
      power: 1,
      range: 1,
      rate: ATTACK_RATE.NORMAL,
    })

    const towerProps = {
      scene: scene,
      grade: TOWER_GRADE.UNIQUE,
      weapon,
      size: 20,
    }

    super(towerProps)
  }
}