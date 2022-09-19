import { getWH } from '@/utils/sceneUtils'
import { GameObjects, Scene } from 'phaser'

type CoinProps = {
  scene: Scene
}

export default class Coin extends GameObjects.Text {
  private amount: number

  constructor(props: CoinProps) {
    const { scene } = props

    const [width, height] = getWH(scene)

    super(scene, width - width * 0.08, height * 0.02, 0 + '🍖', { font: '20px', padding: { top: 3 } })

    this.amount = 0
  }
}
