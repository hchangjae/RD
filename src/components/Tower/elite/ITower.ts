import { TOWER_GRADE } from '@/constant/tower'
import Tower, { TowerProps } from '@/components/Tower'
import Common from '@/components/Weapon/Common'
import { ATTACK_RATE } from '@/constant/weapon'

type ITowerProps = Omit<TowerProps, 'weapon' | 'size' | 'grade'>

export default class ITower extends Tower {
  constructor(props: ITowerProps) {
    const { scene } = props

    const weapon = new Common({
      power: 1,
      range: 1,
      rate: ATTACK_RATE.NORMAL,
    })

    const towerProps = {
      ...props,
      scene: scene,
      text: 'I',
      grade: TOWER_GRADE.ELITE,
      weapon,
      size: 25,
    }

    super(towerProps)
  }
}
