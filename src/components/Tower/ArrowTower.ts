import Tower, { TowerProps } from './index.js'
import Common from './Weapon/Common.js'
import { ATTACK_RATE } from './Weapon/index.js'

type ArrowTowerProps = Omit<TowerProps, 'weapon'>

export default class ArrowTower extends Tower {
  constructor(props: ArrowTowerProps) {
    const { scene, x, y } = props

    const weapon = new Common({
      power: 1,
      range: 1,
      rate: ATTACK_RATE.NORMAL,
    })

    const towerProps = {
      scene: scene,
      weapon,
      x,
      y,
    }

    super(towerProps)
  }
}
