import { getTowerCombListBySrc, TowerComb } from '@/combination'
import Tower from '@/components/Tower'
import RandomTower, { mapTowerToClass } from '@/components/Tower/RandomTower'
import { TOWER_GRADE } from '@/constant/tower'
import { filterDuplicate } from '@/utils/arrayUtils'
import { getByType } from '@/utils/sceneUtils'
import { GameObjects, Scene } from 'phaser'

type TowerManagerProps = {
  scene: Scene
}

export default class TowerManager extends GameObjects.Container {
  constructor(props: TowerManagerProps) {
    const { scene } = props

    super(scene)

    this.scene = scene
  }

  getTowerList() {
    return getByType(this.scene, Tower)
  }

  getNumOfTower(towerClass: typeof Tower) {
    const towerList = this.getTowerList()
    return towerList.reduce((acc, cur) => (cur instanceof towerClass ? acc + cur.getAmount() : acc), 0)
  }

  getSuggestionList() {
    const towerList = this.getTowerList()
    const towerClassList = towerList.map(mapTowerToClass)
    const towerCombList = filterDuplicate(towerClassList.flatMap(getTowerCombListBySrc), (v) => v) || []

    const validTowerDestList = towerCombList.reduce((acc, towerComb) => {
      const isCombinationable = towerComb.src.every((stuff) => this.getNumOfTower(stuff.unit) >= stuff.amount)
      if (isCombinationable) return [...acc, towerComb?.dest]
      return [...acc]
    }, [] as typeof Tower[])

    return validTowerDestList
  }

  combine(towerComb: TowerComb) {
    const dest = towerComb.dest
    const srcList = towerComb.src.flatMap((stuff) => new Array(stuff.amount).fill(stuff.unit) as typeof Tower[])
    srcList.forEach((towerClass) => {
      const [tower] = getByType(this.scene, towerClass) as Tower[]
      tower.decAmount()
    })
    this.addExisting(new dest({ scene: this.scene }))
  }

  addExisting(tower: Tower) {
    const towerList = this.getTowerList()
    const sameTower = towerList.find((v) => v.constructor === tower.constructor)
    if (sameTower) {
      sameTower.incAmount()
      tower.destroy(true)
    } else {
      this.scene.add.existing(tower)
    }
  }

  addTower(count: number, grade = TOWER_GRADE.NORMAL) {
    new Array(count).fill(null).forEach(() => {
      const towerList = this.getTowerList()
      const tower = new RandomTower({ scene: this.scene, grade })
      const sameTower = towerList.find((v) => v.constructor === tower.constructor)

      if (sameTower) {
        sameTower.incAmount()
        tower.destroy(true)
      } else {
        this.scene.add.existing(tower)
      }
    })
  }
}
