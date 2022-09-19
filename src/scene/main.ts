import { Scene } from 'phaser'
import ArrowTower from '@/components/Tower/ArrowTower'
import getSquarePath from '@/components/Road'
import WaveManager, { testWaveConfigList } from '@/components/WaveManager'

export default class MainScene extends Scene {
  constructor(props: Phaser.Types.Scenes.SettingsConfig) {
    super(props)
  }

  create() {
    const [width, height] = [+this.game.config.width, +this.game.config.height]
    const [centerX, centerY] = [width / 2, height / 2]

    this.add.existing(new ArrowTower({ scene: this, x: centerX, y: centerY }))

    const road = getSquarePath(width, height)
    road.draw(this.add.graphics({ lineStyle: { width: 10, color: 0x550055 } }))

    this.add.existing(new WaveManager({ scene: this, path: road, waveConfigList: testWaveConfigList })).start()
  }

  update(time: number, delta: number): void {
    this.children.list.forEach((v) => v.update(time, delta))
  }
}
