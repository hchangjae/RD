import Tower, { TowerProps } from './index'
import Common from './Weapon/Common'
import { ATTACK_RATE } from './Weapon/index'

type ArrowTowerProps = Omit<TowerProps, 'weapon' | 'size'>

export default class ArrowTower extends Tower {
  constructor(props: ArrowTowerProps) {
    const { scene } = props

    const weapon = new Common({
      power: 1,
      range: 1,
      rate: ATTACK_RATE.NORMAL,
    })

    const towerProps = {
      scene: scene,
      weapon,
      size: 50,
    }

    super(towerProps)
  }
}
