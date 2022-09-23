import { TOWER_GRADE } from '@/constant/tower'
import Tower, { TowerProps } from '@/components/Tower'
import Common from '@/components/Weapon/Common'
import { ATTACK_RATE } from '@/components/Weapon'

type AFTowerProps = Omit<TowerProps, 'weapon' | 'size' | 'grade'>

export default class AFTower extends Tower {
  constructor(props: AFTowerProps) {
    const { scene } = props

    const weapon = new Common({
      power: 1,
      range: 1,
      rate: ATTACK_RATE.NORMAL,
    })

    const towerProps = {
      scene: scene,
      text: 'AF',
      grade: TOWER_GRADE.EPIC,
      weapon,
      size: 20,
    }

    super(towerProps)
  }
}
