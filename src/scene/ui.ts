import Coin from '@/components/Coin'
import { getWH } from '@/utils/sceneUtils'
import { Scene } from 'phaser'

export default class UIScene extends Scene {
  constructor(props: Phaser.Types.Scenes.SettingsConfig) {
    super({ ...props, key: 'UIScene', active: true })
  }

  create() {
    const [width, height] = getWH(this)

    this.add.existing(new Coin({ scene: this }))
  }

  update(time: number, delta: number): void {
    this.children.list.forEach((v) => v.update(time, delta))
  }
}
