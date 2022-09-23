import { TOWER_GRADE } from '@/constant/tower'
import Tower, { TowerProps } from '@/components/Tower'
import Common from '@/components/Weapon/Common'
import { ATTACK_RATE } from '@/components/Weapon'

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
      scene: scene,
      text: 'E',
      grade: TOWER_GRADE.HERO,
      weapon,
      size: 25,
    }

    super(towerProps)
  }
}
