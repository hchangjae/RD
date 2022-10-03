import { TOWER_GRADE } from '@/constant/tower'
import Tower, { TowerProps } from '@/components/Tower'
import Common from '@/components/Weapon/Common'
import { ATTACK_RATE } from '@/constant/weapon'

type UTowerProps = Omit<TowerProps, 'weapon' | 'size' | 'grade'>

export default class UTower extends Tower {
  constructor(props: UTowerProps) {
    const { scene } = props

    const weapon = new Common({
      power: 100,
      range: 1,
      rate: ATTACK_RATE.FAST,
    })

    const towerProps = {
      ...props,
      scene: scene,
      text: 'U',
      grade: TOWER_GRADE.UNIQUE,
      weapon,
      size: 25,
    }

    super(towerProps)
  }
}
