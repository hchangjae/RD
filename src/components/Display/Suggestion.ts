import { getTowerCombByDest, TowerComb } from '@/combination'
import Tower from '@/components/Tower'
import TowerManager from '@/components/Tower/TowerManager'
import { EVENT } from '@/constant/event'
import { SCENE } from '@/constant/scene'
import { MAIN_HEIGHT, MAIN_WIDTH, PADDING, SUGGESTION_HEIGHT, SUGGESTION_WIDTH } from '@/constant/ui'
import { getByType, getWH } from '@/utils/sceneUtils'
import { GameObjects, Scene } from 'phaser'

type SuggestionDisplayProps = {
  scene: Scene
}
const DELAY = 300
export default class SuggestionDisplay extends GameObjects.Container {
  protected timer: number

  constructor(props: SuggestionDisplayProps) {
    const { scene } = props

    const [width] = getWH(scene)

    const border = new GameObjects.Rectangle(scene, 0, 0)
    border.setSize(SUGGESTION_WIDTH * width, SUGGESTION_HEIGHT * width)
    border.setOrigin(0, 0)
    border.setStrokeStyle(2.5, 0x550055)

    const x = PADDING * width
    const y = (MAIN_HEIGHT + PADDING * 1.5) * width
    super(scene, x, y, [border])

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
    let widthSum = 0
    suggestionList.forEach((towerClass, i) => {
      // @ts-ignore
      const tower = new towerClass({ scene: this.scene, isOnlyDisplay: true })
      tower.setOrigin(0, 0)
      tower.setX((SUGGESTION_WIDTH - 0.01) * width - widthSum * 1.15 - tower.width)
      tower.setY((SUGGESTION_HEIGHT * width) / 2 - (tower.height / 2) * 1.3)

      const hitArea = new Phaser.Geom.Rectangle(0, tower.height / 5, tower.width, tower.height)
      tower.setInteractive(hitArea, Phaser.Geom.Rectangle.Contains)
      tower.on(EVENT.TOUCH_UP, () => {
        const towerComb = getTowerCombByDest(towerClass) as TowerComb
        towerManager.combine(towerComb)
        this.updateClassList()
      })

      widthSum += tower.width
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
