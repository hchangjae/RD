import { TOWER_GRADE } from '@/constant/tower'
import Tower, { TowerProps } from '@/components/Tower'
import Common from '@/components/Weapon/Common'
import { ATTACK_RATE } from '@/constant/weapon'

type YTowerProps = Omit<TowerProps, 'weapon' | 'size' | 'grade'>

export default class YTower extends Tower {
  constructor(props: YTowerProps) {
    const { scene } = props

    const weapon = new Common({
      power: 1,
      range: 1,
      rate: ATTACK_RATE.NORMAL,
    })

    const towerProps = {
      ...props,
      scene: scene,
      text: 'Y',
      grade: TOWER_GRADE.LEGEND,
      weapon,
      size: 25,
    }

    super(towerProps)
  }
}
