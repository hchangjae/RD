import { TOWER_GRADE } from '@/constant/tower'
import Tower, { TowerProps } from '@/components/Tower'
import Common from '@/components/Weapon/Common'
import { ATTACK_RATE } from '@/components/Weapon'

type AITowerProps = Omit<TowerProps, 'weapon' | 'size' | 'grade'>

export default class AITower extends Tower {
  constructor(props: AITowerProps) {
    const { scene } = props

    const weapon = new Common({
      power: 1,
      range: 1,
      rate: ATTACK_RATE.NORMAL,
    })

    const towerProps = {
      scene: scene,
      text: 'AI',
      grade: TOWER_GRADE.EPIC,
      weapon,
      size: 20,
    }

    super(towerProps)
  }
}
