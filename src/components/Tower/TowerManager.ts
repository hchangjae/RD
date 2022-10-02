import Tower from '@/components/Tower'
import RandomTower from '@/components/Tower/RandomTower'
import { TOWER_GRADE } from '@/constant/tower'
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
