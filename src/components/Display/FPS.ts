import { getWH } from '@/utils/sceneUtils'
import { GameObjects, Scene } from 'phaser'
import { getFPS } from '@/utils/etcUtils'

const createText = (fps: number) => `${fps} fps`

type FPSDisplayProps = {
  scene: Scene
}

export default class FPSDisplay extends GameObjects.Text {
  constructor(props: FPSDisplayProps) {
    const { scene } = props

    super(scene, 0, 0, createText(0), { font: `12px`, padding: { top: 3 } })
  }

  update(...args: any[]): void {
    const [width, height] = getWH(this.scene)

    getFPS().then((v) => {
      const fps = Math.round(v)
      this.setText(createText(fps))
      this.setX(width * 0.98 - this.width)
      this.setY(height * 0.04 + 12)
    })
  }
}
