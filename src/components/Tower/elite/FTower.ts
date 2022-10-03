import { TOWER_GRADE } from '@/constant/tower'
import Tower, { TowerProps } from '@/components/Tower'
import Common from '@/components/Weapon/Common'
import { ATTACK_RATE } from '@/constant/weapon'

type FTowerProps = Omit<TowerProps, 'weapon' | 'size' | 'grade'>

export default class FTower extends Tower {
  constructor(props: FTowerProps) {
    const { scene } = props

    const weapon = new Common({
      power: 1,
      range: 1,
      rate: ATTACK_RATE.NORMAL,
    })

    const towerProps = {
      ...props,
      scene: scene,
      text: 'F',
      grade: TOWER_GRADE.ELITE,
      weapon,
      size: 25,
    }

    super(towerProps)
  }
}
