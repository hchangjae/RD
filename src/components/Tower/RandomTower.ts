import Tower from '@/components/Tower'
import { TOWER_GRADE } from '@/constant/tower'

type A = Record<TOWER_GRADE, string>

const gradeToNameMap: A = {
  [TOWER_GRADE.NORMAL]: 'normal',
  [TOWER_GRADE.MAGIC]: 'magic',
  [TOWER_GRADE.RARE]: 'rare',
  [TOWER_GRADE.UNIQUE]: 'unique',
  [TOWER_GRADE.HIDDEN]: 'hidden',
  [TOWER_GRADE.HERO]: 'hero',
  [TOWER_GRADE.BEAST]: 'beast',
  [TOWER_GRADE.LEGEND]: 'legend',
  [TOWER_GRADE.LIMIT]: 'limit',
  [TOWER_GRADE.ELITE]: 'elite',
  [TOWER_GRADE.INFINITE]: 'infinite',
  [TOWER_GRADE.CREATE]: 'create',
  [TOWER_GRADE.EPIC]: 'epic',
  [TOWER_GRADE.ETC]: 'etc',
  [TOWER_GRADE.RUIN]: 'ruin',
}
const mapGradeToName = (key: TOWER_GRADE) => gradeToNameMap[key]

import(`@/components/Tower`)

type RandomTowerProps = {
  grade?: TOWER_GRADE
}

export default class RandomTower extends Tower {
  constructor(props: RandomTowerProps) {
    super()
    const { grade } = props

    console.log(grade)
  }
}
