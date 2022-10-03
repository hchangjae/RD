import { getTowerCombByDest, TowerComb } from '@/combination'
import Tower from '@/components/Tower'
import TowerManager from '@/components/Tower/TowerManager'
import { EVENT } from '@/constant/event'
import { SCENE } from '@/constant/scene'
import { getByType, getWH } from '@/utils/sceneUtils'
import { GameObjects, Scene } from 'phaser'

type SuggestionDisplayProps = {
  scene: Scene
}
const DELAY = 100
export default class SuggestionDisplay extends GameObjects.Container {
  protected timer: number

  constructor(props: SuggestionDisplayProps) {
    const { scene } = props

    const [width, height] = getWH(scene)

    const border = new GameObjects.Rectangle(scene, width / 2, 0, width * 0.8, width * 0.1)
    border.setStrokeStyle(2.5, 0x550055)

    super(scene, 0, width, [border])

    this.timer = DELAY
  }

  isReady() {
    return this.timer > DELAY
  }

  updateClassList() {
    this.timer -= DELAY

    const mainScene = this.scene.scene.get(SCENE.MAIN)
    const children = this.getAll()
    const [width] = getWH(mainScene)

    const border = children.find((v) => v instanceof GameObjects.Rectangle) as GameObjects.Rectangle

    // 삭제
    let textList = this.getAll().filter((v) => v instanceof GameObjects.Text)
    textList.forEach((text) => text.destroy())

    // 추가
    const [towerManager] = getByType(mainScene, TowerManager)
    const suggestionList = towerManager.getSuggestionList()
    suggestionList.forEach((towerClass, i) => {
      // @ts-ignore
      const tower = new towerClass({ scene: this.scene, isOnlyDisplay: true })
      tower.setX(width * 0.85 - tower.width * i * 1.4)
      tower.setY(-border.height / 4)
      tower.setInteractive()
      tower.on(EVENT.TOUCH_UP, () => {
        const towerComb = getTowerCombByDest(towerClass) as TowerComb
        towerManager.combine(towerComb)
      })

      this.add(tower)
    })
  }

  update(time: number, delta: number): void {
    this.timer += delta

    if (this.isReady()) {
      this.updateClassList()
    }
  }
}
