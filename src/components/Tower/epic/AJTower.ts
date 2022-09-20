import { TOWER_GRADE } from '@/constant/tower'
import Tower, { TowerProps } from '../index'
import Common from '../Weapon/Common'
import { ATTACK_RATE } from '../Weapon/index'

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
      scene: scene,
      grade: TOWER_GRADE.EPIC,
      weapon,
      size: 20,
    }

    super(towerProps)
  }
}
