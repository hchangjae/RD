import { SCENE } from '@/constant/scene'
import { getByType, getWH } from '@/utils/sceneUtils'
import { GameObjects, Scene } from 'phaser'
import WaveManager from '@/components/WaveManager'

const createText = (round: number) => `Wave ${round}`

type RoundDisplayProps = {
  scene: Scene
}

export default class RoundDisplay extends GameObjects.Text {
  constructor(props: RoundDisplayProps) {
    const { scene } = props

    super(scene, 0, 0, createText(0), { fontFamily: 'phased', fontSize: '20px', padding: { top: 3 } })
  }

  update(...args: any[]): void {
    const [width, height] = getWH(this.scene)

    const mainScene = this.scene.scene.get(SCENE.MAIN)
    const [waveManager] = getByType(mainScene, WaveManager) as WaveManager[]
    const waveNumber = waveManager.getWaveNumber()

    this.setText(createText(waveNumber))
    this.setX(width * 0.02)
    this.setY(height * 0.02)
  }
}
