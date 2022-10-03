import { TOWER_GRADE } from '@/constant/tower'
import Tower, { TowerProps } from '@/components/Tower'
import Common from '@/components/Weapon/Common'
import { ATTACK_RATE } from '@/constant/weapon'

type ETowerProps = Omit<TowerProps, 'weapon' | 'size' | 'grade'>

export default class ETower extends Tower {
  constructor(props: ETowerProps) {
    const { scene } = props

    const weapon = new Common({
      power: 1,
      range: 1,
      rate: ATTACK_RATE.NORMAL,
    })

    const towerProps = {
      ...props,
      scene: scene,
      text: 'E',
      grade: TOWER_GRADE.INFINITE,
      weapon,
      size: 25,
    }

    super(towerProps)
  }
}
