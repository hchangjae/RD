import { INFO_HEIGHT, INFO_WIDTH, MAIN_HEIGHT, MAIN_WIDTH, PADDING } from '@/constant/ui'
import { getWH } from '@/utils/sceneUtils'
import { GameObjects, Scene } from 'phaser'

type InfoDisplayProps = {
  scene: Scene
}

export default class InfoDisplay extends GameObjects.Container {
  constructor(props: InfoDisplayProps) {
    const { scene } = props

    const [width] = getWH(scene)

    const border = new GameObjects.Rectangle(scene, 0, 0)
    border.setSize(INFO_WIDTH * width, INFO_HEIGHT * width)
    border.setOrigin(0, 0)
    border.setStrokeStyle(2.5, 0x550055)

    const x = (MAIN_WIDTH + PADDING * 1.5) * width
    const y = PADDING * width
    super(scene, x, y, [border])
  }

  updateClassList() {}

  update(time: number, delta: number): void {}
}
