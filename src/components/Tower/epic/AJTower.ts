import { TOWER_GRADE } from '@/constant/tower'
import Tower, { TowerProps } from '@/components/Tower'
import Common from '@/components/Weapon/Common'
import { ATTACK_RATE } from '@/components/Weapon'

type AJTowerProps = Omit<TowerProps, 'weapon' | 'size' | 'grade'>

export default class AJTower extends Tower {
  constructor(props: AJTowerProps) {
    const { scene } = props

    const weapon = new Common({
      power: 1,
      range: 1,
      rate: ATTACK_RATE.NORMAL,
    })

    const towerProps = {
      ...props,
      scene: scene,
      text: 'AJ',
      grade: TOWER_GRADE.EPIC,
      weapon,
      size: 25,
    }

    super(towerProps)
  }
}
