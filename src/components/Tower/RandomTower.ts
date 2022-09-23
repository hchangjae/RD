import Tower from '@/components/Tower'
import { TOWER_GRADE } from '@/constant/tower'
import { getRandomItem } from '@/utils/arrayUtils'
import { Scene } from 'phaser'

const gradeToNameMap: Record<TOWER_GRADE, string> = {
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
const getRandomGrade = () => getRandomItem(Object.keys(gradeToNameMap) as TOWER_GRADE[])

type InitialTowerModuleMap = {}
type PendingTowerModuleMap = Record<TOWER_GRADE, Promise<Tower>>
type FullfilTowerModuleMap = Record<TOWER_GRADE, Tower>
type TowerModuleMap = InitialTowerModuleMap | PendingTowerModuleMap | FullfilTowerModuleMap
let towerModuleMap: TowerModuleMap = {}

type RandomTowerProps = {
  scene: Scene
  grade?: TOWER_GRADE
}

export default class RandomTower extends Tower {
  constructor(props: RandomTowerProps) {
    const fullfilTowerModuleMap = towerModuleMap as FullfilTowerModuleMap
    const { scene, grade = getRandomGrade() } = props
    const towerModule = fullfilTowerModuleMap[grade]
    const towerClassList = Object.values(towerModule)
    const towerClass = getRandomItem(towerClassList)
    const tower = new towerClass({ scene })

    return tower
    super(tower.props)
  }
}

const importTower = (key: TOWER_GRADE) => import(`/src/components/Tower/${mapGradeToName(key)}/index`)

const keys = Object.keys(gradeToNameMap) as TOWER_GRADE[]
const isLast = (index: number) => index === keys.length - 1
const bindModule = (res: any) => async (key: TOWER_GRADE, index: number) => {
  const pendingTowerModuleMap = towerModuleMap as PendingTowerModuleMap
  const module = await importTower(key)
  pendingTowerModuleMap[key] = module
  if (isLast(index)) res(towerModuleMap)
}

export const loadTowerModules = () => new Promise((res) => keys.forEach(bindModule(res)))
