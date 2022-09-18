import Tower from './index.js'
import Common from './Weapon/Common.js'

export default class ArrowTower extends Tower {
  constructor() {
    const weapon = new Common({
      power: 10,
      range: 1,
      rate: 1,
    })

    const towerProps = {
      weapon,
    }

    super(towerProps)
  }
}
