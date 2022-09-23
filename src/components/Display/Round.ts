import { SCENE } from '@/constant/scene'
import { getByType, getWH } from '@/utils/sceneUtils'
import { GameObjects, Scene } from 'phaser'
import WaveManager from '@/components/WaveManager'

const createText = (second: number) => `0${Math.floor(second / 60)}`.slice(-2) + ':' + `0${Math.floor(second % 60)}`.slice(-2) + ' 🕒'

type RoundDisplayProps = {
  scene: Scene
}

export default class RoundDisplay extends GameObjects.Text {
  constructor(props: RoundDisplayProps) {
    const { scene } = props

    const [width, height] = getWH(scene)

    super(scene, 0, 0, createText(0), { font: '20px', padding: { top: 3 } })
  }

  update(...args: any[]): void {
    const [width, height] = getWH(this.scene)

    const mainScene = this.scene.scene.get(SCENE.MAIN)
    const [waveManager] = getByType(mainScene, WaveManager) as WaveManager[]
    const duration = waveManager.getDuration()

    this.setText(createText(duration))
    this.setX(width * 0.98 - this.width)
    this.setY(height * 0.02)
  }
}
