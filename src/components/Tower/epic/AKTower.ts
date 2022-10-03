import { TOWER_GRADE } from '@/constant/tower'
import Tower, { TowerProps } from '@/components/Tower'
import Common from '@/components/Weapon/Common'
import { ATTACK_RATE } from '@/components/Weapon'

type AKTowerProps = Omit<TowerProps, 'weapon' | 'size' | 'grade'>

export default class AKTower extends Tower {
  constructor(props: AKTowerProps) {
    const { scene } = props

    const weapon = new Common({
      power: 1,
      range: 1,
      rate: ATTACK_RATE.NORMAL,
    })

    const towerProps = {
      ...props,
      scene: scene,
      text: 'AK',
      grade: TOWER_GRADE.EPIC,
      weapon,
      size: 25,
    }

    super(towerProps)
  }
}
